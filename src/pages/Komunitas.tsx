import Layout from "@/components/Layout";
import { Heading, Paragraph } from "@/components/ui/typography";

export default function Komunitas() {
  return (
    <Layout>
      <Heading as="h1">Komunitas</Heading>
      <div>
        <Paragraph>
          Bangun relasi dengan penari lainnya melalui forum komunitas kami.
          Tanyakan pertanyaan, bagikan saran, atau temukan kolaborator untuk
          proyek tari Anda.
        </Paragraph>
      </div>
      <div className="grid grid-cols-3 grid-rows-1"></div>
    </Layout>
  );
}
