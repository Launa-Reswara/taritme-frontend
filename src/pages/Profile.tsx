import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

export default function Profile() {
  const { toast } = useToast();

  async function getUserProfile() {
    try {
      const response = await axios.get("", {
        responseType: "json",
      });
    } catch (err: any) {
      toast({ title: "Error!", description: err.message });
    }
  }

  return (
    <main className="w-full">
      <section className="w-full">
        <div></div>
        <div>
          <Image src={``} alt={``} className="rounded-full" />
          <Button>Edit Profile</Button>
        </div>
        <div className="w-full max-w-[1440px]">
          <Heading as="h1"></Heading>
          <Paragraph>fsdf</Paragraph>
        </div>
      </section>
    </main>
  );
}
