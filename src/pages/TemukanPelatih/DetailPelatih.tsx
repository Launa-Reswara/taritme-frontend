import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { getLastPathname, toRupiah } from "@/lib/helpers";
import { cn } from "@/lib/utils/cn";
import { Heart } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function DetailPelatih() {
  const [tabs, setTabs] = useState<"Tentang" | "Ulasan">("Tentang");

  const navigate = useNavigate();
  const location = useLocation();

  useTitle(`Pelatih ${getLastPathname(location.pathname)} | Taritme`);

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
              src="/images/lunamaya-detail-pelatih-1.png"
              alt="detail pelatih"
              className="row-span-2 h-full mx-auto w-full col-span-2"
              draggable={false}
            />
            <Image
              src="/images/lunamaya-detail-pelatih-2.png"
              alt="detail pelatih"
              draggable={false}
              className="w-full"
            />
            <Image
              src="/images/lunamaya-detail-pelatih-3.png"
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
                  <Paragraph>
                    Seorang pelatih nari berpengalaman yang telah mengajar seni
                    tari selama lebih dari lima tahun, memiliki keahlian dalam
                    menari berbagai jenis tarian, termasuk tarian daerah
                    Sumatera Barat.
                  </Paragraph>
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
              <div className="w-full mt-10">
                <div className="border-l-4 w-full py-2 px-3 border-l-primary-black">
                  <div className="w-full justify-between flex items-center">
                    <Paragraph className="font-medium">Cika</Paragraph>
                    <div className="flex justify-center items-center w-fit space-x-2">
                      <span>5</span>
                      <Image
                        src="/images/star-icon.svg"
                        alt="star"
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                  <Paragraph className="text-[14px] w-full">
                    Pelatih Lunamaya sangat keren, dan mudah dipahami jika
                    memberikan gerakan
                  </Paragraph>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full top-20 md:sticky p-2">
        <div>
          <div>
            <div className="mb-8">
              <div>
                <Heading as="h1" className="mb-3">
                  Luna Maya
                </Heading>
                <Paragraph className="text-2xl">{toRupiah(100000)}</Paragraph>
              </div>
              <Paragraph className="text-2xl mt-6">
                Instruktur tari Sumatra Barat yang memberikan ilmu nya melalui
                kelas tari.
              </Paragraph>
            </div>
            <div>
              <div className="flex space-x-2 mb-4 justify-center items-center w-fit">
                <Image src="/images/star-icon.svg" alt="star" />
                <Paragraph>
                  4.9 <span className="text-primary-black/50">(5 Ulasan)</span>
                </Paragraph>
              </div>
              <div className="flex justify-between space-x-5 drop-shadow-lg items-center">
                <Button className="text-primary-black bg-secondary-color hover:bg-secondary-color/90 rounded-3xl px-4 w-full">
                  Ikut Kelas
                </Button>
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
                <Paragraph>{toRupiah(100000)}/Jam</Paragraph>
              </div>
              <div>
                <Heading as="h2" className="font-medium mb-1.5">
                  Tarif Paket
                </Heading>
                <Paragraph>{toRupiah(450000)}/5 jam</Paragraph>
              </div>
            </div>
          </div>
          <div>
            <Paragraph>Ratings</Paragraph>
            <Paragraph className="text-xs mt-2">
              Apakah kamu menyukai keseluruhan service yang diberikan?
            </Paragraph>
            <div className="flex mt-5 justify-center items-center w-fit space-x-4">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <Image key={index + 1} src="/images/unstar.svg" alt="" />
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
