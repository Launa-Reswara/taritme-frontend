import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export default function BackToTop() {
  return (
    <Button
      size="icon"
      className="fixed bottom-4 right-4 bg-primary-color hover:bg-primary-black"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp />
    </Button>
  );
}
