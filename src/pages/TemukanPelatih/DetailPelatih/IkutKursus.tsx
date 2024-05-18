import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Input } from "@/components/ui/input";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { toRupiah } from "@/lib/helpers";
import { listInstruktur } from "@/lib/utils/data";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import slugify from "slugify";

export default function IkutiKursus() {
  const location = useLocation();

  useTitle(
    `Ikuti kursus ${location.pathname
      .split("/")[2]
      .split("-")
      .map((item) => item[0].toUpperCase() + item.substring(1))
      .join(" ")} | Taritme`
  );

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9">
        {/* Render kartu instruktur */}
        {listInstruktur.slice(0, 1).map((item) => (
          <Link to={slugify(item.name, { lower: true })} key={item.id}>
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
                  <div className="flex border-2 w-fit justify-center items-center space-x-2">
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
          </Link>
        ))}

        {/* Form ikut kursus */}
        <div className="lg:col-span-2">
          <Heading className="mb-4 text-primary-color" as="h1">
            Ikuti Kursus
          </Heading>
          <form className="bg-white py-10 px-5 rounded-2xl border border-black">
            <div>
              <label
                htmlFor="tanggal-kursus"
                className="block text-sm font-medium text-gray-700"
              >
                Tanggal Kursus
              </label>
              <Input
                id="tanggal-kursus"
                type="date"
                placeholder="DD/MM/YYYY"
                className="mt-1 w-full border border-spanish-gray rounded-full p-2"
                style={{ maxWidth: "375px" }}
              />
            </div>
            <h1
              className="text-xl mb-4 mt-5"
              style={{ color: "rgb(118, 18, 23)" }}
            >
              Lengkapi data diri mu
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="nama"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama
                </label>
                <Input
                  id="nama"
                  type="text"
                  placeholder="Nama Anda"
                  className="mt-1 w-full border border-spanish-gray rounded-full p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="nomor-hp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nomor HP
                </label>
                <Input
                  id="nomor-hp"
                  type="tel"
                  placeholder="Nomor HP"
                  className="mt-1 w-full border border-spanish-gray rounded-full p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="metode-pembayaran"
                  className="block text-sm font-medium text-gray-700"
                >
                  Metode Pembayaran
                </label>
                <select
                  id="metode-pembayaran"
                  className="mt-1 w-full border border-spanish-gray rounded-full p-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="transfer">Transfer Bank</option>
                  <option value="kartu-kredit">Kartu Kredit</option>
                  <option value="e-wallet">E-Wallet</option>
                  <option value="tunai">Tunai</option>
                </select>
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
                      id="laki-laki"
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
                      id="perempuan"
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
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="bukti-pembayaran"
                  className="block text-sm font-medium text-gray-700"
                >
                  Bukti Pembayaran
                </label>
                <Input
                  id="bukti-pembayaran"
                  type="file"
                  className="mt-1 w-full border border-spanish-gray rounded-full p-2"
                  style={{ maxWidth: "275px" }}
                />
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
