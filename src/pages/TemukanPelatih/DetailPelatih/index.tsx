import IsError from "@/components/IsError";
import IsPending from "@/components/IsPending";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { getDetailPelatihTari, getPenilaianPelatihTari } from "@/features";
import { useTitle } from "@/hooks";
import { normalizeString, toRupiah } from "@/lib/helpers";
import { cn } from "@/lib/utils/cn";
import { DetailPelatihProps, PelatihProps } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function DetailPelatih() {
  const [tabs, setTabs] = useState<"Tentang" | "Ulasan">("Tentang");

  const { name } = useParams();

  const navigate = useNavigate();
  const pelatihName = name as string;

  useTitle(`Pelatih ${normalizeString(pelatihName)} | Taritme`);

  const { data, isPending, isError } = useQuery({
    queryKey: ["detail_pelatih"],
    queryFn: () => getDetailPelatihTari(pelatihName),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });

  const { data: penilaian } = useQuery({
    queryKey: ["get-penilaian-pelatih-tari"],
    queryFn: () => getPenilaianPelatihTari(pelatihName),
    placeholderData: keepPreviousData,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  if (isPending) return <IsPending />;
  if (isError) return <IsError />;

  const pelatih = data as DetailPelatihProps & PelatihProps;

  return (
    <Layout className="md:flex-row w-full flex-col-reverse justify-between items-start">
      <div className={cn("md:mr-10", tabs === "Ulasan" ? "w-full" : "")}>
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
              "grid grid-cols-2 w-full",
              "md:grid-cols-3",
              "gap-4 grid-rows-1"
            )}
          >
            <div
              className={cn(
                "row-span-2 h-[200px] sm:h-[320px] mx-auto w-full col-span-2 rounded-xl flex justify-center",
                pelatih.image_1 ? "bg-primary-color" : "bg-light-silver"
              )}
            >
              <Image
                src={
                  pelatih.image_1 ? pelatih.image_1 : "/images/placeholder.png"
                }
                alt="detail pelatih"
                draggable={false}
                className="w-full"
              />
            </div>
            <div
              className={cn(
                "h-[150px] flex justify-center rounded-xl mx-auto bg-primary-color w-full",
                pelatih.image_2 ? "bg-primary-color" : "bg-light-silver"
              )}
            >
              <Image
                src={
                  pelatih.image_2 ? pelatih.image_2 : "/images/placeholder.png"
                }
                alt="detail pelatih"
                draggable={false}
              />
            </div>
            <div
              className={cn(
                "h-[150px] flex justify-center rounded-xl mx-auto bg-primary-color w-full",
                pelatih.image_2 ? "bg-primary-color" : "bg-light-silver"
              )}
            >
              <Image
                src={
                  pelatih.image_3 ? pelatih.image_3 : "/images/placeholder.png"
                }
                alt="detail pelatih"
                draggable={false}
              />
            </div>
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
              <div className="space-y-6 w-full mt-10">
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
                {penilaian?.length ? (
                  penilaian.map((item) => (
                    <div
                      key={item.id}
                      className="border-l-4 w-full py-2 px-3 border-l-primary-black"
                    >
                      <div className="w-full justify-between flex items-center">
                        <Paragraph className="font-medium">
                          {item.users_name}
                        </Paragraph>
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
                  ))
                ) : (
                  <Paragraph className="font-semibold text-lg">
                    Belum ada ulasan!
                  </Paragraph>
                )}
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
                    ({pelatih.total_comments} Ulasan)
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
        </div>
      </aside>
    </Layout>
  );
}
