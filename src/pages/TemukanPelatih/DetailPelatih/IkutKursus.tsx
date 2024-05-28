import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Input } from "@/components/ui/input";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { toRupiah } from "@/lib/helpers";
import {
  CONDITION,
  DEVELOPMENT_API_URL,
  PRODUCTION_API_URL,
} from "@/lib/utils/constants";
import { ikutiKursusSchema } from "@/lib/utils/schemas";
import { InstrukturProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { nanoid } from "@reduxjs/toolkit";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import { ofetch } from "ofetch";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

export default function IkutiKursus() {
  const location = useLocation();

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
    },
    resolver: zodResolver(ikutiKursusSchema),
  });

  async function getAllPelatih() {
    try {
      const response = await ofetch(
        `${
          CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
        }/api/pelatih-tari`,
        {
          method: "GET",
          parseResponse: JSON.parse,
          responseType: "json",
        }
      );

      return response;
    } catch (err) {
      throw new Error("Failed to fetch data!");
    }
  }

  const { data, isPending, isError } = useQuery({
    queryKey: ["ikut-kursus"],
    queryFn: () => getAllPelatih(),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>IsError</p>;

  const filteredData: InstrukturProps[] = data.data.filter(
    (item: InstrukturProps) => item.name === pelatihName
  );

  function onSubmit() {
    async function submitDataTransaction() {
      try {
        const response = await ofetch(
          `${
            CONDITION === "development"
              ? DEVELOPMENT_API_URL
              : PRODUCTION_API_URL
          }/api/pelatih-tari/transactions`,
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
                gross_amount: 50000,
              },
              item_details: [
                {
                  id: nanoid(10),
                  price: 50000,
                  quantity: 2,
                  name: "Apel",
                  brand: "Fuji Apple",
                  category: "Fruit",
                  merchant_name: "Fruit-store",
                  tenor: "12",
                  code_plan: "000",
                  mid: "123456",
                  url: "http://localhost:3000/temukan-pelatih/luna-maya/ikuti-kursus",
                },
              ],
            },
          }
        );

        if (response.statusCode === 200 || response.statusCode === 201) {
          window.location.href = response.redirect_url;
        }

        return response;
      } catch (err) {
        throw new Error("Failed to submit your data!");
      }
    }

    submitDataTransaction();
  }

  return (
    <Layout>
      <div className="flex w-full flex-col md:flex-row md:space-x-8 justify-center items-center md:justify-start md:items-start">
        <div>
          {/* Render kartu instruktur */}
          {filteredData.slice(0, 1).map((item) => (
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
                      {item.rating}{" "}
                      <span className="text-white/50 text-xs">
                        ({item.total_review} ulasan)
                      </span>
                    </span>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center">
                  <Paragraph className="text-white">
                    {toRupiah(item.price)}
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
                    {...register("daerah")}
                    type="text"
                    placeholder="Daerah anda"
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
