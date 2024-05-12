import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Heading, Paragraph } from "@/components/ui/typography";
import { Heart } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

export default function DetailPelatih() {
  const navigate = useNavigate();

  return (
    <Layout>
      <button
        type="button"
        aria-label="kembali"
        className="flex justify-center items-center space-x-2"
        onClick={() => navigate(-1)}
      >
        <img src="/images/arrow-back-icon.svg" alt="arrow back" />
        <span className="xl:text-2xl">Kembali</span>
      </button>
      <div>
        <div>
          <div>
            <Heading as="h1">Luna Maya</Heading>
            <Paragraph className="text-2xl">IDR 100.000,-</Paragraph>
          </div>
          <Paragraph>
            Instruktur tari Sumatra Barat yang memberikan ilmu nya melalui kelas
            tari.
          </Paragraph>
        </div>
        <div>
          <div>
            <LazyLoadImage src="/images/star.svg" />
            <Paragraph>
              4.9 <span>(5 Ulasan)</span>
            </Paragraph>
          </div>
          <div className="flex justify-between items-center">
            <Button className="w-full">Ikut Kelas</Button>
            <button>
              <Heart />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Paragraph>Rincian</Paragraph>
        <Heading as="h2" className="font-medium">
          Tarif per jam
        </Heading>
        <Heading as="h2" className="font-medium">
          Tarif Paket
        </Heading>
      </div>
    </Layout>
  );
}
