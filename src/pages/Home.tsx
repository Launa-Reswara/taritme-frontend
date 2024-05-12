import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { cn } from "@/lib/utils/cn";
import { listArsipKesenian } from "@/lib/utils/data";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import slugify from "slugify";

export default function Home() {
  useTitle("Home | Taritme");

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
        <section
          className={cn(
            "w-full flex justify-center items-start px-4 pb-6 flex-col max-w-[1440px]"
          )}
        >
          <div className="md:grid md:grid-cols-3 w-full flex flex-col justify-center items-center gap-4 xl:space-y-0 xl:grid-cols-4 md:grid-rows-1">
            <div className="bg-center md:block h-full md:row-span-2 hidden border-2 bg-cover rounded-xl bg-abstract-home-image bg-no-repeat"></div>
            <Link
              to="/komunitas"
              className="bg-secondary-color h-full md:col-span-2 rounded-xl px-7 py-5"
            >
              <Heading as="h1" className="font-medium text-primary-black">
                Komunitas
              </Heading>
              <Paragraph className="mt-3 text-primary-black">
                Bangun relasi dengan penari lainnya melalui forum komunitas
                kami. Tanyakan pertanyaan, bagikan saran, atau temukan
                kolaborator untuk proyek tari Anda.
              </Paragraph>
              <div className="flex relative h-14 mt-4 justify-center items-center">
                <Image
                  src="/images/sanggar-1-home.svg"
                  alt="sanggar 1"
                  className="absolute left-0"
                  draggable={false}
                />
                <Image
                  src="/images/sanggar-2-home.svg"
                  alt="sanggar 2"
                  className="absolute left-8"
                  draggable={false}
                />
                <Image
                  src="/images/sanggar-3-home.svg"
                  alt="sanggar 3"
                  className="absolute left-16"
                  draggable={false}
                />
                <div className="rounded-full bg-white text-primary-black absolute left-24 w-12 h-12 flex justify-center items-center">
                  <span className="text-xs">+3</span>
                </div>
              </div>
            </Link>
            <Link
              to="/temukan-pelatih"
              className="w-full xl:col-span-1 md:col-span-2"
            >
              <Image
                src="/images/pelatih-tari-home.png"
                className="rounded-xl w-full relative"
                alt="pelatih tari"
                draggable={false}
              />
              <div className="relative">
                <div className="absolute bottom-8 left-4 2xl:pr-0 xl:pr-4 w-[300px]">
                  <Heading as="h2" className="font-medium text-white">
                    Temukan Pelatihmu
                  </Heading>
                  <Paragraph className="text-white mt-1">
                    Ingin mempelajari tari tetapi kesulitan mengikutinya?
                    Temukan pelatih yang bisa mengajari kamu!
                  </Paragraph>
                </div>
              </div>
            </Link>
            <Image
              src="/images/payung-tari.png"
              alt="payung tari"
              className="w-full h-full hidden md:block rounded-xl"
              draggable={false}
            />
            <div className="w-full md:col-span-2 h-full relative">
              <div className="absolute top-4 left-4">
                <Heading
                  as="h3"
                  className="font-medium lg:text-xl text-xl md:text-lg"
                >
                  Arsip
                </Heading>
                <Heading
                  as="h2"
                  className="font-medium lg:text-2xl text-2xl md:text-xl"
                >
                  Kesenian
                </Heading>
              </div>
              <div className="bg-secondary-color h-full py-2 w-full box-polygon-home rounded-xl">
                <div className="w-full xl:mt-1 flex justify-end items-center">
                  <Paragraph
                    className={cn(
                      "xl:w-[410px] 2xl:w-[440px] hidden md:block mt-1 md:w-[350px] md:text-sm lg:text-base lg:w-[450px] pl-2"
                    )}
                  >
                    Dengan membaca, kita bisa memahami budaya, sejarah, dan
                    nilai-nilai yang berpengaruh dalam perjalanan manusia di
                    dunia
                  </Paragraph>
                </div>
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="xl:pl-20 px-6 py-5 mt-16 md:mt-5"
                >
                  <CarouselContent className="flex justify-start mr-64 sm:mr-40 items-center">
                    {listArsipKesenian
                      .filter((item) => item.id !== 4)
                      .map((item) => (
                        <CarouselItem className="basis-1/3 min-w-[250px]">
                          <Card className="p-4 rounded-xl md:w-full max-w-full bg-white">
                            <Image
                              src="/images/tari-piring-home.png"
                              alt="thumbnail"
                              className="w-full"
                            />
                            <div className="mt-2">
                              <div className="flex justify-center items-center w-fit space-x-1">
                                <Image
                                  src="/images/electric-icon.svg"
                                  alt="electric icon"
                                  draggable={false}
                                />
                                <Paragraph className="text-xs">
                                  {item.readingTime}
                                </Paragraph>
                              </div>
                              <Paragraph className="font-medium mt-1">
                                {item.title}
                              </Paragraph>
                              <div className="flex mt-2 justify-center items-center space-x-2 w-fit">
                                <Image
                                  src="/images/leonardo-da-vince.svg"
                                  alt="author"
                                />
                                <Paragraph>{item.author}</Paragraph>
                              </div>
                              <Link
                                to={`/arsip-kesenian/${slugify(item.title, {
                                  lower: true,
                                })}`}
                              >
                                <Button className="bg-primary-color flex justify-center items-center space-x-2 rounded-full mt-8 text-white hover:bg-primary-black">
                                  <span>Baca Selengkapnya</span>
                                  <ArrowRight />
                                </Button>
                              </Link>
                            </div>
                          </Card>
                        </CarouselItem>
                      ))}
                    <CarouselItem className="basis-1/3">
                      <Link to="/arsip-kesenian">
                        <Button
                          className="bg-white rounded-full flex justify-center items-center space-x-2 px-8 py-8"
                          variant="outline"
                        >
                          <span>Lihat Selengkapnya</span>
                          <ArrowRight />
                        </Button>
                      </Link>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </m.main>
    </>
  );
}
