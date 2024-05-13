import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Heading, Paragraph } from "./ui/typography";

export default function Newsletter() {
  return (
    <div className="w-full md:w-fit">
      <Heading as="h2" className="font-normal hidden md:block">
        Newsletter
      </Heading>
      <div className="rounded-xl bg-secondary-color flex flex-col justify-center items-start px-4 py-6 md:px-6 md:py-10 mt-6">
        <Paragraph>
          Fear of missing out? Hit subscribe then we’ll notice you for any
          updates
        </Paragraph>
        <Input
          placeholder="Type your mail"
          type="email"
          className="rounded-full my-4"
        />
        <Button className="font-medium rounded-full bg-primary-color hover:bg-primary-black">
          Subscribe
        </Button>
      </div>
    </div>
  );
}
