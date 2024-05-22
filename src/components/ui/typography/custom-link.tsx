import { cn } from "@/lib/utils/cn";
import { Link, LinkProps } from "react-router-dom";

export function CustomLink({ children, className, ...props }: LinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "text-blue-pigment",
        "text-base font-normal leading-[1.75] tracking-wide",
        "md:leading-[1.7777778]",
        className
      )}
    >
      {children}
    </Link>
  );
}
