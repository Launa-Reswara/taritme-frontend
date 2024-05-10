import Layout from "@/components/Layout";
import Image from "@/components/ui/image";
import { Input } from "@/components/ui/input";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
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
      <Heading as="h2" className="font-medium">
        Rekomendasi untukmu
      </Heading>
      <Heading as="h2" className="font-medium">
        Pelatih lainnya
      </Heading>
      <div className="grid grid-cols-4">
        {listInstruktur.map((item) => (
          <div key={item.id} className="bg-primary-color rounded-xl">
            <Image src="" alt="" />
            <Heading as="h2">{item.name}</Heading>
            <Paragraph>{item.description}</Paragraph>
            <div>
              <LazyLoadImage src="/images/star.png" alt="star" />
            </div>
            <div>
              <Paragraph>{item.harga}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
