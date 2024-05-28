import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CustomLink, Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import {
  CONDITION,
  DEVELOPMENT_API_URL,
  PRODUCTION_API_URL,
} from "@/lib/utils/constants";
import { loginSchema } from "@/lib/utils/schemas";
import { setIsLoggedIn } from "@/store/slices/login.slice";
import { LoginSliceProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { m } from "framer-motion";
import { ofetch } from "ofetch";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isWrongLoginData, setIsWrongLoginData] = useState<boolean>(false);

  const { isLoggedIn } = useSelector((state: LoginSliceProps) => state.login);
  const dispatch = useDispatch();

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
    async function login() {
      try {
        const response = await ofetch(
          `${
            CONDITION === "development"
              ? DEVELOPMENT_API_URL
              : PRODUCTION_API_URL
          }/api/auth/login`,
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
          localStorage.setItem("token", response.token);
          setIsWrongLoginData(false);

          dispatch(setIsLoggedIn(true));

          setTimeout(() => {
            window.location.replace("/");
          }, 2000);
        } else {
          setIsWrongLoginData(true);
        }
      } catch (err) {
        throw new Error("Failed to fetch data!");
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
        <div className="hidden md:block fixed left-0 top-0 md:w-1/2 min-h-svh bg-cover bg-center bg-no-repeat bg-login-side-image"></div>
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
            >
              <Heading as="h1">Selamat Datang</Heading>
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
                      />
                      <Paragraph className="font-medium mt-2 text-xs">
                        {errors.email?.message}
                      </Paragraph>
                    </div>
                    <div className="w-full">
                      <label htmlFor="password">Password*</label>
                      <Input
                        placeholder="Masukkan password"
                        type="password"
                        className="mt-2 border-spanish-gray rounded-full px-6 py-7"
                        {...register("password", { required: true })}
                      />
                      <Paragraph className="font-medium mt-2 text-xs">
                        {errors.password?.message}
                      </Paragraph>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex w-full justify-start space-x-2 items-center">
                      <input type="checkbox" name="ingatkan-saya" />
                      <Paragraph className="text-xs">Ingatkan saya</Paragraph>
                    </div>
                    <CustomLink
                      to="/lupa-password"
                      className="text-xs w-full flex justify-end items-center"
                    >
                      Lupa Password?
                    </CustomLink>
                  </div>
                </div>
                <div className="flex my-10 flex-col justify-center items-center w-full">
                  <Button
                    className="text-primary-black bg-secondary-color hover:bg-secondary-color/90 rounded-3xl w-72 px-4 py-7"
                    type="submit"
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
                      Username atau password yang kamu masukkan salah! Silahkan
                      coba lagi.
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
      {isLoggedIn ? (
        <div className="flex justify-center backdrop-blur-lg fixed inset-0 items-center min-h-svh">
          <div className="bg-white rounded-xl p-4">
            <Paragraph className="font-medium">Login berhasil!</Paragraph>
          </div>
        </div>
      ) : null}
    </>
  );
}
