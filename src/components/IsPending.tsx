import { cn } from "@/lib/utils/cn";
import Navbar from "./Navbar";
import { Heading } from "./ui/typography";

export default function IsPending() {
  return (
    <>
      <Navbar />
      <main
        className={cn("flex justify-center min-h-svh mt-10 items-start w-full")}
      >
        <section
          className={cn(
            "w-full flex justify-center items-center min-h-svh px-4 pb-6 flex-col max-w-[1440px]"
          )}
        >
          <div className="flex w-fit space-x-2 justify-center items-center">
            <Heading as="h2" className="font-bold">
              Loading
            </Heading>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn("animate-spin")}
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          </div>
        </section>
      </main>
    </>
  );
}
