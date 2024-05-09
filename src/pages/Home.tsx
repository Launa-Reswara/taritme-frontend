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
import { m } from "framer-motion";
import { ArrowRight, ArrowRightIcon } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

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
            "w-full flex justify-center items-start px-4 flex-col max-w-[1440px]"
          )}
        >
          <div className="grid w-full gap-4 grid-cols-4 grid-rows-1">
            <div className="bg-center row-span-2 bg-cover rounded-xl bg-abstract-home-image bg-no-repeat"></div>
            <Link
              to="/komunitas"
              className="bg-secondary-color col-span-2 rounded-xl px-7 py-5"
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
                <LazyLoadImage
                  src="/images/sanggar-1-home.svg"
                  alt="sanggar 1"
                  className="absolute left-0"
                  draggable={false}
                />
                <LazyLoadImage
                  src="/images/sanggar-2-home.svg"
                  alt="sanggar 2"
                  className="absolute left-8"
                  draggable={false}
                />
                <LazyLoadImage
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
            <Link to="/temukan-pelatih">
              <Image
                src="/images/pelatih-tari-home.png"
                className="rounded-xl w-full"
                alt="pelatih tari"
                draggable={false}
              />
              <div className="relative">
                <div className="absolute bottom-8 left-4 w-[300px]">
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
              className="w-full h-full rounded-xl"
              draggable={false}
            />
            <div className="w-full col-span-2 relative">
              <div className="absolute top-4 left-4">
                <Heading as="h3" className="font-medium">
                  Arsip
                </Heading>
                <Heading as="h2" className="font-medium">
                  Kesenian
                </Heading>
              </div>
              <div className="bg-secondary-color py-4 w-full box-polygon-home rounded-xl">
                <div className="w-full flex justify-end items-center">
                  <Paragraph className="w-[450px] mt-1">
                    Dengan membaca, kita bisa memahami budaya, sejarah, dan
                    nilai-nilai yang berpengaruh dalam perjalanan manusia di
                    dunia
                  </Paragraph>
                </div>
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="pl-20 pr-6 py-5"
                >
                  <CarouselContent className="flex justify-start items-center">
                    <CarouselItem className="basis-1/3 min-w-[250px]">
                      <Card className="p-4 rounded-xl md:w-full max-w-full bg-white">
                        <Image
                          src="/images/tari-piring-home.png"
                          alt="thumbnail"
                          className="w-full"
                        />
                        <div className="mt-2">
                          <div className="flex justify-center items-center w-fit space-x-1">
                            <LazyLoadImage
                              src="/images/electric-icon.svg"
                              alt="electric icon"
                              draggable={false}
                            />
                            <Paragraph className="text-xs">
                              5 Mins read
                            </Paragraph>
                          </div>
                          <Paragraph className="font-medium mt-1">
                            Kesenian Tari Piring
                          </Paragraph>
                          <div className="flex mt-2 justify-center items-center space-x-2 w-fit">
                            <Image
                              src="/images/leonardo-da-vince.svg"
                              alt="author"
                            />
                            <Paragraph>Leonardo Da Vince</Paragraph>
                          </div>
                          <Button className="bg-primary-color flex justify-center items-center space-x-2 rounded-full mt-8 text-white hover:bg-primary-black">
                            <span>Baca Selengkapnya</span>
                            <ArrowRightIcon />
                          </Button>
                        </div>
                      </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 min-w-[250px] md:w-full max-w-full">
                      <Card className="p-4 rounded-xl bg-white">
                        <Image
                          src="/images/tari-piring-home.png"
                          alt="thumbnail"
                          className="w-full"
                        />
                        <div className="mt-2">
                          <div className="flex justify-center items-center w-fit space-x-1">
                            <LazyLoadImage
                              src="/images/electric-icon.svg"
                              alt="electric icon"
                              draggable={false}
                            />
                            <Paragraph className="text-xs">
                              5 Mins read
                            </Paragraph>
                          </div>
                          <Paragraph className="font-medium mt-1">
                            Kesenian Tari Piring
                          </Paragraph>
                          <div className="flex mt-2 justify-center items-center space-x-2 w-fit">
                            <Image
                              src="/images/leonardo-da-vince.svg"
                              alt="author"
                            />
                            <Paragraph>Leonardo Da Vince</Paragraph>
                          </div>
                          <Button className="bg-primary-color rounded-full mt-8 text-white hover:bg-primary-black">
                            Baca Selengkapnya
                          </Button>
                        </div>
                      </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 min-w-[250px] md:w-full max-w-full">
                      <Card className="p-4 rounded-xl bg-white">
                        <Image
                          src="/images/tari-piring-home.png"
                          alt="thumbnail"
                          className="w-[300px]"
                        />
                        <div className="mt-2">
                          <div className="flex justify-center items-center w-fit space-x-1">
                            <LazyLoadImage
                              src="/images/electric-icon.svg"
                              alt="electric icon"
                              draggable={false}
                            />
                            <Paragraph className="text-xs">
                              5 Mins read
                            </Paragraph>
                          </div>
                          <Paragraph className="font-medium mt-1">
                            Kesenian Tari Piring
                          </Paragraph>
                          <div className="flex mt-2 justify-center items-center space-x-2 w-fit">
                            <Image
                              src="/images/leonardo-da-vince.svg"
                              alt="author"
                            />
                            <Paragraph>Leonardo Da Vince</Paragraph>
                          </div>
                          <Button className="bg-primary-color rounded-full mt-8 text-white hover:bg-primary-black">
                            Baca Selengkapnya
                          </Button>
                        </div>
                      </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                      <Button
                        className="bg-white rounded-full flex justify-center items-center space-x-2 px-8 py-8"
                        variant="outline"
                      >
                        <span>Lihat Selengkapnya</span>
                        <ArrowRight />
                      </Button>
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
