import IsError from "@/components/IsError";
import IsPending from "@/components/IsPending";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { client } from "@/lib/utils/contentfulClient";
import { listArsipKesenian } from "@/lib/utils/data";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { MessageCircle, Share, ThumbsUp } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailArsipKesenian() {
  const navigate = useNavigate();
  const { id } = useParams();

  useTitle(`Artikel | Taritme`);

  async function getArsipKesenianByTitle() {
    try {
      const response = await client
        .getEntry(id as string)
        .then((entries) => entries);
      return response;
    } catch (err) {
      throw new Error("Failed to get blog!");
    }
  }

  const { data, isPending, isError } = useQuery({
    queryKey: ["detail-arsip-kesenian"],
    queryFn: () => getArsipKesenianByTitle(),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

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
      {isPending ? (
        <IsPending />
      ) : isError ? (
        <IsError />
      ) : (
        <>
          <div className="flex w-full flex-col sm:flex-row justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/leonardo-da-vince.svg"
                alt="author"
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <Paragraph className="font-semibold">
                  {data.fields.title}
                </Paragraph>
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
          <div className="prose prose-gray mt-10 prose-lg max-w-full prose-h1:text-[32px] prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-headings:font-normal w-full">
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
              {listArsipKesenian.slice(0, 3).map((item, i) => (
                <Card key={i} className="p-4 rounded-xl w-full bg-white">
                  <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-xl">
                    <Image
                      src="/images/tari-piring-home.png"
                      alt="thumbnail"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    {/*<ReadingTime content={} />*/}
                    <Heading as="h2">{item.title}</Heading>
                    <div className="flex items-center space-x-3 my-3">
                      <Image
                        src="/images/leonardo-da-vince.svg"
                        alt="author"
                        className="w-6 h-6 rounded-full"
                      />
                      <Paragraph className="text-sm">{item.author}</Paragraph>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}
