import IsError from "@/components/IsError";
import IsPending from "@/components/IsPending";
import Layout from "@/components/Layout";
import Image from "@/components/ui/image";
import { Input } from "@/components/ui/input";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { toRupiah } from "@/lib/helpers";
import {
  CONDITION,
  DEVELOPMENT_API_URL,
  PRODUCTION_API_URL,
} from "@/lib/utils/constants";
import { InstrukturProps } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ChevronRight, Search } from "lucide-react";
import { ofetch } from "ofetch";
import { Link } from "react-router-dom";
import slugify from "slugify";

export default function TemukanPelatih() {
  useTitle("Temukan Pelatih | Taritme");

  async function getAllPelatih() {
    try {
      const response = await ofetch(
        `${
          CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
        }/api/pelatih-tari`,
        {
          method: "GET",
          parseResponse: JSON.parse,
          responseType: "json",
        }
      );

      return response.data as InstrukturProps[];
    } catch (err) {
      throw new Error("Failed to fetch data!");
    }
  }

  const { data, isPending, isError } = useQuery({
    queryKey: ["temukan-pelatih"],
    queryFn: () => getAllPelatih(),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    placeholderData: keepPreviousData,
  });

  if (isPending) return <IsPending />;
  if (isError) return <IsError />;

  return (
    <Layout>
      <div className="bg-cover bg-no-repeat rounded-xl text-center drop-shadow-lg bg-temukan-pelatih-bg-image flex justify-center items-center p-4 w-full h-[200px] sm:h-[355px] flex-col mx-auto">
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
      <div className="mt-12 w-full">
        <Heading as="h2" className="font-medium mb-28">
          Rekomendasi untukmu
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-x-9 gap-y-24 lg:grid-cols-3 xl:grid-cols-4 grid-rows-1">
          {data.slice(0, 3).map((item) => (
            <Link to={slugify(item.name, { lower: true })} key={item.id}>
              <div className="bg-primary-color p-5 h-[352px] flex justify-center items-center w-full relative rounded-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="absolute -top-20"
                />
                <div className="mt-36">
                  <Heading as="h2" className="text-white">
                    {item.name}
                  </Heading>
                  <Paragraph className="text-white mt-1 mb-2 text-xs">
                    {item.description}
                  </Paragraph>
                  <div className="mb-6">
                    <div className="flex justify-center items-center w-fit space-x-2">
                      <Image src="/images/star-icon.svg" alt="star" />
                      <span className="text-base text-white">
                        {item.rating}{" "}
                        <span className="text-white/50 text-xs">
                          ({item.total_review} ulasan)
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <Paragraph className="text-white">
                      {toRupiah(item.price)}
                    </Paragraph>
                    <ChevronRight className="text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-20 w-full">
        <Heading as="h2" className="font-medium mb-28">
          Pelatih lainnya
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-9 gap-y-24 lg:grid-cols-3 xl:grid-cols-4 grid-rows-1">
          {data.slice(3, 8).map((item) => (
            <Link to={slugify(item.name, { lower: true })} key={item.id}>
              <div className="bg-primary-color p-5 h-[352px] flex justify-center items-center w-full relative rounded-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="absolute -top-20"
                />
                <div className="mt-36">
                  <Heading as="h2" className="text-white">
                    {item.name}
                  </Heading>
                  <Paragraph className="text-white mt-1 mb-2 text-xs">
                    {item.description}
                  </Paragraph>
                  <div className="mb-6">
                    <div className="flex justify-center items-center w-fit space-x-2">
                      <Image src="/images/star-icon.svg" alt="star" />
                      <span className="text-base text-white">
                        {item.rating}{" "}
                        <span className="text-white/50 text-xs">
                          ({item.total_review} ulasan)
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <Paragraph className="text-white">
                      {toRupiah(item.price)}
                    </Paragraph>
                    <ChevronRight className="text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
