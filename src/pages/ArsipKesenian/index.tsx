import IsError from "@/components/IsError";
import IsPending from "@/components/IsPending";
import Layout from "@/components/Layout";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useToast } from "@/components/ui/use-toast";
import { getArsipKesenian } from "@/features";
import { useTitle } from "@/hooks";
import { cn } from "@/lib/utils/cn";
import { PRODUCTION_URL } from "@/lib/utils/constants";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { MessageCircle, Share, ThumbsUp } from "lucide-react";
import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";

const Newsletter = lazy(() => import("@/components/Newsletter"));
const ReadingTime = lazy(() => import("@/components/ReadingTime"));

export default function ArsipKesenian() {
  const { toast } = useToast();

  const clipboard = useClipboard({ copiedTimeout: 900 });

  useTitle("Arsip Kesenian | Taritme");

  const { data, isPending, isError } = useQuery({
    queryKey: ["arsip-kesenian"],
    queryFn: () => getArsipKesenian(),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    placeholderData: keepPreviousData,
  });

  if (isPending) return <IsPending />;
  if (isError) return <IsError />;

  function onShare(link: string) {
    clipboard.copy(link);
    toast({ title: "Success!", description: "Success to copy share link!" });
  }

  return (
    <Layout className="md:flex-row flex-col justify-between items-start">
      <div className="xl:mr-28 md:mr-14">
        <Heading as="h1">Arsip Kesenian</Heading>
        <div className="flex flex-col space-y-14 my-10 justify-start items-start">
          {data.items
            .sort(
              (a: any, b: any) =>
                (new Date(b.fields.date) as any) -
                (new Date(a.fields.date) as any)
            )
            .map((item: any) => (
              <div key={item.sys.id} className="xl:w-[821px]">
                <div className="flex justify-start items-center w-fit space-x-4">
                  <Image
                    src="/images/leonardo-da-vince.svg"
                    alt="author"
                    className="w-12 h-12"
                  />
                  <div
                    className={cn(
                      "md:space-x-4 flex-col md:flex-row justify-start",
                      "flex md:justify-center items-start md:items-center w-fit"
                    )}
                  >
                    <Paragraph>{item.fields.author}</Paragraph>
                    <Paragraph className="text-sm md:text-base md:mt-0 mt-1">
                      {format(item.fields.date, "LLLL d, yyyy")}
                    </Paragraph>
                  </div>
                </div>
                <div className="flex justify-between md:space-x-5 xl:space-x-10 w-full items-start mt-4">
                  <div className="w-full">
                    <Link to={item.sys.id} className="w-full">
                      <Heading as="h3">{item.fields.title}</Heading>
                      <Paragraph className="mt-2 line-clamp-3">
                        {item.fields.description}
                      </Paragraph>
                    </Link>
                    <div
                      className={cn(
                        "flex flex-col md:flex-row mt-3 md:mt-6 md:justify-between",
                        "w-full justify-start items-start md:items-center"
                      )}
                    >
                      <Suspense>
                        <ReadingTime
                          content={documentToHtmlString(
                            item.fields.content
                          ).toString()}
                        />
                      </Suspense>
                      <div className="flex justify-start items-center space-x-4 md:space-x-8 mt-2 md:mt-0">
                        <button className="flex justify-start items-center space-x-2">
                          <ThumbsUp size={20} />
                          <span className="text-primary-black text-xs md:text-base">
                            999
                          </span>
                        </button>
                        <button className="flex justify-start items-center space-x-2">
                          <MessageCircle size={20} />
                          <span className="text-primary-black text-xs md:text-base">
                            10
                          </span>
                        </button>
                        <button
                          className="flex justify-start items-center space-x-2"
                          onClick={() =>
                            clipboard.copy(
                              onShare(
                                `${PRODUCTION_URL}/arsip-kesenian/${item.sys.id}`
                              )
                            )
                          }
                        >
                          <Share size={20} />
                          <span className="text-primary-black text-xs md:text-base">
                            Share
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <Image
                    src={item.fields.thumbnail.fields.file.url}
                    alt={item.fields.title}
                    className="hidden md:block"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
      <aside className="sticky top-14">
        <Suspense>
          <Newsletter />
        </Suspense>
      </aside>
    </Layout>
  );
}
