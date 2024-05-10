import Layout from "@/components/Layout";
import Newsletter from "@/components/Newsletter";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { listArsipKesenian } from "@/lib/utils/data";
import { MessageCircle, Share, ThumbsUp } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import slugify from "slugify";

export default function ArsipKesenian() {
  useTitle("Arsip Kesenian | Taritme");

  return (
    <Layout className="flex-row justify-between items-start">
      <div className="xl:mr-28 md:mr-14">
        <Heading as="h1">Arsip Kesenian</Heading>
        <div className="flex flex-col space-y-14 mt-10 justify-start items-start">
          {listArsipKesenian.map((item) => (
            <div key={item.id} className="xl:w-[821px]">
              <div className="flex justify-start items-center w-fit space-x-4">
                <Image
                  src="/images/leonardo-da-vince.svg"
                  alt="author"
                  className="w-12 h-12"
                />
                <Paragraph>{item.author}</Paragraph>
                <Paragraph>{item.date}</Paragraph>
              </div>
              <div className="flex justify-between space-x-5 xl:space-x-10 w-full items-start mt-4">
                <div className="w-full">
                  <Link
                    to={slugify(item.title, { lower: true })}
                    className="w-full"
                  >
                    <Heading as="h3">{item.title}</Heading>
                    <Paragraph className="mt-2">
                      {item.previewWriting}
                    </Paragraph>
                  </Link>
                  <div className="flex flex-col md:flex-row mt-3 md:mt-6 md:justify-between w-full justify-start items-start md:items-center">
                    <div className="flex justify-start items-center space-x-1">
                      <LazyLoadImage src="/images/electric-icon.svg" />
                      <span className="text-primary-black text-xs md:text-base">
                        {item.readingTime}
                      </span>
                    </div>
                    <div className="flex justify-start items-center space-x-4 md:space-x-8 mt-2 md:mt-0">
                      <button className="flex justify-start items-center space-x-2">
                        <ThumbsUp size={20} />
                        <span className="text-primary-black text-xs md:text-base">
                          {item.like}
                        </span>
                      </button>
                      <button className="flex justify-start items-center space-x-2">
                        <MessageCircle size={20} />
                        <span className="text-primary-black text-xs md:text-base">
                          {item.comments}
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
                  src={item.previewImage}
                  alt={item.title}
                  className="xl:min-w-[161px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <aside className="sticky top-14 hidden md:block">
        <Newsletter />
      </aside>
    </Layout>
  );
}
