import IsError from "@/components/IsError";
import IsPending from "@/components/IsPending";
import SidebarAdmin from "@/components/SidebarAdmin";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useToast } from "@/components/ui/use-toast";
import { getPelatihTari } from "@/features";
import { useTitle } from "@/hooks";
import {
  CONDITION,
  DEVELOPMENT_API_URL,
  PRODUCTION_API_URL,
} from "@/lib/utils/constants";
import {
  setId,
  setInitialData,
  setIsEditPelatih,
  setIsTambahPelatih,
} from "@/store/slices/pelatih.slice";
import { BaseResponseApiProps, PelatihProps, PelatihSliceProps } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { m } from "framer-motion";
import Cookies from "js-cookie";
import { Pencil, Trash, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Pelatih() {
  const dispatch = useDispatch();
  const { id, isEditPelatih, isTambahPelatih } = useSelector(
    (state: PelatihSliceProps) => state.pelatih
  );

  const { toast } = useToast();

  useTitle("Pelatih | Taritme");

  const { data, isPending, isError } = useQuery({
    queryKey: ["ikut-kursus"],
    queryFn: () => getPelatihTari(),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const pelatih = data as unknown as PelatihProps[];

  function handleDelete() {
    async function deletePelatihTari(): Promise<void> {
      try {
        const response: { data: BaseResponseApiProps } = await axios.delete(
          `${
            CONDITION === "development"
              ? DEVELOPMENT_API_URL
              : PRODUCTION_API_URL
          }/api/pelatih-tari/delete/${id}`,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token-admin")}`,
            },
          }
        );

        if (
          response.data.statusCode === 200 ||
          response.data.statusCode === 202
        ) {
          toast({ title: "Success", description: response.data.message });

          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      } catch (err: any) {
        toast({ title: "Error!", description: err.message });
      }
    }

    deletePelatihTari();
  }

  return (
    <>
      <SidebarAdmin />
      <m.main
        transition={{ duration: 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="lg:ml-[358px] min-h-svh flex justify-start p-4 lg:p-10 items-center flex-col"
      >
        <section className="flex w-full justify-center items-center">
          {isPending ? (
            <IsPending />
          ) : isError ? (
            <IsError />
          ) : (
            <div className="w-full">
              <button
                className="text-primary-black text-2xl"
                type="button"
                aria-label="tambah pelatih"
                onClick={() => dispatch(setIsTambahPelatih(true))}
              >
                + Tambah Pelatih
              </button>
              <Table className="w-full mt-10">
                <TableHeader>
                  <TableRow className="bg-primary-color hover:bg-primary-color">
                    <TableHead className="text-center text-white">
                      Foto
                    </TableHead>
                    <TableHead className="text-center text-white">
                      Nama
                    </TableHead>
                    <TableHead className="text-center text-white">
                      No HP
                    </TableHead>
                    <TableHead className="text-center text-white">
                      Email
                    </TableHead>
                    <TableHead className="text-center text-white">
                      Status
                    </TableHead>
                    <TableHead className="text-center text-white">
                      Aksi
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pelatih.map((item) => (
                    <TableRow
                      key={item.id}
                      className="bg-secondary-color hover:bg-secondary-color hover:odd:bg-light-silver odd:bg-light-silver"
                    >
                      <TableCell className="text-center flex justify-center items-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          className="w-10 h-10"
                        />
                      </TableCell>
                      <TableCell className="text-center">{item.name}</TableCell>
                      <TableCell className="text-center">
                        {item.no_hp}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.email}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.status}
                      </TableCell>
                      <TableCell className="flex justify-center items-center space-x-4">
                        <Button
                          variant="outline"
                          onClick={() => {
                            dispatch(setIsEditPelatih(true));
                            dispatch(setInitialData(item));
                          }}
                        >
                          <Pencil />
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => {
                            dispatch(setId(item.id));
                            handleDelete();
                          }}
                        >
                          <Trash />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </section>
      </m.main>
      {isTambahPelatih ? <FormTambahPelatih /> : null}
      {isEditPelatih ? <FormEditpelatih /> : null}
    </>
  );
}

function FormEditpelatih() {
  const [photo, setPhoto] = useState<any>(null);

  const dispatch = useDispatch();

  const { toast } = useToast();
  const { initialData } = useSelector(
    (state: PelatihSliceProps) => state.pelatih
  );

  const { id, email, no_hp, name, description, price, status } = initialData;

  const {
    getValues,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: {
      nama: name,
      email: email,
      no_hp: no_hp,
      deskripsi: description,
      tarif_per_jam: price,
      status: status,
    },
  });

  async function uploadImage() {
    try {
      const formData = new FormData();
      formData.append("my_file", photo[0]);

      const response: { data: { data: string } } = await axios.post(
        `${
          CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
        }/api/pelatih-tari/upload-image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token-admin")}`,
          },
        }
      );

      return response.data.data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  function onSubmit() {
    async function editPelatihTari() {
      try {
        const cloudinaryImage = await uploadImage();

        const response: { data: BaseResponseApiProps } = await axios.patch(
          `${
            CONDITION === "development"
              ? DEVELOPMENT_API_URL
              : PRODUCTION_API_URL
          }/api/pelatih-tari/edit/${id}`,
          {
            email: getValues("email"),
            name: getValues("nama"),
            image: cloudinaryImage,
            price: getValues("tarif_per_jam"),
            no_hp: getValues("no_hp"),
            status: getValues("status"),
            description: getValues("deskripsi"),
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token-admin")}`,
            },
          }
        );

        if (
          response.data.statusCode === 200 ||
          response.data.statusCode === 204
        ) {
          toast({ title: "Success!", description: response.data.message });
          // dispatch(setIsEditPelatih(false));
        } else {
          toast({ title: "Failed!", description: response.data.message });
        }
      } catch (err: any) {
        toast({ title: "Error!", description: err.message });
      }
    }

    editPelatihTari();
  }

  return (
    <div className="flex justify-center items-center inset-0 fixed z-50 backdrop-blur-lg min-h-svh">
      <div className="w-full sm:w-[800px] max-w-[600px] overflow-hidden rounded-lg bg-white drop-shadow-lg p-8">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center">
            <Heading as="h1" className="text-primary-color ">
              Edit Pelatih
            </Heading>
            <Button
              size="icon"
              className="rounded-full bg-light-silver"
              variant="secondary"
              onClick={() => dispatch(setIsEditPelatih(false))}
            >
              <X />
            </Button>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-start items-center flex-col w-full">
              <div className="w-full space-y-3 mt-5">
                <div className="w-full ">
                  <label
                    htmlFor="foto"
                    className="block font-normal text-primary-black"
                  >
                    Foto
                  </label>
                  <Input
                    placeholder="Unggah foto"
                    type="file"
                    name="foto"
                    multiple={false}
                    required
                    onChange={(e) => setPhoto(e.target.files)}
                    className="mt-2 border-spanish-gray w-full sm:max-w-[250px] rounded-full p-2"
                  />
                </div>

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
                    htmlFor="status"
                    className="block font-normal text-primary-black"
                  >
                    Status
                  </label>
                  <Input
                    type="text"
                    {...register("status", { required: true })}
                    placeholder="Status anda"
                    name="status"
                    className="mt-2 border-spanish-gray w-full rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                  />
                  <Paragraph className="text-xs font-medium mt-2">
                    {errors.status?.message}
                  </Paragraph>
                </div>
                <div className="w-full ">
                  <label
                    htmlFor="tarif_per_jam"
                    className="block font-normal text-primary-black"
                  >
                    Tarif per jam
                  </label>
                  <Input
                    type="number"
                    {...register("tarif_per_jam", { required: true })}
                    placeholder="Tarif anda"
                    name="tarif_per_jam"
                    className="mt-2 border-spanish-gray w-full rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                  />
                  <Paragraph className="text-xs font-medium mt-2">
                    {errors.tarif_per_jam?.message}
                  </Paragraph>
                </div>

                <div className="w-full ">
                  <label
                    htmlFor="deskripsi"
                    className="block font-normal text-primary-black"
                  >
                    Deskripsi
                  </label>
                  <Textarea
                    {...register("deskripsi", { required: true })}
                    placeholder="Deskripsi anda"
                    name="deskripsi"
                    className="mt-2 h-full min-h-[125px] border-spanish-gray w-full rounded-md p-4 placeholder-pink-500 placeholder-opacity-75"
                  />
                  <Paragraph className="text-xs font-medium mt-2">
                    {errors.deskripsi?.message}
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

function FormTambahPelatih() {
  const [photo, setPhoto] = useState<any>(null);

  const dispatch = useDispatch();

  const { toast } = useToast();

  const {
    getValues,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: {
      nama: "",
      no_hp: "",
      email: "",
    },
  });

  async function uploadImage() {
    try {
      const formData = new FormData();
      formData.append("my_file", photo[0]);

      const response: { data: { data: string } } = await axios.post(
        `${
          CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
        }/api/pelatih-tari/upload-image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token-admin")}`,
          },
        }
      );

      return response.data.data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  function onSubmit() {
    async function editPelatihTari() {
      try {
        const cloudinaryImage = await uploadImage();

        const response: { data: BaseResponseApiProps } = await axios.post(
          `${
            CONDITION === "development"
              ? DEVELOPMENT_API_URL
              : PRODUCTION_API_URL
          }/api/pelatih-tari/add`,
          {
            name: getValues("nama"),
            email: getValues("email"),
            no_hp: getValues("no_hp"),
            image: cloudinaryImage,
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token-admin")}`,
            },
          }
        );

        if (
          response.data.statusCode === 200 ||
          response.data.statusCode === 204
        ) {
          toast({ title: "Success!", description: response.data.message });
          // dispatch(setIsEditPelatih(false));
        } else {
          toast({ title: "Failed!", description: response.data.message });
        }
      } catch (err: any) {
        toast({ title: "Error!", description: err.message });
      }
    }

    editPelatihTari();
  }

  return (
    <div className="flex justify-center items-center p-4 fixed inset-0 z-50 backdrop-blur-lg min-h-svh">
      <div className="w-full sm:w-[800px] max-w-[600px] overflow-hidden rounded-lg bg-white drop-shadow-lg p-8">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center">
            <Heading as="h1" className="text-primary-color ">
              Tambah Pelatih
            </Heading>
            <Button
              size="icon"
              className="rounded-full bg-light-silver"
              variant="secondary"
              onClick={() => dispatch(setIsTambahPelatih(false))}
            >
              <X />
            </Button>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-start items-center flex-col w-full">
              <div className="w-full space-y-3 mt-5">
                <div className="w-full ">
                  <label
                    htmlFor="foto"
                    className="block font-normal text-primary-black"
                  >
                    Foto
                  </label>
                  <Input
                    placeholder="Unggah foto"
                    type="file"
                    name="foto"
                    required
                    className="mt-2 border-spanish-gray w-full max-w-fit rounded-full p-2"
                  />
                </div>

                <div className="w-full ">
                  <label
                    htmlFor="nama"
                    className="block font-normal text-primary-black"
                  >
                    Nama
                  </label>
                  <Input
                    type="text"
                    {...register("nama", { required: true })}
                    placeholder="Nama anda"
                    name="nama"
                    className="mt-2 border-spanish-gray w-full rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                  />
                </div>

                <div className="w-full ">
                  <label
                    htmlFor="hp"
                    className="block font-normal text-primary-black"
                  >
                    No Hp
                  </label>
                  <Input
                    type="tel"
                    {...register("no_hp", { required: true })}
                    placeholder="No HP anda"
                    name="hp"
                    className="mt-2 border-spanish-gray w-full rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                    required
                  />
                </div>

                <div className="w-full ">
                  <label
                    htmlFor="email"
                    className="block font-normal text-primary-black"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email anda"
                    name="email"
                    className="mt-2 border-spanish-gray w-full rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-5 flex-col justify-center items-center w-full">
              <Link to={"/temukan-pelatih/:detail/ikuti-kursus"}>
                <Button className="text-black bg-secondary-color hover:bg-secondary-color/90 rounded-3xl w-72 px-4 py-6">
                  <Paragraph>Tambahkan</Paragraph>
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
