import IsError from "@/components/IsError";
import IsPending from "@/components/IsPending";
import Layout from "@/components/Layout";
import Newsletter from "@/components/Newsletter";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useToast } from "@/components/ui/use-toast";
import { useTitle } from "@/hooks";
import { cn } from "@/lib/utils/cn";
import { client } from "@/lib/utils/contentfulClient";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { MessageCircle, Share, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function ArsipKesenian() {
  useTitle("Arsip Kesenian | Taritme");

  const { toast } = useToast();

  async function getArsipKesenian() {
    try {
      const response = await client.getEntries().then((entries) => entries);
      return response;
    } catch (err) {
      toast({ title: "Error!", description: "Failed to get arsip kesenian!" });
    }
  }

  const { data, isPending, isError } = useQuery({
    queryKey: ["arsip-kesenian"],
    queryFn: () => getArsipKesenian(),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    placeholderData: keepPreviousData,
  });

  return (
    <Layout className="flex-row justify-between items-start">
      {isPending ? (
        <IsPending />
      ) : isError ? (
        <IsError />
      ) : (
        <>
          <div className="xl:mr-28 md:mr-14">
            <Heading as="h1">Arsip Kesenian</Heading>
            <div className="flex flex-col space-y-14 my-10 justify-start items-start">
              {data.items.map((item) => (
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
                        <Paragraph className="mt-2">
                          {item.fields.description}
                        </Paragraph>
                      </Link>
                      <div
                        className={cn(
                          "flex flex-col md:flex-row mt-3 md:mt-6 md:justify-between",
                          "w-full justify-start items-start md:items-center"
                        )}
                      >
                        <div className="flex justify-start items-center space-x-1">
                          <Image
                            src="/images/electric-icon.svg"
                            alt="electric icon"
                          />
                          <span className="text-primary-black text-xs md:text-base">
                            5 mins read
                          </span>
                        </div>
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
                          <button className="flex justify-start items-center space-x-2">
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
            <div className="block md:hidden">
              <Newsletter />
            </div>
          </div>
          <aside className="sticky top-14 hidden md:block">
            <Newsletter />
          </aside>
        </>
      )}
    </Layout>
  );
}
