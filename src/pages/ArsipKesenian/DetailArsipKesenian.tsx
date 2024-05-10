import Layout from "@/components/Layout";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { MessageCircle, Share, ThumbsUp } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function DetailArsipKesenian() {
  return (
    <Layout>
      <div>
        <div>
          <LazyLoadImage src="/images/logo.svg" alt="logo" />
          <Paragraph>May 31th, 2024</Paragraph>
        </div>
        <div className="flex justify-start items-center w-fit space-x-5">
          <Image src="/images/leonardo-da-vince" alt="author" />
          <div className="w-full flex justify-between items-center">
            <div>
              <Paragraph>Leonardo Da Vince</Paragraph>
              <div>
                <Paragraph>Penulis</Paragraph>
                <LazyLoadImage
                  src="/images/electric-icon.svg"
                  alt="electric icon"
                />
                <Paragraph>5 mins read</Paragraph>
              </div>
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
                  12
                </span>
              </button>
              <button className="flex justify-start items-center space-x-2">
                <Share size={20} />
                <span className="text-primary-black text-xs md:text-base">
                  12
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <Heading as="h2">Baca juga</Heading>
          <div className="flex space-x-6">
            <div></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
