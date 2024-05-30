import IsError from "@/components/IsError";
import IsPending from "@/components/IsPending";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Input } from "@/components/ui/input";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useToast } from "@/components/ui/use-toast";
import { getDetailPelatihTari } from "@/features";
import { useTitle } from "@/hooks";
import { toRupiah } from "@/lib/helpers";
import {
  CONDITION,
  DEVELOPMENT_API_URL,
  PRODUCTION_API_URL,
} from "@/lib/utils/constants";
import { ikutiKursusSchema } from "@/lib/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { nanoid } from "@reduxjs/toolkit";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import { ofetch } from "ofetch";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

export default function IkutiKursus() {
  const location = useLocation();

  const { toast } = useToast();

  const pelatihName = location.pathname
    .split("/")[2]
    .split("-")
    .map((item) => item[0].toUpperCase() + item.substring(1))
    .join(" ");

  useTitle(`Ikuti kursus ${pelatihName} | Taritme`);

  const {
    formState: { errors },
    handleSubmit,
    register,
    getValues,
  } = useForm({
    defaultValues: {
      price: "",
      tgl_kursus: "",
      nama: "",
      no_hp: "",
      email: "",
      daerah: "",
      lama_sewa: "1",
    },
    resolver: zodResolver(ikutiKursusSchema),
  });

  const { data, isPending, isError } = useQuery({
    queryKey: ["ikut-kursus"],
    queryFn: () => getDetailPelatihTari(pelatihName),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  if (isPending) return <IsPending />;
  if (isError) return <IsError />;

  const pelatihTari = data[0];

  function onSubmit() {
    // change lama sewa from string to number
    const lamaSewa = Number(getValues("lama_sewa"));

    // calculation price
    const priceAfterDiskon =
      lamaSewa % 5 === 0
        ? pelatihTari.price * lamaSewa - 50000 * (lamaSewa / 5)
        : pelatihTari.price * lamaSewa;

    async function submitDataTransaction() {
      try {
        const response = await ofetch(
          `${
            CONDITION === "development"
              ? DEVELOPMENT_API_URL
              : PRODUCTION_API_URL
          }/api/pelatih-tari/${pelatihName}/transactions`,
          {
            method: "POST",
            responseType: "json",
            parseResponse: JSON.parse,
            body: {
              customer_details: {
                name: getValues("nama"),
                email: getValues("email"),
                phone: getValues("no_hp"),
                city: getValues("daerah"),
                gross_amount: priceAfterDiskon,
              },
              item_details: [
                {
                  id: nanoid(10),
                  price: priceAfterDiskon,
                  quantity: 1,
                  name: `Jasa sewa instruktur tari Kak ${pelatihTari.name}`,
                  brand: "Taritme",
                  category: "Sewa instruktur tari",
                  merchant_name: "Launa Reswara",
                  tenor: "12",
                  code_plan: "000",
                  mid: "123456",
                  url: `${
                    CONDITION === "development"
                      ? DEVELOPMENT_API_URL
                      : PRODUCTION_API_URL
                  }/temukan-pelatih/${pelatihName}/ikuti-kursus`,
                },
              ],
            },
          }
        );

        if (response.statusCode === 200 || response.statusCode === 201) {
          window.location.href = response.redirect_url;
        } else {
          toast({ title: "Error!", description: response.message });
        }
      } catch (err: any) {
        throw new Error(err.message);
      }
    }

    submitDataTransaction();
  }

  return (
    <Layout>
      <div className="flex w-full flex-col md:flex-row md:space-x-8 justify-center items-center md:justify-start md:items-start">
        <div>
          {/* Render kartu instruktur */}
          <div
            key={pelatihTari.id}
            className="bg-primary-color p-5 h-[352px] flex justify-center items-center w-full relative rounded-xl shadow-lg mt-10"
          >
            <Image
              src={pelatihTari.image}
              alt={pelatihTari.name}
              className="absolute -top-20"
            />
            <div className="mt-36">
              <Heading as="h2" className="text-white font-medium">
                {pelatihTari.name}
              </Heading>
              <Paragraph className="text-white mt-1 mb-2 text-xs">
                {pelatihTari.description}
              </Paragraph>
              <div className="mb-6">
                <div className="flex w-fit justify-center items-center space-x-2">
                  <Image src="/images/star-icon.svg" alt="star" />
                  <span className="text-base text-white">
                    {pelatihTari.rating}{" "}
                    <span className="text-white/50 text-xs">
                      ({pelatihTari.total_review} ulasan)
                    </span>
                  </span>
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <Paragraph className="text-white">
                  {toRupiah(pelatihTari.price)}
                </Paragraph>
                <ChevronRight className="text-white" />
              </div>
            </div>
          </div>
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
            <div>
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
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    className="mt-1 w-full border border-spanish-gray rounded-full p-2"
                  />
                  <Paragraph className="text-xs font-medium mt-2">
                    {errors.no_hp?.message}
                  </Paragraph>
                </div>
              </div>
              <div className="flex justify-start items-start w-full sm:space-x-4 flex-col sm:flex-row">
                <div className="w-full">
                  <label
                    htmlFor="bukti-pembayaran"
                    className="block text-sm font-medium text-gray-700"
                  >
                    No Hp
                  </label>
                  <Input
                    {...register("no_hp", { required: true })}
                    type="number"
                    className="mt-1 w-full border border-spanish-gray rounded-full p-2"
                    placeholder="Nomor Hp"
                  />
                  <Paragraph className="text-xs font-medium mt-2">
                    {errors.no_hp?.message}
                  </Paragraph>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Kota/Kabupaten
                  </label>
                  <Input
                    {...register("daerah", { required: true })}
                    type="text"
                    placeholder="Daerah anda"
                    className="mt-1 w-full border border-spanish-gray rounded-full p-2"
                  />
                  <Paragraph className="text-xs font-medium mt-2">
                    {errors.daerah?.message}
                  </Paragraph>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Lama sewa (dalam jam)
                  </label>
                  <Input
                    {...register("lama_sewa", { required: true })}
                    type="number"
                    placeholder="Satuan jam"
                    className="mt-1 w-full border border-spanish-gray rounded-full p-2"
                  />
                  <Paragraph className="text-xs font-medium mt-2">
                    {errors.daerah?.message}
                  </Paragraph>
                </div>
              </div>
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
