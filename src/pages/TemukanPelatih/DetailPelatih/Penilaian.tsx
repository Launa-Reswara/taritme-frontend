import IsError from "@/components/IsError";
import IsPending from "@/components/IsPending";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Textarea } from "@/components/ui/textarea";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useToast } from "@/components/ui/use-toast";
import { getDetailPelatihTari, getPaymentStatus } from "@/features";
import { useTitle } from "@/hooks";
import { toRupiah } from "@/lib/helpers";
import { cn } from "@/lib/utils/cn";
import {
  CONDITION,
  DEVELOPMENT_API_URL,
  PRODUCTION_API_URL,
} from "@/lib/utils/constants";
import { penilaianSchema } from "@/lib/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { Star } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Navigate,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

export default function Penilaian() {
  const [star, setStar] = useState<number>(0);
  const [searchParams] = useSearchParams();

  const { name } = useParams();
  const { toast } = useToast();

  const navigate = useNavigate();
  const orderId = searchParams.get("order_id");

  useTitle(`Penilaian pelatih | Taritme`);

  const {
    getValues,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: { ulasan: "" },
    resolver: zodResolver(penilaianSchema),
  });

  const { data, isPending, isError } = useQuery({
    queryKey: [orderId],
    queryFn: () => getPaymentStatus(orderId as string),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    placeholderData: keepPreviousData,
  });

  const { data: pelatihTari } = useQuery({
    queryKey: ["get-detail-pelatih-tari"],
    queryFn: () => getDetailPelatihTari(name as string),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    placeholderData: keepPreviousData,
  });

  if (isPending) return <IsPending />;
  if (isError) return <IsError />;

  function onSubmit() {
    async function submitPenilaian() {
      try {
        const response = await axios.post(
          `${
            CONDITION === "development"
              ? DEVELOPMENT_API_URL
              : PRODUCTION_API_URL
          }/api/pelatih-tari/${name}/penilaian`,
          {
            pelatih_tari_id: pelatihTari.id,
            pelatih_tari_name: pelatihTari.name,
            rating: star,
            comment: getValues("ulasan"),
            order_id: orderId,
          },
          { headers: { Authorization: `Bearer ${Cookies.get("token")}` } }
        );

        if (response.data.statusCode === 200) {
          toast({ title: "Success!", description: response.data.message });
          setTimeout(() => {
            window.location.replace("/");
          }, 2000);
        }
      } catch (err: any) {
        toast({ title: "Error!", description: err.response.data.message });
      }
    }

    submitPenilaian();
  }

  return (
    <>
      <Layout>
        {orderId &&
        orderId === data.order_id &&
        data.transaction_status === "settlement" ? (
          <div className="flex w-full flex-col md:flex-row md:space-x-8 justify-center items-center md:justify-start md:items-start">
            <div>
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
                    src={pelatihTari.image}
                    alt={pelatihTari.name}
                    className="absolute -top-20"
                  />
                  <div className="mt-36">
                    <Heading as="h2" className="text-white">
                      {pelatihTari.name}
                    </Heading>
                    <Paragraph className="text-white mt-1 mb-2 text-xs">
                      {pelatihTari.description}
                    </Paragraph>
                    <div className="mb-6">
                      <div className="flex justify-center items-center w-fit space-x-2">
                        <Image src="/images/star-icon.svg" alt="star" />
                        <span className="text-base text-white">
                          {pelatihTari.rating}{" "}
                          <span className="text-white/50 text-xs">
                            ({pelatihTari.total_comments} ulasan)
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex justify-start items-center">
                      <Paragraph className="text-white">
                        {toRupiah(pelatihTari.price)}
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:mt-0 mt-10">
              <Heading as="h1" className="font-normal text-primary-color">
                Berikan Penilaian
              </Heading>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-lg border p-4 lg:p-10 border-spanish-gray mt-6 flex justify-center items-center flex-col"
              >
                <div className="flex justify-center items-center flex-col">
                  <Paragraph className="text-2xl text-auro-metal-saurus">
                    Berikan ulasan anda terkait instruktur ini
                  </Paragraph>
                  <div className="flex justify-center items-center w-fit space-x-4 mt-2">
                    {Array(5)
                      .fill(null)
                      .map((_, index) => (
                        <button
                          type="button"
                          onClick={() => setStar(index + 1)}
                          key={index + 1}
                        >
                          <Star
                            className={cn(
                              "text-secondary-color",
                              star >= index + 1 ? "fill-secondary-color" : ""
                            )}
                          />
                        </button>
                      ))}
                  </div>
                </div>
                <div className="w-full">
                  <Textarea
                    {...register("ulasan", { required: true })}
                    className="border border-spanish-gray rounded-lg h-52 px-3 mt-10"
                    placeholder="Contoh: Kak Rina Ayu sangat pandai melatih, sehingga gerakannya mudah di pahami"
                  />
                  <Paragraph className="text-xs mt-2 font-medium">
                    {errors.ulasan?.message}
                  </Paragraph>
                </div>
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
        ) : (
          <Navigate to="/" />
        )}
      </Layout>
    </>
  );
}
