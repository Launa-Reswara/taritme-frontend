import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CustomLink, Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { m } from "framer-motion";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();

  useTitle("Registration | Taritme");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <m.div
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      className="flex justify-start min-h-svh items-start w-full"
    >
      <div className="w-full md:w-1/2 py-10 px-6 xl:px-16">
        <CustomLink to="" className="text-black">
          <button
            type="button"
            aria-label="kembali"
            className="flex justify-center items-center space-x-2"
            onClick={() => navigate(-1)}
          >
            <img src="/images/arrow-back-icon.svg" alt="arrow back" />
            <span className="xl:text-2xl">Kembali</span>
          </button>
        </CustomLink>
        <form onSubmit={handleSubmit} className="mt-20 xl:px-9 w-full">
          <Heading as="h1">Buat Akun!</Heading>
          <div className="mt-12 flex w-full justify-center items-center flex-col">
            <div className="flex justify-start items-center space-y-6 flex-col w-full">
              <div className="w-full space-y-5">
                <div className="w-full">
                  <label htmlFor="nama-lengkap">
                    <Paragraph>Nama Lengkap*</Paragraph>
                  </label>
                  <Input
                    required
                    placeholder="Masukkan nama"
                    name="nama-lengkap"
                    className="mt-2 rounded-full px-6 py-7 border-spanish-gray"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="email">
                    <Paragraph>Email*</Paragraph>
                  </label>
                  <Input
                    required
                    placeholder="Masukkan email"
                    name="email"
                    className="mt-2 rounded-full px-6 py-7 border-spanish-gray"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="password">
                    <Paragraph>Password*</Paragraph>
                  </label>
                  <Input
                    required
                    placeholder="Masukkan password"
                    name="password"
                    className="mt-2 rounded-full px-6 py-7 border-spanish-gray"
                  />
                </div>
              </div>
              <div className="flex justify-start items-center w-full">
                <div className="flex w-full justify-start space-x-2 items-center">
                  <input type="checkbox" name="ingatkan-saya" id="" required />
                  <Paragraph className="text-xs">
                    I agree to the terms of service and privacy and policy
                  </Paragraph>
                </div>
              </div>
            </div>
            <div className="flex my-10 flex-col justify-center items-center w-full">
              <Button
                type="submit"
                className="bg-secondary-color text-black hover:bg-secondary-color/90 rounded-3xl w-72 px-4 py-7"
              >
                <Paragraph>Daftar</Paragraph>
              </Button>
              <div className="my-5 flex justify-center items-center w-full space-x-3 px-3">
                <div className="w-full h-[1px] bg-primary-black/20"></div>
                <span className="text-primary-black/20">Atau</span>
                <div className="w-full h-[1px] bg-primary-black/20"></div>
              </div>
              <Button
                variant="outline"
                className="flex justify-center w-72 px-4 py-7 rounded-3xl items-center space-x-2 border-spanish-gray"
              >
                <img src="/images/google-icon.svg" alt="google icon" />
                <Paragraph>Daftar dengan Google</Paragraph>
              </Button>
            </div>
            <Paragraph className="text-sm">
              Sudah memiliki akun?{" "}
              <CustomLink to="/auth/login">Masuk</CustomLink>
            </Paragraph>
          </div>
        </form>
      </div>
      <div className="hidden md:block fixed right-0 top-0 md:w-1/2 min-h-svh bg-cover bg-center bg-no-repeat bg-registration-side-image" />
    </m.div>
  );
}
