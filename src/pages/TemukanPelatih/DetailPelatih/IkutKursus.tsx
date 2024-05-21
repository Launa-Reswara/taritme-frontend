import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Input } from "@/components/ui/input";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { toRupiah } from "@/lib/helpers";
import { listInstruktur } from "@/lib/utils/data";
import { ikutiKursusSchema } from "@/lib/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

export default function IkutiKursus() {
  const location = useLocation();

  useTitle(
    `Ikuti kursus ${location.pathname
      .split("/")[2]
      .split("-")
      .map((item) => item[0].toUpperCase() + item.substring(1))
      .join(" ")} | Taritme`
  );

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: {
      tgl_kursus: "",
      nama: "",
      no_hp: "",
      metode_pembayaran: "Transfer Bank",
      jenis_kelamin: "Laki-laki",
      bukti_pembayaran: "",
    },
    resolver: zodResolver(ikutiKursusSchema),
  });

  function onSubmit() {}

  return (
    <Layout>
      <div className="flex w-full flex-col md:flex-row md:space-x-8 justify-center items-center md:justify-start md:items-start">
        <div>
          {/* Render kartu instruktur */}
          {listInstruktur.slice(0, 1).map((item) => (
            <div className="bg-primary-color p-5 h-[352px] flex justify-center items-center w-full relative rounded-xl shadow-lg mt-10">
              <Image
                src={item.image}
                alt={item.name}
                className="absolute -top-20"
              />
              <div className="mt-36">
                <Heading as="h2" className="text-white font-medium">
                  {item.name}
                </Heading>
                <Paragraph className="text-white mt-1 mb-2 text-xs">
                  {item.description}
                </Paragraph>
                <div className="mb-6">
                  <div className="flex w-fit justify-center items-center space-x-2">
                    <Image src="/images/star-icon.svg" alt="star" />
                    <span className="text-base text-white">
                      {item.rate}{" "}
                      <span className="text-white/50 text-xs">
                        ({item.totalUlasan} ulasan)
                      </span>
                    </span>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center">
                  <Paragraph className="text-white">
                    {toRupiah(item.harga)}
                  </Paragraph>
                  <ChevronRight className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form ikut kursus */}
        <div className="w-full mt-9">
          <Heading className="mb-4 text-primary-color" as="h1">
            Ikuti Kursus
          </Heading>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white w-full py-10 px-5 rounded-2xl border border-black"
          >
            <div>
              <label
                htmlFor="tanggal-kursus"
                className="block text-sm font-medium text-gray-700"
              >
                Tanggal Kursus
              </label>
              <Input
                {...register("tgl_kursus")}
                type="date"
                placeholder="DD/MM/YYYY"
                className="mt-1 w-full border border-spanish-gray rounded-full p-2"
                style={{ maxWidth: "375px" }}
              />
              <Paragraph className="text-xs font-medium mt-2">
                {errors.tgl_kursus?.message}
              </Paragraph>
            </div>
            <h1
              className="text-xl mb-4 mt-5"
              style={{ color: "rgb(118, 18, 23)" }}
            >
              Lengkapi data diri mu
            </h1>
            <div className="flex justify-center mt-4 items-center w-full flex-col lg:space-x-4 lg:flex-row">
              <div className="w-full">
                <label
                  htmlFor="nama"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama
                </label>
                <Input
                  {...register("nama")}
                  type="text"
                  placeholder="Nama Anda"
                  className="mt-1 w-full border border-spanish-gray rounded-full p-2"
                />
                <Paragraph className="text-xs font-medium mt-2">
                  {errors.nama?.message}
                </Paragraph>
              </div>
              <div className="w-full">
                <label
                  htmlFor="nomor-hp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nomor HP
                </label>
                <Input
                  {...register("no_hp")}
                  type="tel"
                  placeholder="Nomor HP"
                  className="mt-1 w-full border border-spanish-gray rounded-full p-2"
                />
                <Paragraph className="text-xs font-medium mt-2">
                  {errors.no_hp?.message}
                </Paragraph>
              </div>
            </div>
            <div className="flex justify-start items-start w-full sm:space-x-4 flex-col sm:flex-row">
              <div className="sm:w-1/2 w-full">
                <label
                  htmlFor="metode-pembayaran"
                  className="block text-sm font-medium text-gray-700"
                >
                  Metode Pembayaran
                </label>
                <select
                  {...register("metode_pembayaran")}
                  className="mt-1 w-full border border-spanish-gray rounded-full p-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="transfer">Transfer Bank</option>
                  <option value="kartu-kredit">Kartu Kredit</option>
                  <option value="e-wallet">E-Wallet</option>
                  <option value="tunai">Tunai</option>
                </select>
                <Paragraph className="text-xs font-medium mt-2">
                  {errors.metode_pembayaran?.message}
                </Paragraph>
              </div>
              <div>
                <label
                  htmlFor="jenis-kelamin"
                  className="block text-sm font-medium text-gray-700"
                >
                  Jenis Kelamin
                </label>
                <div className="mt-1">
                  <div className="flex items-center">
                    <input
                      {...register("jenis_kelamin")}
                      name="jenis-kelamin"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="laki-laki"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Laki-laki
                    </label>
                  </div>
                  <div className="flex items-center mt-2">
                    <input
                      {...register("jenis_kelamin")}
                      name="jenis-kelamin"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="perempuan"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Perempuan
                    </label>
                  </div>
                </div>
                <Paragraph className="text-xs font-medium mt-2">
                  {errors.jenis_kelamin?.message}
                </Paragraph>
              </div>
            </div>

            <div>
              <label
                htmlFor="bukti-pembayaran"
                className="block text-sm font-medium text-gray-700"
              >
                Bukti Pembayaran
              </label>
              <Input
                {...register("bukti_pembayaran")}
                type="file"
                className="mt-1 w-full border border-spanish-gray rounded-full p-2"
                style={{ maxWidth: "275px" }}
              />
              <Paragraph className="text-xs font-medium mt-2">
                {errors.bukti_pembayaran?.message}
              </Paragraph>
            </div>
            <div className="mt-10"></div>
            <div className="flex my-10 flex-col justify-center items-center w-full">
              <Button
                type="submit"
                className="text-black bg-secondary-color hover:bg-secondary-color/90 rounded-3xl w-72 px-4 py-7"
              >
                <Paragraph>Konfirmasi</Paragraph>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
