import Navbar from "@/components/Navbar";
import { Paragraph } from "@/components/ui/typography";
import Image from "@/components/ui/image";
import { cn } from "@/lib/utils/cn";
import { m } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Komunitas() {
  return (
    <>
      <Navbar />
      <m.main
        transition={{ duration: 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={cn("flex justify-center mt-7 items-start w-full")}
      >
        <header className="justify-center text-center">
          <h2 className="text-center font-bold text-2xl mb-6">
            Komunitas
          </h2>
        </header>
      </m.main>
      
      <m.main
        transition={{ duration: 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={cn("flex justify-center mt-7 items-start w-full")}
      >
        <section
          className={cn(
            "w-full flex justify-center items-start px-4 flex-col max-w-[1440px] mt-[-15px]"
          )}
        >
          {/* Gambar dan Teks */}
          <div className="relative w-full max-w-[1320px] mx-auto my-4">
            <Image
              src="/images/komunitas1.png"
              className="rounded-xl w-full"
              alt="pelatih tari"
              draggable={false}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center ">
                <Paragraph className="text-white">
                  Bangun relasi dengan penari lainnya melalui forum{" "}
                  <span style={{ color: "#E1B83B" }}>komunitas</span> kami.
                  Tanyakan pertanyaan, <br /> bagikan saran, atau temukan
                  kolaborator untuk proyek tari Anda.
                </Paragraph>
              </div>
            </div>
          </div>

          {/* Kartu-Kartu */}
          <div className=" relative  max-w-[1320px] mx-auto  grid grid-cols-1 md:grid-cols-3 gap-20">
            {/* Kartu 1 */}
            <Card className="p-5 rounded-xl bg-white">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/sanggar1.png"
                  alt="thumbnail"
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="mt-2">
                <Paragraph className="font-medium text-red-800 mt-1">
                  Kesenian Tari Piring
                </Paragraph>
                <Paragraph className="text-sm text-gray-600 mt-2">
                  Sebuah komunitas yang memadukan keindahan gerakan tradisional
                  dengan nuansa modern, menciptakan karya-karya yang memikat
                  hati penonton dari berbagai kalangan.
                </Paragraph>
                <Button className="bg-primary-color flex justify-center items-center space-x-2 rounded-full mt-8 text-white hover:bg-primary-black">
                  <span>Baca Selengkapnya</span>
                  <ArrowRightIcon />
                </Button>
              </div>
            </Card>

            {/* Kartu 2 */}
            <Card className="p-5 rounded-xl bg-white">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/sanggar2.png"
                  alt="thumbnail"
                  className="w-full"
                />
              </div>
              <div className="mt-2">
                <Paragraph className="font-medium text-red-800 mt-1">
                  Kesenian Tari Piring
                </Paragraph>
                <Paragraph className="text-sm text-gray-600 mt-2">
                  Sebuah komunitas yang memadukan keindahan gerakan tradisional
                  dengan nuansa modern, menciptakan karya-karya yang memikat
                  hati penonton dari berbagai kalangan.
                </Paragraph>
                <Button className="bg-primary-color flex justify-center items-center space-x-2 rounded-full mt-8 text-white hover:bg-primary-black">
                  <span>Baca Selengkapnya</span>
                  <ArrowRightIcon />
                </Button>
              </div>
            </Card>

            {/* Kartu 3 */}
            <Card className="p-5 rounded-xl bg-white">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/sanggar3.png"
                  alt="thumbnail"
                  className="w-full"
                />
              </div>
              <div className="mt-2">
                <Paragraph className="font-medium text-red-800 mt-1">
                  Kesenian Tari Piring
                </Paragraph>
                <Paragraph className="text-sm text-gray-600 mt-2">
                  Sebuah komunitas yang memadukan keindahan gerakan tradisional
                  dengan nuansa modern, menciptakan karya-karya yang memikat
                  hati penonton dari berbagai kalangan.
                </Paragraph>
                <Button className="bg-primary-color flex justify-center items-center space-x-2 rounded-full mt-8 text-white hover:bg-primary-black">
                  <span>Baca Selengkapnya</span>
                  <ArrowRightIcon />
                </Button>
              </div>
            </Card>
          </div>

          <div className="w-full mt-12 mb-8 "></div>
          {/* Baris kedua */}
          <div className=" relative  max-w-[1320px] mx-auto  grid grid-cols-1 md:grid-cols-3 gap-20">
            {/* Kartu 1 */}
            <Card className="p-5 rounded-xl bg-white">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/sanggar1.png"
                  alt="thumbnail"
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="mt-2">
                <Paragraph className="font-medium text-red-800 mt-1">
                  Kesenian Tari Piring
                </Paragraph>
                <Paragraph className="text-sm text-gray-600 mt-2">
                  Sebuah komunitas yang memadukan keindahan gerakan tradisional
                  dengan nuansa modern, menciptakan karya-karya yang memikat
                  hati penonton dari berbagai kalangan.
                </Paragraph>
                <Button className="bg-primary-color flex justify-center items-center space-x-2 rounded-full mt-8 text-white hover:bg-primary-black">
                  <span>Baca Selengkapnya</span>
                  <ArrowRightIcon />
                </Button>
              </div>
            </Card>

            {/* Kartu 2 */}
            <Card className="p-5 rounded-xl bg-white">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/sanggar2.png"
                  alt="thumbnail"
                  className="w-full"
                />
              </div>
              <div className="mt-2">
                <Paragraph className="font-medium text-red-800 mt-1">
                  Kesenian Tari Piring
                </Paragraph>
                <Paragraph className="text-sm text-gray-600 mt-2">
                  Sebuah komunitas yang memadukan keindahan gerakan tradisional
                  dengan nuansa modern, menciptakan karya-karya yang memikat
                  hati penonton dari berbagai kalangan.
                </Paragraph>
                <Button className="bg-primary-color flex justify-center items-center space-x-2 rounded-full mt-8 text-white hover:bg-primary-black">
                  <span>Baca Selengkapnya</span>
                  <ArrowRightIcon />
                </Button>
              </div>
            </Card>

            {/* Kartu 3 */}
            <Card className="p-5 rounded-xl bg-white">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/sanggar3.png"
                  alt="thumbnail"
                  className="w-full"
                />
              </div>
              <div className="mt-2">
                <Paragraph className="font-medium text-red-800 mt-1">
                  Kesenian Tari Piring
                </Paragraph>
                <Paragraph className="text-sm text-gray-600 mt-2">
                  Sebuah komunitas yang memadukan keindahan gerakan tradisional
                  dengan nuansa modern, menciptakan karya-karya yang memikat
                  hati penonton dari berbagai kalangan.
                </Paragraph>
                <Button className="bg-primary-color flex justify-center items-center space-x-2 rounded-full mt-8 text-white hover:bg-primary-black">
                  <span>Baca Selengkapnya</span>
                  <ArrowRightIcon />
                </Button>
              </div>
            </Card>
          </div>
          <div className="w-full mt-12 mb-8 "></div>
        </section>
      </m.main>
    </>
  );
}
