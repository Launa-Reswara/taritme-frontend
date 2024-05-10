import Layout from "@/components/Layout";
import Image from "@/components/ui/image";
import { Input } from "@/components/ui/input";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { toRupiah } from "@/lib/helpers";
import { listInstruktur } from "@/lib/utils/data";
import { Search } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function TemukanPelatih() {
  useTitle("Temukan Pelatih | Taritme");

  return (
    <Layout>
      <div className="bg-cover bg-no-repeat rounded-xl text-center drop-shadow-lg bg-temukan-pelatih-bg-image flex justify-center items-center w-full h-[355px] flex-col">
        <Heading
          as="h1"
          className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl"
        >
          Temukan pelatih tari yang cocok untukmu
        </Heading>
        <div className="relative flex justify-center items-center mt-6">
          <Input
            className="bg-white w-fit md:w-[487px] rounded-full relative"
            placeholder="Cari Pelatih"
          />
          <Search className="absolute right-4" />
        </div>
      </div>
      <div className="mt-12">
        <Heading as="h2" className="font-medium mb-8">
          Rekomendasi untukmu
        </Heading>
        <div className="grid grid-cols-4">
          {listInstruktur.map((item) => (
            <div key={item.id} className="bg-primary-color w-full rounded-xl">
              <Image src={item.image} alt={item.name} className="border-2" />
              <div className="">
                <Heading as="h2" className="text-white">
                  {item.name}
                </Heading>
                <Paragraph className="text-white">{item.description}</Paragraph>
                <div>
                  <div className="flex justify-center items-center w-fit space-x-2">
                    <LazyLoadImage src="/images/star-icon.svg" alt="star" />
                    <span className="text-base text-white">
                      {item.rate}{" "}
                      <span className="text-white/50 text-xs">
                        ({item.totalUlasan} ulasan)
                      </span>
                    </span>
                  </div>
                </div>
                <div>
                  <Paragraph className="text-white">
                    {toRupiah(item.harga)}
                  </Paragraph>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Heading as="h2" className="font-medium">
          Pelatih lainnya
        </Heading>
      </div>
    </Layout>
  );
}
