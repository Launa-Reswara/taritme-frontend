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
import { PencilIcon, TrashIcon } from "lucide-react";
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

  if (isPending) return <IsPending />;
  if (isError) return <IsError />;

  const initialData = data as unknown as JoinProps[];
  const profile = initialData[0];

  return (
    <Layout>
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
        <Heading as="h1" className="mb-2">
          Profile
        </Heading>
      </div>
      <FormEditProfile profile={profile} />
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
      no_hp: profile.no_hp.toString(),
      jenis_kelamin: profile.jenis_kelamin,
      umur: profile.age.toString(),
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
        }/api/v1/users/profile/upload-image/${profile.id}`,
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
        }/api/v1/users/profile/edit/${profile.id}`,
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
        dispatch(setIsUploadLoading(false));
        toast({ title: "Failed!", description: response.data.message });
      }
    } catch (err: any) {
      dispatch(setIsUploadLoading(false));
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
      <div
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
      </div>
      <div className="ml-28 p-2">
        <Paragraph className="text-lg font-medium">{profile.name}</Paragraph>
      </div>

      <div className="mt-5 relative w-full">
        <div className="grid grid-cols-1 p-[2rem] gap-5 sm:gap-8">
          <div className="flex flex-col sm:flex-row sm:items-center items-start w-full justify-between">
            <label
              htmlFor="nama"
              className="block text-base sm:text-lg  font-medium text-primary-black"
            >
              Nama
            </label>
            <div className="w-full sm:w-2/3 mt-1 sm:mt-0">
              <Input
                {...register("nama", { required: true })}
                type="text"
                placeholder="Nama Anda"
                className="border border-spanish-gray rounded-full p-6"
              />
              {errors.nama ? (
                <Paragraph className="text-xs font-medium mt-2">
                  {errors.nama.message}
                </Paragraph>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center items-start w-full justify-between">
            <label
              htmlFor="email"
              className="block text-base sm:text-lg  font-medium text-primary-black"
            >
              Nomor Telepon
            </label>
            <div className="w-full sm:w-2/3 mt-1 sm:mt-0">
              <Input
                {...register("no_hp", { required: true })}
                type="number"
                placeholder="Nomor Telepon Anda"
                className="w-full border border-spanish-gray rounded-full p-6"
              />
              {errors.no_hp ? (
                <Paragraph className="text-xs font-medium mt-2">
                  {errors.no_hp.message}
                </Paragraph>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center items-start w-full justify-between">
            <label
              htmlFor="jenis_kelamin"
              className="block text-base sm:text-lg  font-medium text-primary-black"
            >
              Jenis Kelamin
            </label>
            <div className="w-full sm:w-2/3 mt-1 sm:mt-0">
              <select
                defaultValue="Laki-laki"
                {...register("jenis_kelamin", { required: true })}
                className="border w-full border-spanish-gray rounded-full p-2 bg-white"
              >
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
              {errors.jenis_kelamin ? (
                <Paragraph className="text-xs font-medium mt-2">
                  {errors.jenis_kelamin.message}
                </Paragraph>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center items-start w-full justify-between">
            <label
              htmlFor="umur"
              className="block text-base sm:text-lg  font-medium text-primary-black"
            >
              Umur
            </label>
            <div className="w-full sm:w-2/3 mt-1 sm:mt-0">
              <Input
                {...register("umur", { required: true })}
                type="number"
                placeholder="Umur anda"
                className="w-full border border-spanish-gray rounded-full p-6"
              />
              {errors.umur ? (
                <Paragraph className="text-xs font-medium mt-2">
                  {errors.umur.message}
                </Paragraph>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center items-start w-full justify-between">
            <label
              htmlFor="bio"
              className="block text-base sm:text-lg  font-medium text-primary-black"
            >
              Bio
            </label>
            <div className="w-full sm:w-2/3 mt-1 sm:mt-0">
              <Textarea
                {...register("bio", { required: true })}
                placeholder="Deskripsi anda"
                name="bio"
                className="h-full w-full min-h-[125px] border-spanish-gray rounded-md p-4 placeholder-pink-500 placeholder-opacity-75"
              />
              {errors.bio ? (
                <Paragraph className="text-xs font-medium mt-2">
                  {errors.bio.message}
                </Paragraph>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex my-10 justify-center space-x-10 items-center w-full">
        <Button
          type="submit"
          className="text-black bg-secondary-color w-72 hover:bg-secondary-color/90 rounded-3xl space-x-3 px-4 py-6"
          disabled={isUploadLoading ? true : false}
        >
          <PencilIcon />
          {isUploadLoading ? (
            <Paragraph className="flex w-fit space-x-2 justify-center items-center">
              <span>Loading</span>
              <LoadingCircle />
            </Paragraph>
          ) : (
            <span>Edit Profile</span>
          )}
        </Button>
        <Button className="bg-primary-color w-72 hover:bg-primary-black rounded-full flex justify-center items-center space-x-3 px-4 py-6">
          <TrashIcon />
          <span>Delete This Account</span>
        </Button>
      </div>
    </form>
  );
}
