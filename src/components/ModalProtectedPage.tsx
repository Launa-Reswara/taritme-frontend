import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Heading } from "./ui/typography";

export default function ModalProtectedPage() {
  return (
    <div className="flex justify-center items-center min-h-svh">
      <div className="bg-white rounded-lg">
        <Button>
          <X />
        </Button>
        <Heading as="h2">Hai, masuk dulu yuk baru lanjut</Heading>
        <div className="flex justify-center items-center space-x-3">
          <Button className="">Masuk</Button>
          <Button className="">Daftar</Button>
        </div>
      </div>
    </div>
  );
}
