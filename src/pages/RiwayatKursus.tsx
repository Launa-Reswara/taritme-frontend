import IsError from "@/components/IsError";
import IsPending from "@/components/IsPending";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { getRiwayatKursus } from "@/features";
import { useTitle } from "@/hooks";
import { toRupiah } from "@/lib/helpers";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import slugify from "slugify";

export default function RiwayatKursus() {
  useTitle("Riwayat kursus | Taritme");

  const { data, isPending, isError } = useQuery({
    queryKey: ["riwayat_kursus"],
    queryFn: () => getRiwayatKursus(),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    placeholderData: keepPreviousData,
  });

  if (isPending) return <IsPending />;
  if (isError) return <IsError />;

  const riwayatKursus = data.data;

  return (
    <Layout>
      <div className="w-full">
        <Heading as="h1" className="text-primary-color font-normal">
          Riwayat Kursus
        </Heading>
        <div className="flex justify-start mt-10 space-y-10 items-center w-full flex-col">
          {riwayatKursus.map((item) => (
            <div
              key={item.id}
              className="rounded-lg flex-col md:flex-row border w-full border-primary-color p-6 flex md:justify-start md:items-start justify-center space-x-5 items-center"
            >
              <div className="rounded-xl bg-primary-color w-full md:w-fit flex justify-center items-center px-7 py-3">
                <Image src={item.image} alt={item.name} draggable={false} />
              </div>
              <div className="w-full md:mt-0 mt-4">
                <Heading as="h2">{item.name}</Heading>
                <Paragraph className="my-2">{toRupiah(item.price)}</Paragraph>
                <Paragraph>{item.description}</Paragraph>
                <div className="flex space-x-2 mt-2 mb-4 justify-center items-center w-fit">
                  <Image src="/images/star-icon.svg" alt="star" />
                  <Paragraph>
                    4.9{" "}
                    <span className="text-primary-black/50">(5 Ulasan)</span>
                  </Paragraph>
                </div>
                <div className="w-full justify-center md:justify-end md:items-end items-center flex">
                  <Link
                    to={`/temukan-pelatih/${slugify(item.name, {
                      lower: true,
                    })}/ikuti-kursus/penilaian`}
                  >
                    <Button className="text-primary-black bg-secondary-color hover:bg-secondary-color/90 rounded-full w-full md:w-72 px-4 py-7">
                      <Paragraph>Beri Penilaian</Paragraph>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
