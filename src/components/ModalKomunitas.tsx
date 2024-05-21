import { setIdModal } from "@/store/slices/modalKomunitas.slice";
import { KomunitasProps } from "@/types";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import Image from "./ui/image";
import { Heading, Paragraph } from "./ui/typography";
import { m } from "framer-motion";

export default function ModalKomunitas({
  previewImage,
  name,
  description,
}: KomunitasProps) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center p-4 fixed inset-0 z-50 backdrop-blur-md min-h-svh">
      <m.div
        transition={{ duration: 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="sm:w-[600px] overflow-hidden w-full rounded-lg bg-white drop-shadow-lg"
      >
        <div className="relative">
          <Image src={previewImage} alt="sanggar" className="w-full" />
          <Button
            size="icon"
            className="absolute top-4 right-4 rounded-full bg-light-silver"
            variant="secondary"
            onClick={() => dispatch(setIdModal(0))}
          >
            <X />
          </Button>
        </div>
        <div className="p-5">
          <Heading as="h2" className="font-normal">
            {name}
          </Heading>
          <div className="flex my-4 justify-start sm:space-x-3 sm:flex-row sm:justify-center sm:items-center flex-col w-fit items-start">
            <Button className="bg-primary-color rounded-full hover:bg-primary-black flex justify-center items-center space-x-3">
              <Paragraph className="text-xs text-white">
                Komunitas aktif
              </Paragraph>
              <div className="w-2 h-2 bg-malachite rounded-full"></div>
            </Button>
            <Paragraph className="mt-2 sm:mt-0">Created about 4y ago</Paragraph>
          </div>
          <div className="mb-7">
            <Paragraph className="text-primary-black/70">
              <span className="font-medium text-primary-black">Tentang</span>{" "}
              <br /> {description}
            </Paragraph>
          </div>
          <div className="flex flex-col justify-center items-start">
            <Paragraph className="font-medium">Temukan Kami</Paragraph>
            <div className="flex justify-center items-center mt-2 w-fit space-x-4">
              <button>
                <Image src="/images/whatsapp.svg" alt="whatsapp" />
              </button>
              <button>
                <Image src="/images/instagram.svg" alt="instagram" />
              </button>
              <button>
                <Image src="/images/facebook.svg" alt="facebook" />
              </button>
              <button>
                <Image src="/images/twitter.svg" alt="twitter" />
              </button>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  );
}
