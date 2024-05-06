import { cn } from "@/lib/utils/cn";
import { Link, LinkProps } from "react-router-dom";

export function CustomLink({ children, className, ...props }: LinkProps) {
  return (
    <Link {...props} className={cn("text-blue-pigment", className)}>
      {children}
    </Link>
  );
}
