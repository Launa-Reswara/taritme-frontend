import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CustomLink, Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import {
  CONDITION,
  DEVELOPMENT_API_URL,
  PRODUCTION_API_URL,
} from "@/lib/utils/constants";
import { loginAdminSchema } from "@/lib/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { m } from "framer-motion";
import { ofetch } from "ofetch";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function LoginAdmin() {
  const [isWrongAdminData, setIsWrongAdminData] = useState<boolean>(false);
  const [, setIsAdmin] = useState<boolean>(false);

  const navigate = useNavigate();

  useTitle("Login Admin | Taritme");

  const {
    formState: { errors },
    register,
    handleSubmit,
    getValues,
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginAdminSchema),
  });

  // Auth logic
  function onSubmit() {
    async function login() {
      try {
        const response = await ofetch(
          `${
            CONDITION === "development"
              ? DEVELOPMENT_API_URL
              : PRODUCTION_API_URL
          }/api/auth/login/admin`,
          {
            method: "POST",
            parseResponse: JSON.parse,
            responseType: "json",
            body: {
              email: getValues("email"),
              password: getValues("password"),
            },
          }
        );

        if (response.statusCode === 200) {
          localStorage.setItem("token-admin", response.token);
          setIsWrongAdminData(false);

          setIsAdmin(true);

          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          setIsWrongAdminData(true);
        }
      } catch (err) {
        throw new Error("Failed to fetch data!");
      }
    }

    login();
  }

  return (
    <m.div
      transition={{ duration: 0.4 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex justify-start min-h-svh items-start w-full"
    >
      <div className="hidden md:block fixed left-0 top-0 md:w-1/2 min-h-svh bg-cover bg-center bg-no-repeat bg-login-side-image"></div>
      <div className="flex justify-end items-center w-full">
        <div className="w-full md:w-1/2 flex justify-center items-center min-h-svh px-6 xl:px-16">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-20 xl:px-9 w-full"
          >
            <Heading as="h1">Selamat Datang</Heading>
            <div className="mt-12 flex w-full justify-center items-center flex-col">
              <div className="flex justify-start items-center space-y-6 flex-col w-full">
                <div className="w-full space-y-5">
                  <div className="w-full">
                    <label htmlFor="email">Email*</label>
                    <Input
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="Masukkan email"
                      name="email"
                      className="mt-2 border-spanish-gray rounded-full px-6 py-7"
                    />
                    <Paragraph className="font-medium mt-2 text-xs">
                      {errors.email?.message}
                    </Paragraph>
                  </div>
                  <div className="w-full">
                    <label htmlFor="password">Password*</label>
                    <Input
                      type="password"
                      {...register("password", { required: true })}
                      placeholder="Masukkan password"
                      name="password"
                      className="mt-2 border-spanish-gray rounded-full px-6 py-7"
                    />
                    <Paragraph className="font-medium mt-2 text-xs">
                      {errors.password?.message}
                    </Paragraph>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex w-full justify-start space-x-2 items-center">
                    <input type="checkbox" name="ingatkan-saya" id="" />
                    <Paragraph className="text-xs">Ingatkan saya</Paragraph>
                  </div>
                  <CustomLink
                    to="/auth/login/admin"
                    className="text-xs w-full flex justify-end items-center"
                  >
                    Lupa Password?
                  </CustomLink>
                </div>
              </div>
              <div className="flex my-10 flex-col justify-center items-center w-full">
                <Button className="text-black bg-secondary-color hover:bg-secondary-color/90 rounded-3xl w-72 px-4 py-7">
                  <Paragraph>Masuk</Paragraph>
                </Button>
                {isWrongAdminData ? (
                  <Paragraph className="font-medium text-red-500 text-center mt-5">
                    Username atau password yang kamu masukkan salah! Silahkan
                    coba lagi.
                  </Paragraph>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    </m.div>
  );
}
