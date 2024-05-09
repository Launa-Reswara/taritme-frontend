import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heading, Paragraph } from "@/components/ui/typography";

export default function ArsipKesenian() {
  return (
    <Layout>
      <div>
        <Heading as="h1">Arsip Kesenian</Heading>
      </div>
      <div>
        <Heading as="h2">Newsletter</Heading>
        <div className="rounded-xl">
          <Paragraph>
            Fear of missing out? Hit subscribe then we’ll notice you for any
            updates
          </Paragraph>
          <Input placeholder="Type your mail" />
          <Button className="bg-primary font-medium">Subscribe</Button>
        </div>
      </div>
    </Layout>
  );
}
