import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import { Heading, Paragraph } from "@/components/ui/typography";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <div className="grid grid-cols-3 gap-6 grid-rows-2 w-full">
          <div>
            <LazyLoadImage src="/images/abstract.png" alt="abstract" />
          </div>
          <div className="bg-secondary-color rounded-xl">
            <Heading as="h1" className="font-medium">
              Komunitas
            </Heading>
            <Paragraph>
              Bangun relasi dengan penari lainnya melalui forum komunitas kami.
              Tanyakan pertanyaan, bagikan saran, atau temukan kolaborator untuk
              proyek tari Anda.
            </Paragraph>
            <div>
              <img src="/images/" alt="komunitas" />
              <img src="/images/" alt="komunitas" />
              <img src="/images/" alt="komunitas" />
              <div className="rounded-full">+3</div>
            </div>
          </div>
          <div className="rounded-xl relative">
            <LazyLoadImage
              src="/images/pelatih-tari-home.png"
              className="rounded-xl relative"
              alt="pelatih tari"
            />
            <div className="absolute top-0">
              <Heading as="h2" className="font-medium text-white">
                Temukan Pelatihmu
              </Heading>
              <Paragraph className="text-white">
                Ingin mempelajari tari tetapi kesulitan mengikutinya? Temukan
                pelatih yang bisa mengajari kamu!
              </Paragraph>
            </div>
          </div>
          <div className="bg-primary-color rounded-xl">
            <Heading as="h2" className="font-medium">
              Kesenian adalah jalan hidup yang abadi
            </Heading>
            <Paragraph>- Cak Nun</Paragraph>
          </div>
          <div className="rounded-xl">
            <LazyLoadImage
              src="/images/payung-tari.png"
              alt="payung tari"
              className="rounded-xl"
            />
          </div>
          <div className="bg-secondary-color rounded-xl">
            <div>
              <Heading as="h2" className="font-medium">
                Arsip
              </Heading>
              <Heading as="h1" className="font-medium">
                Kesenian
              </Heading>
            </div>
            <Heading as="h2">
              Dengan membaca, kita bisa memahami budaya, sejarah, dan
              nilai-nilai yang berpengaruh dalam perjalanan manusia di dunia
            </Heading>
          </div>
        </div>
      </Layout>
    </>
  );
}
