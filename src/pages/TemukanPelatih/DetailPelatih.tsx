import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { cn } from "@/lib/utils/cn";
import { Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function DetailPelatih() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div>
        <button
          type="button"
          aria-label="kembali"
          className="flex justify-center items-center space-x-2"
          onClick={() => navigate(-1)}
        >
          <img src="/images/arrow-back-icon.svg" alt="arrow back" />
          <span className="xl:text-2xl">Kembali</span>
        </button>
        <div>
          <button
            onClick={() => {}}
            className={cn(
              "dark:text-white text-primary-black font-medium px-4 py-2 transition-colors duration-300 hover:bg-primary-color hover:text-white hover:rounded-lg"
            )}
          >
            Tentang
          </button>
          <button onClick={() => {}}>Ulasan</button>
        </div>
        <div>
          <Heading as="h1">Pelatih Tari Piring</Heading>
          <div>
            <Heading as="h2">Tentang Pelatih</Heading>
            <Paragraph>
              Seorang pelatih nari berpengalaman yang telah mengajar seni tari
              selama lebih dari lima tahun, memiliki keahlian dalam menari
              berbagai jenis tarian, termasuk tarian daerah Sumatera Barat.
            </Paragraph>
          </div>
          <div>
            <Heading as="h2">Tentang Kursus</Heading>
            <Paragraph>
              Kami menyediakan kursus tarian daerah yang menawarkan berbagai
              tarif untuk setiap jenis kursus, sesuai dengan tingkat
              keterampilan dan durasi pelatihan yang diinginkan. Selain itu,
              kami juga menawarkan beragam paket menarik yang dapat memenuhi
              kebutuhan dan minat para peserta, termasuk diskon untuk
              pendaftaran kelompok, program loyalitas, serta layanan konsultasi
              gratis sebelum memilih kursus yang sesuai.
            </Paragraph>
          </div>
          <aside className="top-0 sticky min-h-screen">
            <div>
              <div>
                <div>
                  <Heading as="h1">Luna Maya</Heading>
                  <Paragraph className="text-2xl">IDR 100.000,-</Paragraph>
                </div>
                <Paragraph>
                  Instruktur tari Sumatra Barat yang memberikan ilmu nya melalui
                  kelas tari.
                </Paragraph>
              </div>
              <div>
                <div>
                  <Image src="/images/star.svg" alt="star" />
                  <Paragraph>
                    4.9 <span>(5 Ulasan)</span>
                  </Paragraph>
                </div>
                <div className="flex justify-between items-center">
                  <Link to="/temukan-pelatih/:detail/ikuti-kursus">
                  <Button className="w-full">Ikut Kelas</Button>
                  </Link>
                  <button>
                    <Heart />
                  </button>
                </div>
              </div>
            </div>
            <div className="top-0 sticky">
              <Paragraph>Rincian</Paragraph>
              <Heading as="h2" className="font-medium">
                Tarif per jam
              </Heading>
              <Heading as="h2" className="font-medium">
                Tarif Paket
              </Heading>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
