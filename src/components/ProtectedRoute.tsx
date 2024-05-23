import { ChildrenProps } from "@/types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Heading, Paragraph } from "./ui/typography";

export default function ProtectedRoute({ children }: ChildrenProps) {
  const [isTokenAvailable] = useState<boolean>(
    localStorage.getItem("token") ? true : false
  );

  return !isTokenAvailable ? (
    <div className="flex fixed w-full justify-center backdrop-blur-md items-center min-h-svh">
      <div className="p-4">
        <div className="bg-white p-4 rounded-xl drop-shadow-lg sm:p-10">
          <Heading
            as="h2"
            className="font-normal text-center text-xl sm:text-2xl"
          >
            Hai, masuk dulu yuk baru lanjut
          </Heading>
          <div className="flex justify-center flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 mt-7 w-full">
            <Link to="/auth/login" className="w-full">
              <Button className="text-black bg-secondary-color hover:bg-secondary-color/90 rounded-3xl w-full px-4 py-7">
                <Paragraph>Masuk</Paragraph>
              </Button>
            </Link>
            <Link to="/auth/registration" className="w-full">
              <Button className="text-black bg-secondary-color hover:bg-secondary-color/90 rounded-3xl w-full px-4 py-7">
                <Paragraph>Daftar</Paragraph>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    children
  );
}
