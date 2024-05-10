import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading, Paragraph } from "@/components/ui/typography";
import { listKomunitas } from "@/lib/utils/data";
import { ArrowRightIcon } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Komunitas() {
  // const [idModal, setIdModal] = useState<number>(0);

  return (
    <>
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
                  draggable={false}
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
      {/*
      WIP: modal komunitas
      <div className="flex justify-center items-center fixed inset-0 z-50 w-full backdrop-blur-md min-h-svh">
        <div className="w-fit bg-white">
          <div className="relative">
            <Image
              src="/images/sanggar1.png"
              alt="sanggar"
              className="w-full"
            />
            <Button
              size="icon"
              className="absolute top-4 right-4 rounded-full bg-light-silver"
              variant="secondary"
            >
              <X />
            </Button>
          </div>
          <Heading as="h2" className="font-normal">
            Komunitas sanggar budaya 1
          </Heading>
          <div className="flex justify-center w-fit items-center space-x-3">
            <Button className="bg-primary-color rounded-full hover:bg-primary-black flex justify-center items-center space-x-3">
              <Paragraph className="text-xs text-white">
                Komunitas aktif
              </Paragraph>
              <div className="w-2 h-2 bg-malachite rounded-full"></div>
            </Button>
            <Paragraph>Created about 4y ago</Paragraph>
          </div>
          <div>
            <Paragraph>
              <span className="font-medium">Tentang</span> <br /> Sebuah
              komunitas yang memadukan keindahan gerakan tradisional dengan
              nuansa modern, menciptakan karya-karya yang memikat hati penonton
              dari berbagai kalangan.
            </Paragraph>
          </div>
          <div className="flex flex-col justify-center items-start">
            <Paragraph className="font-medium">Temukan Kami</Paragraph>
            <div className="flex justify-center items-center w-fit space-x-3">
              <button></button>
            </div>
          </div>
        </div>
          </div>*/}
    </>
  );
}
