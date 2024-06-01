import { cn } from "@/lib/utils/cn";
import { Heading } from "./ui/typography";

export default function IsError() {
  return (
    <>
      <main
        className={cn(
          "flex justify-center min-h-svh mt-10 items-center w-full"
        )}
      >
        <section
          className={cn(
            "w-full flex justify-center items-center px-4 pb-6 flex-col max-w-[1440px]"
          )}
        >
          <Heading as="h2" className="font-semibold text-center">
            Error! There is something wrong
          </Heading>
        </section>
      </main>
    </>
  );
}
