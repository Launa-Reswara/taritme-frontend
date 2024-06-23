import IsError from "@/components/IsError";
import IsPending from "@/components/IsPending";
import Layout from "@/components/Layout";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { getArsipKesenianById } from "@/features";
import { useTitle } from "@/hooks";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { MessageCircle, Share, ThumbsUp } from "lucide-react";
import { Suspense, lazy } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BacaJugaList = lazy(() => import("@/components/BacaJugaList"));

export default function DetailArsipKesenian() {
  const { id } = useParams();

  const navigate = useNavigate();

  useTitle(`Artikel | Taritme`);

  const { data, isPending, isError } = useQuery({
    queryKey: [id as string],
    queryFn: () => getArsipKesenianById(id as string),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  if (isPending) return <IsPending />;
  if (isError) return <IsError />;

  return (
    <Layout>
      <div className="flex justify-between items-center mb-8">
        <button
          type="button"
          aria-label="kembali"
          className="flex justify-center items-center space-x-2"
          onClick={() => navigate(-1)}
        >
          <img src="/images/arrow-back-icon.svg" alt="arrow back" />
          <span className="xl:text-2xl">Kembali</span>
        </button>
      </div>

      <div className="flex w-full flex-col sm:flex-row justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/leonardo-da-vince.svg"
            alt="author"
            className="w-12 h-12"
          />
          <div className="flex flex-col">
            <Paragraph className="font-semibold">{data.fields.title}</Paragraph>
            <div className="flex items-center space-x-2">
              <Paragraph className="text-xs">
                {format(data.fields.date, "LLLL d, yyyy")} | Penulis
              </Paragraph>
              <Image
                src="/images/electric-icon.svg"
                alt="electric icon"
                className="w-4 h-4"
              />
              <Paragraph className="text-xs">5 mins read</Paragraph>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5 space-x-4 sm:space-x-8">
          <button className="flex items-center space-x-1">
            <ThumbsUp size={16} />
            <span className="text-xs md:text-sm">999</span>
          </button>
          <button className="flex items-center space-x-1">
            <MessageCircle size={16} />
            <span className="text-xs md:text-sm">12</span>
          </button>
          <button className="flex items-center space-x-1">
            <Share size={16} />
            <span className="text-xs md:text-sm">12</span>
          </button>
        </div>
      </div>
      <div className="prose prose-gray prose-base lg:prose-lg mt-10 max-w-full prose-h1:text-[32px] prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-headings:font-normal w-full">
        {documentToReactComponents(data.fields.content, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
              <Image
                className="w-full rounded-lg"
                src={`https:${node.data.target.fields.file.url}`}
                alt={node.data.target.fields.description}
              />
            ),
          },
        })}
      </div>
      <Heading as="h2" className="font-bold mb-2 mt-12">
        Baca Juga
      </Heading>
      <div className="flex justify-center w-full mt-10">
        <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 grid-rows-1 gap-6">
          <Suspense>
            <BacaJugaList />
          </Suspense>
        </div>
      </div>
    </Layout>
  );
}
