import IsError from "@/components/IsError";
import IsPending from "@/components/IsPending";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Input } from "@/components/ui/input";
import LoadingCircle from "@/components/ui/loading-circle";
import { Textarea } from "@/components/ui/textarea";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useToast } from "@/components/ui/use-toast";
import { getUserProfile } from "@/features";
import { useTitle } from "@/hooks";
import {
  CONDITION,
  DEVELOPMENT_API_URL,
  PRODUCTION_API_URL,
} from "@/lib/utils/constants";
import { profileSchema } from "@/lib/utils/schemas";
import { setIsUploadLoading } from "@/store/slices/user.slice";
import { UserProfileProps, UserProps, UserSliceProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type JoinProps = Pick<UserProps, "id" | "name" | "email"> & UserProfileProps;

export default function Profile() {
  const navigate = useNavigate();

  useTitle(`Profile | Taritme`);

  const { data, isPending, isError } = useQuery({
    queryKey: ["get-user-profile"],
    queryFn: () => getUserProfile(),
    placeholderData: keepPreviousData,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const initialData = data?.data.data as unknown as JoinProps[];
  const profile = initialData[0];

  return (
    <Layout>
      {isPending ? (
        <IsPending />
      ) : isError ? (
        <IsError />
      ) : (
        <>
          <div className="flex justify-between items-center mb-8">
            <button
              type="button"
              aria-label="kembali"
              className="flex justify-center items-center space-x-2"
              onClick={() => navigate(-1)}
            >
              <Image src="/images/arrow-back-icon.svg" alt="arrow back" />
              <span className="xl:text-2xl">Kembali</span>
            </button>
          </div>
          <div className="mt-5">
            <Heading
              as="h2"
              className="font-normal mb-2 text-primary-color"
              style={{ fontSize: "1.5rem" }}
            >
              Profile
            </Heading>
          </div>
          <FormEditProfile profile={profile} />
        </>
      )}
    </Layout>
  );
}

function FormEditProfile({ profile }: { profile: JoinProps }) {
  const { toast } = useToast();
  const { isUploadLoading } = useSelector(
    (state: UserSliceProps) => state.user
  );

  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nama: profile.name,
      no_hp: profile.no_hp,
      jenis_kelamin: profile.jenis_kelamin,
      umur: profile.age,
      bio: profile.bio,
    },
    resolver: zodResolver(profileSchema),
  });

  async function uploadImage(
    e: ChangeEvent<HTMLInputElement>
  ): Promise<string | undefined> {
    try {
      const formData = new FormData();
      formData.append("my_file", e.target.files![0]);

      const response = await axios.post(
        `${
          CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
        }/api/users/profile/upload-image/${profile.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );

      return response.data.data;
    } catch (err: any) {
      toast({ title: "Error!", description: err.response.data.message });
    }
  }

  async function editUserProfile(): Promise<void> {
    try {
      dispatch(setIsUploadLoading(true));

      const response: AxiosResponse = await axios.patch(
        `${
          CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
        }/api/users/profile/edit/${profile.id}`,
        {
          name: getValues("nama"),
          no_hp: getValues("no_hp"),
          jenis_kelamin: getValues("jenis_kelamin"),
          age: getValues("umur"),
          bio: getValues("bio"),
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );

      if (response.status === 200 || response.status === 204) {
        dispatch(setIsUploadLoading(false));
        toast({ title: "Success!", description: response.data.message });
      } else {
        toast({ title: "Failed!", description: response.data.message });
      }
    } catch (err: any) {
      toast({ title: "Error!", description: err.response.data.message });
    }
  }

  const editUserProfileMutation = useMutation({
    mutationFn: editUserProfile,
    onSuccess: () => queryClient.invalidateQueries(),
  });

  const uploadImageMutation = useMutation({
    mutationFn: uploadImage,
    onSuccess: () => queryClient.invalidateQueries(),
  });

  function onSubmit() {
    editUserProfileMutation.mutate();
  }

  function onChangeImage(e: ChangeEvent<HTMLInputElement>) {
    uploadImageMutation.mutate(e);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <header
        className="mt-5 relative bg-primary-color rounded-t-lg h-36 w-full"
        style={{
          borderTopLeftRadius: "1.3rem",
          borderTopRightRadius: "1.3rem",
        }}
      >
        <div className="absolute bottom-[-3rem] left-6">
          <label htmlFor="image">
            <Image
              className="h-20 w-20 rounded-full border-4 border-white"
              src={profile.image}
              alt="User avatar"
            />
          </label>
          <Input
            id="image"
            name="image"
            type="file"
            className="hidden"
            onChange={onChangeImage}
          />
        </div>
      </header>
      <div className="ml-28 p-2">
        <Paragraph className="text-lg font-medium">{profile.name}</Paragraph>
      </div>

      <div className="mt-5 relative  w-full">
        <div className="grid grid-cols-1 gap-6" style={{ padding: "0 2rem" }}>
          <div className="flex items-center w-full justify-end ">
            <label
              htmlFor="nama"
              className="block text-lg font-medium text-black w-1/3"
            >
              Nama
            </label>
            <Input
              {...register("nama", { required: true })}
              type="text"
              placeholder="Nama Anda"
              className="mt-1 w-2/3 border border-spanish-gray rounded-full p-6"
            />
            <Paragraph className="text-xs font-medium mt-2">
              {errors.nama?.message}
            </Paragraph>
          </div>
          <div className="flex items-center w-full justify-end">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-black w-1/3"
            >
              Nomor Telepon
            </label>
            <Input
              {...register("no_hp", { required: true })}
              type="tel"
              placeholder="Nomor Telepon Anda"
              className="mt-1 w-2/3 border border-spanish-gray rounded-full p-6"
            />
            <Paragraph className="text-xs font-medium mt-2">
              {errors.no_hp?.message}
            </Paragraph>
          </div>
          <div className="flex items-center w-full justify-end">
            <label
              htmlFor="jenis_kelamin"
              className="block text-lg font-medium text-black w-1/3"
            >
              Jenis Kelamin
            </label>
            <select
              defaultValue="Laki-laki"
              {...register("jenis_kelamin", { required: true })}
              className="mt-1 w-2/3 border border-spanish-gray rounded-full p-2 bg-white"
            >
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
            <Paragraph className="text-xs font-medium mt-2">
              {errors.jenis_kelamin?.message}
            </Paragraph>
          </div>
          <div className="flex items-center w-full justify-end">
            <label
              htmlFor="umur"
              className="block text-lg font-medium text-black w-1/3"
            >
              Umur
            </label>
            <Input
              {...register("umur", { required: true })}
              type="number"
              placeholder="Umur anda"
              className="mt-1 w-2/3 border border-spanish-gray rounded-full p-6"
            />
            <Paragraph className="text-xs font-medium mt-2">
              {errors.umur?.message}
            </Paragraph>
          </div>
          <div className="flex items-start w-full justify-end">
            <label
              htmlFor="bio"
              className="block text-lg font-medium text-black w-1/3"
            >
              Bio
            </label>
            <Textarea
              {...register("bio", { required: true })}
              placeholder="Deskripsi anda"
              name="deskripsi"
              className="mt-2 h-full min-h-[125px] border-spanish-gray w-2/3 rounded-md p-4 placeholder-pink-500 placeholder-opacity-75"
            />
            <Paragraph className="text-xs font-medium mt-2">
              {errors.bio?.message}
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="mt-10 flex my-10 flex-col justify-center items-center w-full">
        <Button
          type="submit"
          className="text-black bg-secondary-color hover:bg-secondary-color/90 rounded-3xl w-72 px-4 py-6"
          disabled={isUploadLoading ? true : false}
        >
          {isUploadLoading ? (
            <Paragraph className="flex w-fit space-x-2 justify-center items-center">
              <span>Loading</span>
              <LoadingCircle />
            </Paragraph>
          ) : (
            "Edit"
          )}
        </Button>
      </div>
    </form>
  );
}
