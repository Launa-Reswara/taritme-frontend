import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading, Paragraph } from "@/components/ui/typography";
import { ArrowRightIcon } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Dummy data untuk looping Card, biar ga repo-repot nulis component yang sama berulang kali
const listKomunitas = [
  {
    id: 1,
    name: "Komunitas sanggar budaya",
    previewImage: "/images/sanggar1.png",
    description:
      "Sebuah komunitas yang memadukan keindahan gerakan tradisional dengan nuansa modern, menciptakan karya-karya yang memikat hati penonton dari berbagai kalangan.",
  },
  {
    id: 2,
    name: "Komunitas sanggar budaya",
    previewImage: "/images/sanggar2.png",
    description:
      "Menyajikan pertunjukan yang menggabungkan elemen-elemen tari dari berbagai daerah di Indonesia, merayakan keberagaman budaya dalam setiap gerakan.",
  },
  {
    id: 3,
    name: "Komunitas sanggar budaya",
    previewImage: "/images/sanggar3.png",
    description:
      "Menciptakan ruang bagi generasi muda untuk mempelajari dan melestarikan warisan budaya melalui tarian-tarian klasik dan kontemporer.",
  },
  {
    id: 4,
    name: "Komunitas sanggar budaya",
    previewImage: "/images/sanggar4.png",
    description:
      "Merangkul ragam etnis dan kepercayaan dalam tarian-tarian mereka, menggambarkan kekayaan budaya Indonesia melalui gerakan-gerakan yang penuh semangat.",
  },
  {
    id: 5,
    name: "Komunitas sanggar budaya",
    previewImage: "/images/sanggar5.png",
    description:
      "Menghidupkan kembali cerita-cerita klasik melalui tarian-tarian yang elegan dan penuh makna, menyuarakan warisan budaya sebagai bagian tak terpisahkan dari identitas bangsa.",
  },
  {
    id: 6,
    name: "Komunitas sanggar budaya",
    previewImage: "/images/sanggar6.png",
    description:
      "Menjelajahi kreativitas melalui tarian, menggabungkan elemen-elemen modern dengan tradisional untuk menciptakan karya-karya yang menyentuh dan menginspirasi.",
  },
];

export default function Komunitas() {
  return (
    <Layout className="justify-center items-center">
      {/* Gambar dan Teks */}
      <Heading as="h1" className="text-center">
        Komunitas
      </Heading>
      <div className="relative w-full bg-cover bg-no-repeat mt-14 mb-10 p-4 rounded-xl flex justify-center items-center drop-shadow-lg h-[355px] bg-rumah-gadang-komunitas-image mx-auto my-4">
        <div className="text-center">
          <Heading
            as="h2"
            className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-medium"
          >
            Bangun relasi dengan penari lainnya melalui forum{" "}
            <span style={{ color: "#E1B83B" }}>komunitas</span> kami. Tanyakan
            pertanyaan, <br /> bagikan saran, atau temukan kolaborator untuk
            proyek tari Anda.
          </Heading>
        </div>
      </div>
      {/* Looping Kartu */}
      <div className="relative mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {listKomunitas.map((item) => (
          <Card key={item.id} className="p-5 rounded-xl bg-white">
            <div className="overflow-hidden rounded-xl">
              <LazyLoadImage
                src={item.previewImage}
                alt="thumbnail"
                className="w-full h-full"
              />
            </div>
            <div className="mt-2">
              <Heading as="h3" className="font-medium text-primary/70 mt-4">
                {item.name}
              </Heading>
              <Paragraph className="text-sm text-gray-600 mt-2">
                {item.description}
              </Paragraph>
              <Button className="bg-primary-color flex justify-center items-center space-x-2 rounded-full mt-8 text-white hover:bg-primary-black">
                <span>Baca Selengkapnya</span>
                <ArrowRightIcon />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
