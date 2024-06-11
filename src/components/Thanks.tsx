import { useQuery } from "@tanstack/react-query";
import { Heading } from "./ui/typography";
import { useToast } from "./ui/use-toast";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export default function Thanks() {
  const { toast } = useToast();

  const [searchParams] = useSearchParams();

  const orderId = searchParams.get("order_id");

  async function postRiwayatKursus() {
    try {
      const response = await axios.post("");
    } catch (err: any) {
      toast({ title: "Error!", description: err.message });
    }
  }

  // const { data, isPending, isError } = useQuery({queryKey: ['post-riwayat-kursus'], queryFn})
  return (
    <div>
      <div>
        <Heading as="h1">
          Terima kasih telah memesan jasa pelatih tari di Taritme!
        </Heading>
      </div>
    </div>
  );
}
