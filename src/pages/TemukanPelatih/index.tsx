import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/ui/typography";
import { useTitle } from "@/hooks";

export default function TemukanPelatih() {
  useTitle("Temukan Pelatih | Taritme");

  return (
    <Layout>
      <Heading as="h1">Temukan pelatih tari yang cocok untukmu</Heading>
      <Input className="" placeholder="Cari Pelatih" />
      <Heading as="h2">Rekomendasi untukmu</Heading>
      <Heading as="h2">Pelatih lainnya</Heading>
      <div className="grid grid-cols-4"></div>
    </Layout>
  );
}
