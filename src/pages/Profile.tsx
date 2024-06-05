import IsError from "@/components/IsError";
import IsPending from "@/components/IsPending";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heading, Paragraph } from "@/components/ui/typography";
import { getUserProfile } from "@/features";
import { cn } from "@/lib/utils/cn";
import { setIsEditProfile } from "@/store/slices/user.slice";
import { UserProfileProps, UserProps, UserSliceProps } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

type JoinProps = Pick<UserProps, "id" | "name" | "email"> & UserProfileProps;

export default function Profile() {
  const { isEditProfile } = useSelector((state: UserSliceProps) => state.user);

  const dispatch = useDispatch();

  const { data, isPending, isError } = useQuery({
    queryKey: ["get-user-profile"],
    queryFn: () => getUserProfile(),
    placeholderData: keepPreviousData,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  if (isPending) return <IsPending />;
  if (isError) return <IsError />;

  const profile = data.data.data as JoinProps;

  console.log(profile);

  return (
    <>
      <Layout>
        <div>
          <Image
            src={profile.image}
            alt={profile.name}
            className="rounded-full"
          />
          <Button onClick={() => dispatch(setIsEditProfile(true))}>
            Edit Profile
          </Button>
        </div>
        <div className="w-full ">
          <Heading as="h1"></Heading>
          <Paragraph>fsdf</Paragraph>
        </div>
        {isEditProfile ? <FormEditProfile profile={profile} /> : null}
      </Layout>
    </>
  );
}

function FormEditProfile({ profile }: { profile: JoinProps }) {
  const dispatch = useDispatch();

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nama: profile.name,
      email: profile.email,
      no_hp: profile.no_hp,
      jenis_kelamin: profile.jenis_kelamin,
      umur: profile.age,
      bio: profile.bio,
    },
  });

  function onSubmit() {}

  return (
    <div className="flex justify-center items-center inset-0 fixed z-50 backdrop-blur-lg min-h-svh">
      <div className="w-full sm:w-[800px] max-w-[600px] overflow-hidden rounded-lg bg-white drop-shadow-lg p-8">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center">
            <Heading as="h1" className="text-primary-color ">
              Edit Profile
            </Heading>
            <Button
              size="icon"
              className="rounded-full bg-light-silver"
              variant="secondary"
              onClick={() => dispatch(setIsEditProfile(false))}
            >
              <X />
            </Button>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-start items-center flex-col w-full">
              <div className="w-full space-y-3 mt-5">
                <div className="w-full">
                  <label
                    htmlFor="nama"
                    className="block font-normal text-primary-black"
                  >
                    Nama
                  </label>
                  <Input
                    {...register("nama", { required: true })}
                    type="text"
                    placeholder="Nama anda"
                    name="nama"
                    className="mt-2 border-spanish-gray w-full rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                  />
                  <Paragraph className="text-xs font-medium mt-2">
                    {errors.nama?.message}
                  </Paragraph>
                </div>

                <div className="w-full ">
                  <label
                    htmlFor="email"
                    className="block font-normal text-primary-black"
                  >
                    Email
                  </label>
                  <Input
                    type="text"
                    {...register("email", { required: true })}
                    placeholder="Email anda"
                    name="email"
                    className="mt-2 border-spanish-gray w-full rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                  />
                  <Paragraph className="text-xs font-medium mt-2">
                    {errors.email?.message}
                  </Paragraph>
                </div>

                <div className="w-full ">
                  <label
                    htmlFor="no_hp"
                    className="block font-normal text-primary-black"
                  >
                    No Hp
                  </label>
                  <Input
                    type="tel"
                    {...register("no_hp", { required: true })}
                    placeholder="No HP anda"
                    name="no_hp"
                    className="mt-2 border-spanish-gray w-full rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                  />
                  <Paragraph className="text-xs font-medium mt-2">
                    {errors.no_hp?.message}
                  </Paragraph>
                </div>

                <div className="w-full ">
                  <label
                    htmlFor="jenis_kelamin"
                    className="block font-normal text-primary-black"
                  >
                    Jenis Kelamin
                  </label>
                  <select
                    defaultValue="Pilih Jenis Kelamin"
                    className={cn(
                      "mt-1 w-full bg-white border border-spanish-gray p-2 rounded-full text-spanish-gray"
                    )}
                  >
                    <option>Pilih Jenis Kelamin</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                  <Paragraph className="text-xs font-medium mt-2">
                    {errors.jenis_kelamin?.message}
                  </Paragraph>
                </div>
                <div className="w-full ">
                  <label
                    htmlFor="umur"
                    className="block font-normal text-primary-black"
                  >
                    Umur
                  </label>
                  <Input
                    type="number"
                    {...register("umur", { required: true })}
                    placeholder="Tarif anda"
                    name="tarif_per_jam"
                    className="mt-2 border-spanish-gray w-full rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                  />
                  <Paragraph className="text-xs font-medium mt-2">
                    {errors.umur?.message}
                  </Paragraph>
                </div>

                <div className="w-full ">
                  <label
                    htmlFor="bio"
                    className="block font-normal text-primary-black"
                  >
                    Bio
                  </label>
                  <Textarea
                    {...register("bio", { required: true })}
                    placeholder="Bio anda"
                    name="bio"
                    className="mt-2 h-full min-h-[125px] border-spanish-gray w-full rounded-md p-4 placeholder-pink-500 placeholder-opacity-75"
                  />
                  <Paragraph className="text-xs font-medium mt-2">
                    {errors.bio?.message}
                  </Paragraph>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center mt-5 items-center w-full">
              <Button
                type="submit"
                className="text-black bg-secondary-color hover:bg-secondary-color/90 rounded-3xl w-72 px-4 py-6"
              >
                <Paragraph>Edit</Paragraph>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
