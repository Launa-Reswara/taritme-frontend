import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CustomLink, Heading, Paragraph } from "@/components/ui/typography";
import { useToast } from "@/components/ui/use-toast";
import { useTitle } from "@/hooks";
import {
  CONDITION,
  DEVELOPMENT_API_URL,
  PRODUCTION_API_URL,
} from "@/lib/utils/constants";
import { loginSchema } from "@/lib/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosResponse } from "axios";
import { m } from "framer-motion";
import Cookies from "js-cookie";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isWrongLoginData, setIsWrongLoginData] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>("");
  const [isHidePassword, setIsHidePassword] = useState<boolean>(true);

  const { toast } = useToast();

  const navigate = useNavigate();

  useTitle("Login | Taritme");

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
  });

  // Auth logic
  function onSubmit() {
    async function login(): Promise<void> {
      try {
        const response: AxiosResponse = await axios.post(
          `${
            CONDITION === "development"
              ? DEVELOPMENT_API_URL
              : PRODUCTION_API_URL
          }/api/v1/auth/login`,
          {
            email: getValues("email"),
            password: getValues("password"),
          }
        );

        if (response.status === 200) {
          Cookies.set("token", response.data.token);
          setIsWrongLoginData(false);

          toast({
            title: "Success!",
            description: response.data.message,
          });

          setTimeout(() => {
            window.location.replace("/");
          }, 2000);
        } else {
          toast({
            title: "Failed!",
            description: response.data.message,
          });
          setErrMessage(response.data.message);
          setIsWrongLoginData(true);
        }
      } catch (err: any) {
        setIsWrongLoginData(true);
        setErrMessage(err.response.data.message);
        toast({ title: "Error!", description: err.response.data.message });
      }
    }

    login();
  }

  return (
    <>
      <m.div
        transition={{ duration: 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex justify-start min-h-svh items-start w-full"
      >
        <div
          className="hidden md:block fixed left-0 top-0 md:w-1/2 min-h-svh bg-cover bg-center bg-no-repeat bg-login-side-image"
          data-cy="bg-login-side-image"
        ></div>
        <div className="flex justify-end items-center w-full">
          <div className="w-full md:w-1/2 py-10 px-6 xl:px-16">
            <button
              type="button"
              aria-label="kembali"
              className="flex justify-center items-center space-x-2"
              onClick={() => navigate(-1)}
            >
              <img src="/images/arrow-back-icon.svg" alt="arrow back" />
              <span className="xl:text-2xl">Kembali</span>
            </button>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-20 xl:px-9 w-full"
              data-cy="form-login-account"
            >
              <Heading as="h1" data-cy="title">
                Selamat Datang
              </Heading>
              <div className="mt-12 flex w-full justify-center items-center flex-col">
                <div className="flex justify-start items-center space-y-6 flex-col w-full">
                  <div className="w-full space-y-5">
                    <div className="w-full">
                      <label htmlFor="email">Email*</label>
                      <Input
                        placeholder="Masukkan email"
                        className="mt-2 border-spanish-gray rounded-full px-6 py-7"
                        type="text"
                        {...register("email", { required: true })}
                        data-cy="input-email"
                      />
                      <Paragraph className="font-medium mt-2 text-xs">
                        {errors.email?.message}
                      </Paragraph>
                    </div>
                    <div className="w-full">
                      <label htmlFor="password">Password*</label>
                      <div className="relative mt-2 flex justify-center items-center">
                        <Input
                          placeholder="Masukkan password"
                          type={isHidePassword ? "password" : "text"}
                          className="border-spanish-gray rounded-full px-6 py-7"
                          {...register("password", { required: true })}
                          data-cy="input-password"
                        />
                        <button
                          type="button"
                          className="absolute right-4 text-spanish-gray"
                          onClick={() => setIsHidePassword(!isHidePassword)}
                        >
                          {isHidePassword ? (
                            <EyeOff size={26} />
                          ) : (
                            <Eye size={26} />
                          )}
                        </button>
                      </div>
                      <Paragraph className="font-medium mt-2 text-xs">
                        {errors.password?.message}
                      </Paragraph>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex w-full justify-start space-x-2 items-center">
                      <input
                        type="checkbox"
                        name="ingatkan-saya"
                        data-cy="checkbox-ingatkan-saya"
                      />
                      <Paragraph className="text-xs">Ingatkan saya</Paragraph>
                    </div>
                    <div className="w-full text-end">
                      <CustomLink to="/lupa-password" className="text-xs">
                        Lupa Password?
                      </CustomLink>
                    </div>
                  </div>
                </div>
                <div className="flex my-10 flex-col justify-center items-center w-full">
                  <Button
                    className="text-primary-black bg-secondary-color hover:bg-secondary-color/90 rounded-3xl w-72 px-4 py-7"
                    type="submit"
                    data-cy="button-masuk"
                  >
                    <Paragraph>Masuk</Paragraph>
                  </Button>
                  <div className="my-5 flex justify-center items-center w-full space-x-3 px-3">
                    <div className="w-full h-[1px] bg-primary-black/20"></div>
                    <span className="text-primary-black/20">Atau</span>
                    <div className="w-full h-[1px] bg-primary-black/20"></div>
                  </div>
                  <Button
                    variant="outline"
                    className="flex justify-center px-4 w-72 py-7 rounded-3xl items-center space-x-2 border-spanish-gray"
                  >
                    <img src="/images/google-icon.svg" alt="google icon" />
                    <Paragraph>Masuk dengan Google</Paragraph>
                  </Button>
                  {isWrongLoginData ? (
                    <Paragraph className="font-medium text-red-500 text-center mt-5">
                      {errMessage}
                    </Paragraph>
                  ) : null}
                </div>
                <Paragraph className="text-sm">
                  Belum memiliki akun?{" "}
                  <CustomLink to="/auth/registration">
                    Daftar sekarang
                  </CustomLink>
                </Paragraph>
              </div>
            </form>
          </div>
        </div>
      </m.div>
    </>
  );
}
