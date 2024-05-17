import ChartTotalUser from "@/components/ChartTotalUser";
import SidebarAdmin from "@/components/SidebarAdmin";
import { Calendar } from "@/components/ui/calendar";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { UserRound } from "lucide-react";

export default function Admin() {
  return (
    <>
      <SidebarAdmin />
      <main className="border-2 ml-[358px] min-h-svh flex justify-center items-center flex-col">
        <section>
          <div className="flex justify-center w-full items-center space-x-7">
            <div className="bg-primary-color rounded-xl px-8 py-6 flex justify-between items-center w-[253px]">
              <div>
                <span className="text-white font-bold text-2xl">10</span>
                <Paragraph className="text-white">Pengguna</Paragraph>
              </div>
              <div className="bg-white p-3 rounded-xl w-fit">
                <UserRound />
              </div>
            </div>
            <div className="bg-primary-color rounded-xl px-8 py-6 flex justify-between items-center w-[253px]">
              <div>
                <span className="text-white font-bold text-2xl">10</span>
                <Paragraph className="text-white">Pengguna</Paragraph>
              </div>
              <div className="bg-white p-3 rounded-xl w-fit">
                <Image src="/images/floating-guru-icon.svg" alt="instruktur" />
              </div>
            </div>
            <div className="bg-primary-color rounded-xl px-8 py-6 flex justify-between items-center w-[253px]">
              <div>
                <span className="text-white font-bold text-2xl">10</span>
                <Paragraph className="text-white">Customer</Paragraph>
              </div>
              <div className="bg-white p-3 rounded-xl w-fit">
                <Image src="/images/customer-icon.svg" alt="instruktur" />
              </div>
            </div>
          </div>
          <div className="p-6 space-x-10 mt-10 bg-[#EEEEEE]/70 flex justify-center items-start rounded-xl">
            <div className="w-full space-y-6">
              <div className="bg-white w-full rounded-xl drop-shadow-lg p-4">
                <ChartTotalUser />
              </div>
              <div className="flex justify-center w-full bg-white p-4 drop-shadow-lg rounded-xl items-center">
                <Calendar className="pr-8 border-r-2 border-[#4C4B4B]" />
                <div className="p-4">
                  <Heading as="h2" className="font-normal">
                    Customer
                  </Heading>
                  <div className="flex justify-start items-start flex-col">
                    <div className="mt-4 space-y-4">
                      {Array(4)
                        .fill(null)
                        .map((_, index) => (
                          <div className="flex space-x-3" key={index + 1}>
                            <Image src="/images/ryu-user.svg" alt="user" />
                            <div>
                              <Paragraph className="text-sm">Ryu</Paragraph>
                              <Paragraph className="text-xs">
                                Perempuan
                              </Paragraph>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white w-[400px] border-2 rounded-xl drop-shadow-lg p-4">
              <div className="pb-8">
                <Heading as="h2" className="font-normal">
                  Pengguna
                </Heading>
                <div className="flex justify-start items-start flex-col">
                  <div className="mt-4 space-y-4">
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
              <div className="w-full h-0.5 bg-primary-black"></div>
              <div className="pt-8">
                <Heading as="h2" className="font-normal">
                  Pelatih
                </Heading>
                <div className="flex justify-start items-start flex-col">
                  <div className="mt-4 space-y-4">
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
          </div>
        </section>
      </main>
    </>
  );
}
