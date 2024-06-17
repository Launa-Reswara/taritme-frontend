import { cn } from "@/lib/utils/cn";
import { MotionProps, m } from "framer-motion";
import { HTMLAttributes } from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
import { useScroll } from "@/hooks";

type TransitionLayoutProps = MotionProps & HTMLAttributes<HTMLDivElement>;

export default function Layout({
  className,
  children,
  ...props
}: TransitionLayoutProps) {
  const scroll = useScroll();

  return (
    <>
      <Navbar />
      <m.main
        transition={{ duration: 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={cn("flex justify-center min-h-svh mt-10 items-start w-full")}
        {...props}
      >
        <section
          className={cn(
            "w-full flex justify-center items-start px-4 pb-6 flex-col max-w-[1440px]",
            className
          )}
        >
          {children}
        </section>
      </m.main>
      {scroll > 100 ? (
        <Button
          size="icon"
          className="fixed bottom-4 right-4 bg-primary-color hover:bg-primary-black"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp />
        </Button>
      ) : null}
    </>
  );
}
