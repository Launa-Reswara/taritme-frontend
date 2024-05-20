import ChartTotalUser from "@/components/ChartTotalUser";
import SidebarAdmin from "@/components/SidebarAdmin";
import { Calendar } from "@/components/ui/calendar";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { m } from "framer-motion";
import { UserRound } from "lucide-react";

export default function Admin() {
  return (
    <>
      <SidebarAdmin />
      <m.main
        transition={{ duration: 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="lg:ml-[358px] min-h-svh flex justify-center items-center flex-col p-4 2xl:p-10"
      >
        <m.section className="w-full 2xl:w-fit">
          <div className="flex justify-between flex-col 2xl:flex-row w-full space-y-7 2xl:space-y-0 2xl:space-x-7 items-center">
            <div className="bg-primary-color rounded-xl px-8 py-6 flex justify-between items-center w-full 2xl:w-[350px]">
              <div>
                <span className="text-white font-bold text-2xl">10</span>
                <Paragraph className="text-white">Pengguna</Paragraph>
              </div>
              <div className="bg-white p-3 rounded-xl w-fit">
                <UserRound />
              </div>
            </div>
            <div className="bg-primary-color rounded-xl px-8 py-6 flex justify-between items-center w-full 2xl:w-[350px]">
              <div>
                <span className="text-white font-bold text-2xl">10</span>
                <Paragraph className="text-white">Instruktur</Paragraph>
              </div>
              <div className="bg-white p-3 rounded-xl w-fit">
                <Image src="/images/floating-guru-icon.svg" alt="instruktur" />
              </div>
            </div>
            <div className="bg-primary-color rounded-xl px-8 py-6 flex justify-between items-center w-full 2xl:w-[350px]">
              <div>
                <span className="text-white font-bold text-2xl">10</span>
                <Paragraph className="text-white">Customer</Paragraph>
              </div>
              <div className="bg-white p-3 rounded-xl w-fit">
                <Image src="/images/customer-icon.svg" alt="instruktur" />
              </div>
            </div>
          </div>
          <div className="p-6 2xl:space-x-10 mt-10 bg-[#EEEEEE]/70 flex-col 2xl:flex-row flex justify-center items-start rounded-xl">
            <div className="w-full space-y-6">
              <div className="bg-white w-full rounded-xl drop-shadow-lg p-4">
                <ChartTotalUser />
              </div>
              <div className="flex justify-center flex-col sm:flex-row w-full bg-white p-4 drop-shadow-lg rounded-xl items-center">
                <Calendar className="sm:pr-8 sm:border-r-2 sm:border-[#4C4B4B]" />
                <div className="p-4">
                  <Heading as="h2" className="font-normal">
                    Customer
                  </Heading>
                  <div className="flex sm:flex-col mt-4 flex-wrap gap-4 justify-start items-start flex-row">
                    {Array(4)
                      .fill(null)
                      .map((_, index) => (
                        <div className="flex space-x-3" key={index + 1}>
                          <Image src="/images/ryu-user.svg" alt="user" />
                          <div>
                            <Paragraph className="text-sm">Ryu</Paragraph>
                            <Paragraph className="text-xs">Perempuan</Paragraph>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white 2xl:mt-0 mt-6 w-full 2xl:w-[400px] flex flex-col space-y-6 2xl:space-y-0 justify-start items-start rounded-xl drop-shadow-lg p-4">
              <div className="2xl:pb-8">
                <Heading as="h2" className="font-normal">
                  Pengguna
                </Heading>
                <div className="flex 2xl:flex-col mt-4 flex-wrap gap-4 justify-start items-start flex-row">
                  {Array(4)
                    .fill(null)
                    .map((_, index) => (
                      <div className="flex space-x-3" key={index + 1}>
                        <Image src="/images/ryu-user.svg" alt="user" />
                        <div>
                          <Paragraph className="text-sm">Ryu</Paragraph>
                          <Paragraph className="text-xs">Perempuan</Paragraph>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="2xl:w-full w-0.5 h-full 2xl:h-0.5 bg-primary-black"></div>
              <div className="2xl:pt-8">
                <Heading as="h2" className="font-normal">
                  Pelatih
                </Heading>
                <div className="flex 2xl:flex-col mt-4 flex-wrap gap-4 justify-start items-start flex-row">
                  {Array(4)
                    .fill(null)
                    .map((_, index) => (
                      <div className="flex space-x-3" key={index + 1}>
                        <Image src="/images/ryu-user.svg" alt="user" />
                        <div>
                          <Paragraph className="text-sm">Ryu</Paragraph>
                          <Paragraph className="text-xs">Perempuan</Paragraph>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </m.section>
      </m.main>
    </>
  );
}
