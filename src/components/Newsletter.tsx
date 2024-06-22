import {
  MAILERLITE_GROUP_ID,
  MAILERLITE_SUBSCRIBE_API,
  MAILERLITE_TOKEN,
} from "@/lib/utils/constants";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Heading, Paragraph } from "./ui/typography";
import { useToast } from "./ui/use-toast";

export default function Newsletter() {
  const { toast } = useToast();

  const {
    formState: { errors },
    handleSubmit,
    getValues,
    register,
    setValue,
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  function onSubmit() {
    async function submitEmail(): Promise<void> {
      try {
        const response = await axios.post(
          MAILERLITE_SUBSCRIBE_API,
          {
            email: getValues("email"),
            groups: [MAILERLITE_GROUP_ID],
          },
          { headers: { Authorization: `Bearer ${MAILERLITE_TOKEN}` } }
        );

        if (response.status === 200 || response.status === 201) {
          toast({
            title: "Success!",
            description: "Thank you for joining our Newsletter!",
          });
          setValue("email", "");
        }
      } catch (err: any) {
        toast({ title: "Error!", description: err.response.data.message });
      }
    }

    submitEmail();
  }

  return (
    <div className="w-full md:w-fit" data-cy="newsletter">
      <Heading as="h2" className="font-normal hidden md:block">
        Newsletter
      </Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-xl bg-secondary-color flex flex-col justify-center items-start px-4 py-6 md:px-6 md:py-10 mt-6"
      >
        <Paragraph>
          Fear of missing out? Hit subscribe then we’ll notice you for any
          updates
        </Paragraph>
        <Input
          {...register("email", { required: true })}
          placeholder="Type your Email"
          type="email"
          className="rounded-full my-4"
        />
        {errors.email ? (
          <Paragraph className="text-sm">{errors.email?.message}</Paragraph>
        ) : null}
        <Button
          type="submit"
          className="font-medium rounded-full bg-primary-color hover:bg-primary-black"
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
}
