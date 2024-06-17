import { useScroll } from "@/hooks";
import { cn } from "@/lib/utils/cn";
import { MotionProps, m } from "framer-motion";
import { HTMLAttributes, lazy } from "react";
import Navbar from "./Navbar";

type TransitionLayoutProps = MotionProps & HTMLAttributes<HTMLDivElement>;

const BackToTop = lazy(() => import("@/components/BackToTop"));

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
      {scroll > 100 ? <BackToTop /> : null}
    </>
  );
}
