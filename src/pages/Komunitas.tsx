import IsError from "@/components/IsError";
import IsPending from "@/components/IsPending";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { getKomunitas } from "@/features";
import { useTitle } from "@/hooks";
import { setIdModal, setModalKomunitas } from "@/store/slices/komunitas.slice";
import { KomunitasProps, ModalKomunitasSliceProps } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ArrowRightIcon } from "lucide-react";
import { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";

const ModalKomunitas = lazy(() => import("@/components/ModalKomunitas"));

export default function Komunitas() {
  const dispatch = useDispatch();

  const { idModal, dataModalKomunitas } = useSelector(
    (state: ModalKomunitasSliceProps) => state.komunitas
  );

  useTitle("Komunitas | Taritme");

  const { data, isPending, isError } = useQuery({
    queryKey: ["komunitas"],
    queryFn: () => getKomunitas(),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  if (isPending) return <IsPending />;
  if (isError) return <IsError />;

  const komunitas = data as KomunitasProps[];

  return (
    <>
      <Layout className="justify-center items-center">
        {/* Gambar dan Teks */}
        <Heading as="h1" className="text-center">
          Komunitas
        </Heading>
        <div className="relative w-full bg-cover bg-no-repeat mt-10 mb-10 p-4 rounded-xl flex justify-center items-center drop-shadow-lg h-[200px] sm:h-[355px] bg-rumah-gadang-komunitas-image mx-auto my-4">
          <div className="text-center">
            <Heading
              as="h2"
              className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-medium"
            >
              Bangun relasi dengan penari lainnya melalui forum{" "}
              <span style={{ color: "#E1B83B" }}>komunitas</span> kami. Tanyakan
              pertanyaan, <br /> bagikan saran, atau temukan kolaborator untuk
              proyek tari Anda.
            </Heading>
          </div>
        </div>
        {/* Looping Kartu */}
        <div className="relative mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {komunitas.map((item) => (
            <Card key={item.id} className="p-5 rounded-xl bg-white">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt="thumbnail"
                  className="w-full h-full"
                  draggable={false}
                />
              </div>
              <div className="mt-2">
                <Heading as="h3" className="font-medium text-primary/70 mt-4">
                  {item.name}
                </Heading>
                <Paragraph className="text-sm text-gray-600 mt-2">
                  {item.description}
                </Paragraph>
                <Button
                  className="bg-primary-color flex justify-center items-center space-x-2 rounded-full mt-8 text-white hover:bg-primary-black"
                  onClick={() => {
                    dispatch(setIdModal(item.id));
                    dispatch(setModalKomunitas(item));
                  }}
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRightIcon />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Layout>
      {idModal === dataModalKomunitas.id && idModal !== 0 ? (
        <Suspense>
          <ModalKomunitas {...dataModalKomunitas} />
        </Suspense>
      ) : null}
    </>
  );
}
