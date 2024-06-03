import IsError from "@/components/IsError";
import IsPending from "@/components/IsPending";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { getDetailPelatihTari } from "@/features";
import { useTitle } from "@/hooks";
import { toRupiah } from "@/lib/helpers";
import { cn } from "@/lib/utils/cn";
import { ulasanList } from "@/lib/utils/data";
import { TokenSliceProps } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function DetailPelatih() {
  const [tabs, setTabs] = useState<"Tentang" | "Ulasan">("Tentang");

  const { isTokenAdminAvailable, isTokenUserAvailable } = useSelector(
    (state: TokenSliceProps) => state.token
  );

  const navigate = useNavigate();
  const { name } = useParams();

  const pelatihName = name as string;

  useTitle(`Pelatih ${pelatihName} | Taritme`);

  const { data, isPending, isError } = useQuery({
    queryKey: ["detail_pelatih"],
    queryFn: () => getDetailPelatihTari(pelatihName),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });

  if (isPending) return <IsPending />;
  if (isError) return <IsError />;

  const pelatih = data[0];

  return (
    <Layout className="md:flex-row flex-col-reverse justify-between items-start">
      <div className="md:mr-10">
        <button
          type="button"
          aria-label="kembali"
          className="md:flex justify-center hidden items-center space-x-2"
          onClick={() => navigate(-1)}
        >
          <Image src="/images/arrow-back-icon.svg" alt="arrow back" />
          <span className="xl:text-2xl">Kembali</span>
        </button>
        <div className="my-10 w-full">
          {/** Solusi 1: buat breakpoints custom untuk width bungkus grid */}
          <div
            className={cn(
              "grid grid-cols-2 w-[350px]",
              "sm:w-[610px] md:w-[700px] xl:w-[900px] md:grid-cols-3",
              "gap-4 grid-rows-1"
            )}
          >
            <Image
              src={pelatih.image_1}
              alt="detail pelatih"
              className="row-span-2 h-full mx-auto w-full col-span-2"
              draggable={false}
            />
            <Image
              src={pelatih.image_2}
              alt="detail pelatih"
              draggable={false}
              className="w-full"
            />
            <Image
              src={pelatih.image_3}
              alt="detail pelatih"
              draggable={false}
              className="w-full"
            />
          </div>
          <div className="mt-14 w-full">
            <div className="space-x-8 w-fit">
              <button
                className={cn(
                  "text-primary-black text-base md:text-2xl",
                  tabs === "Tentang" ? "font-semibold" : ""
                )}
                onClick={() => setTabs("Tentang")}
              >
                Tentang
              </button>
              <button
                className={cn(
                  "text-primary-black text-base md:text-2xl",
                  tabs === "Ulasan" ? "font-semibold" : ""
                )}
                onClick={() => setTabs("Ulasan")}
              >
                Ulasan
              </button>
            </div>
            {tabs === "Tentang" ? (
              <div className="space-y-6 mt-10">
                <Heading as="h1">Pelatih Tari Piring</Heading>
                <div>
                  <Heading as="h2" className="mb-2">
                    Tentang Pelatih
                  </Heading>
                  <Paragraph>{pelatih.tentang_pelatih}</Paragraph>
                </div>
                <div>
                  <Heading as="h2" className="mb-2">
                    Tentang Kursus
                  </Heading>
                  <Paragraph>
                    Kami menyediakan kursus tarian daerah yang menawarkan
                    berbagai tarif untuk setiap jenis kursus, sesuai dengan
                    tingkat keterampilan dan durasi pelatihan yang diinginkan.
                    Selain itu, kami juga menawarkan beragam paket menarik yang
                    dapat memenuhi kebutuhan dan minat para peserta, termasuk
                    diskon untuk pendaftaran kelompok, program loyalitas, serta
                    layanan konsultasi gratis sebelum memilih kursus yang
                    sesuai.
                  </Paragraph>
                </div>
              </div>
            ) : (
              <div className="w-full space-y-4 mt-10">
                {ulasanList.map((item) => (
                  <div
                    key={item.id}
                    className="border-l-4 w-full py-2 px-3 border-l-primary-black"
                  >
                    <div className="w-full justify-between flex items-center">
                      <Paragraph className="font-medium">{item.name}</Paragraph>
                      <div className="flex justify-center items-center w-fit space-x-2">
                        <span>{item.rating}</span>
                        <Image
                          src="/images/star-icon.svg"
                          alt="star"
                          className="w-4 h-4"
                        />
                      </div>
                    </div>
                    <Paragraph className="text-[14px] w-full">
                      {item.comment}
                    </Paragraph>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <aside className="w-full top-20 md:sticky p-2">
        <div>
          <div>
            <div className="mb-8">
              <div>
                <Heading as="h1" className="mb-3">
                  {pelatih.name}
                </Heading>
                <Paragraph className="text-2xl">{toRupiah(100000)}</Paragraph>
              </div>
              <Paragraph className="text-2xl mt-6">
                {pelatih.description}
              </Paragraph>
            </div>
            <div>
              <div className="flex space-x-2 mb-4 justify-center items-center w-fit">
                <Image src="/images/star-icon.svg" alt="star" />
                <Paragraph>
                  {pelatih.rating}{" "}
                  <span className="text-primary-black/50">
                    ({pelatih.total_review} Ulasan)
                  </span>
                </Paragraph>
              </div>
              <div className="flex justify-between space-x-5 drop-shadow-lg items-center">
                <Link to="ikuti-kursus" className="w-full">
                  <Button className="text-primary-black bg-secondary-color hover:bg-secondary-color/90 rounded-3xl px-4 w-full">
                    Ikut Kelas
                  </Button>
                </Link>
                <button>
                  <Heart />
                </button>
              </div>
            </div>
          </div>
          <div className="my-10">
            <div className="flex justify-center items-center w-fit space-x-2">
              <Image src="/images/tag-icon.svg" alt="tag" />
              <Paragraph>Rincian</Paragraph>
            </div>
            <div className="flex justify-start space-x-8 md:justify-between items-start mt-3 w-full">
              <div>
                <Heading as="h2" className="font-medium mb-1.5">
                  Tarif per jam
                </Heading>
                <Paragraph>{toRupiah(pelatih.price)}/Jam</Paragraph>
              </div>
              <div>
                <Heading as="h2" className="font-medium mb-1.5">
                  Tarif Paket
                </Heading>
                <Paragraph>
                  {toRupiah(pelatih.price * 5 - 50000)}/5 jam
                </Paragraph>
              </div>
            </div>
          </div>
          {isTokenUserAvailable || isTokenAdminAvailable ? (
            <div>
              <Paragraph>Ratings</Paragraph>
              <Paragraph className="text-xs mt-2">
                Apakah kamu menyukai keseluruhan service yang diberikan?
              </Paragraph>
              <div className="flex mt-5 justify-center items-center w-fit space-x-4">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <Image
                      key={index + 1}
                      src="/images/unstar.svg"
                      alt="unstar"
                    />
                  ))}
              </div>
            </div>
          ) : null}
        </div>
      </aside>
    </Layout>
  );
}
