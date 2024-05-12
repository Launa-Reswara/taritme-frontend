import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/ui/typography";

export default function IkutiKursus() {
  return (
    <Layout>
      <div>
        <Heading as="h1">Ikut Kursus</Heading>
        <div className="py-6 px-4">
          <div>
            <label htmlFor="tanggal-kursus">Tanggal Kursus</label>
            <Input placeholder="DD/MM/YYYY" type="date" name="tanggal-kursus" />
          </div>
          <div>
            <div>
              <label htmlFor="nama">Nama</label>
              <Input placeholder="Nama Anda" name="nama" />
            </div>
            <div>
              <label htmlFor="nomor-hp">Nomor HP</label>
              <Input placeholder="Nomor HP" name="nomor-hp" />
            </div>
            <div>
              <label htmlFor="nama">Metode Pembayaran</label>
              <Input placeholder="Metode Pembayaran" name="nama" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
