import Layout from "@/components/Layout";
import { Heading } from "@/components/ui/typography";

export default function NotFound() {
  return (
    <Layout className="justify-center items-center">
      <div>
        <Heading as="h1">404 Not Found</Heading>
      </div>
    </Layout>
  );
}
