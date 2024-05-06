import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import { Heading, Paragraph } from "@/components/ui/typography";

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <div className="grid grid-cols-2 grid-rows-2 w-full">
          <div></div>
          <div>
            <Paragraph>
              Bangun relasi dengan penari lainnya melalui forum komunitas kami.
              Tanyakan pertanyaan, bagikan saran, atau temukan kolaborator untuk
              proyek tari Anda.
            </Paragraph>
          </div>
          <div>
            <Paragraph>
              Ingin mempelajari tari tetapi kesulitan mengikutinya? Temukan
              pelatih yang bisa mengajari kamu!
            </Paragraph>
          </div>
          <div>
            <Paragraph>Kesenian adalah jalan hidup yang abadi</Paragraph>
          </div>
          <div></div>
          <div>
            <Heading as="h2">
              Dengan membaca, kita bisa memahami budaya, sejarah, dan
              nilai-nilai yang berpengaruh dalam perjalanan manusia di dunia
            </Heading>
            <Paragraph>- Cak Nun</Paragraph>
          </div>
        </div>
      </Layout>
    </>
  );
}
