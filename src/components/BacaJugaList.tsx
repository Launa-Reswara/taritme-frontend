import { getArsipKesenian } from "@/features";
import { randomizeArray } from "@/lib/helpers";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import ReadingTime from "./ReadingTime";
import { Card } from "./ui/card";
import Image from "./ui/image";
import { Heading, Paragraph } from "./ui/typography";

export default function BacaJugaList() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["arsip-kesenian"],
    queryFn: () => getArsipKesenian(),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    placeholderData: keepPreviousData,
  });

  return (
    <>
      {isPending ? (
        <p>Loading....</p>
      ) : isError ? (
        <p>Error!</p>
      ) : (
        randomizeArray(data.items)
          .slice(0, 3)
          .map((item: any) => (
            <Card key={item.sys.id} className="p-4 rounded-xl w-full bg-white">
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={item.fields.thumbnail.fields.file.url}
                  alt="thumbnail"
                  className="object-cover w-full h-[200px]"
                />
              </div>
              <div>
                <ReadingTime
                  content={documentToHtmlString(item.fields.content).toString()}
                />
                <Link to={`/arsip-kesenian/${item.sys.id}`} className="w-full">
                  <Heading as="h2">{item.fields.title}</Heading>
                </Link>
                <div className="flex items-center space-x-3 my-3">
                  <Image
                    src="/images/leonardo-da-vince.svg"
                    alt="author"
                    className="w-6 h-6 rounded-full"
                  />
                  <Paragraph className="text-sm">
                    {item.fields.author}
                  </Paragraph>
                </div>
              </div>
            </Card>
          ))
      )}
    </>
  );
}
