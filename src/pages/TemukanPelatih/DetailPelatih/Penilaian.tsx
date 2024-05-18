import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Textarea } from "@/components/ui/textarea";
import { Heading, Paragraph } from "@/components/ui/typography";
import { toRupiah } from "@/lib/helpers";
import { useNavigate } from "react-router-dom";

export default function Penilaian() {
  const navigate = useNavigate();

  return (
    <Layout className="">
      <div className="flex w-full flex-col md:flex-row md:space-x-8 justify-center items-center md:justify-start md:items-start">
        <aside>
          <div>
            <button
              type="button"
              aria-label="kembali"
              onClick={() => navigate(-1)}
            >
              <img src="/images/arrow-back-icon.svg" alt="arrow back" />
            </button>
            <div className="bg-primary-color mt-6 p-5 h-[352px] flex justify-center items-center w-full relative rounded-xl">
              <Image
                src="/images/lunamaya-instruktur-tari.png"
                alt="Luna Maya"
                className="absolute -top-20"
              />
              <div className="mt-36">
                <Heading as="h2" className="text-white">
                  Luna Maya
                </Heading>
                <Paragraph className="text-white mt-1 mb-2 text-xs">
                  Instruktur tari Sumatra Barat yang memberikan ilmu nya melalui
                  kursus tari.
                </Paragraph>
                <div className="mb-6">
                  <div className="flex justify-center items-center w-fit space-x-2">
                    <Image src="/images/star-icon.svg" alt="star" />
                    <span className="text-base text-white">
                      4.9{" "}
                      <span className="text-white/50 text-xs">(5 ulasan)</span>
                    </span>
                  </div>
                </div>
                <div className="w-full flex justify-start items-center">
                  <Paragraph className="text-white">
                    {toRupiah(100000)}
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="w-full md:mt-0 mt-10">
          <Heading as="h1" className="font-normal text-primary-color">
            Berikan Penilaian
          </Heading>
          <form className="rounded-lg border p-4 lg:p-10 border-spanish-gray mt-6 flex justify-center items-center flex-col">
            <div className="flex justify-center items-center flex-col">
              <Paragraph className="text-2xl text-auro-metal-saurus">
                Berikan ulasan anda terkait instruktur ini
              </Paragraph>
              <div className="flex justify-center items-center w-fit space-x-4 mt-2">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <Image
                      src="/images/unstar.svg"
                      alt="unstar"
                      key={index + 1}
                    />
                  ))}
              </div>
            </div>
            <Textarea
              className="border border-spanish-gray rounded-lg h-52 px-3 mt-10"
              placeholder="Contoh : Kak Luna Maya sangat pandai melatih, sehingga gerakannya mudah di pahami"
            />
            <div className="w-full flex justify-end items-end mt-6">
              <Button
                type="submit"
                className="text-black bg-secondary-color hover:bg-secondary-color/90 rounded-full w-44 px-4 py-7"
              >
                Kirim
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
