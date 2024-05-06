import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CustomLink, Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";

export default function Login() {
  useTitle("Login | Taritme");

  return (
    <div className="flex justify-start items-start w-full">
      <div className="min-h-svh w-1/2 bg-center hidden md:block bg-full bg-no-repeat bg-login-side-image"></div>
      <div className="min-h-svh w-1/2 py-12 px-16">
        <button
          type="button"
          aria-label="kembali"
          className="flex justify-center items-center space-x-2"
        >
          <img src="/images/arrow-back-icon.svg" alt="arrow back" />
          <span>Kembali</span>
        </button>
        <form className="mt-24 px-9 w-full">
          <Heading as="h1">Selamat Datang</Heading>
          <div className="mt-14 flex w-full justify-center items-center flex-col">
            <div className="flex justify-start items-center space-y-6 flex-col w-full">
              <div className="w-full space-y-5">
                <div className="w-full">
                  <label htmlFor="email">Email*</label>
                  <Input
                    placeholder="Masukkan email"
                    name="email"
                    className="mt-2 rounded-full px-6 py-7"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="password">Password*</label>
                  <Input
                    placeholder="Masukkan password"
                    name="password"
                    className="mt-2 rounded-full px-6 py-7"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex w-full justify-start space-x-2 items-center">
                  <input type="checkbox" name="ingatkan-saya" id="" />
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
              <Button className="bg-[#E1B83B] text-black rounded-3xl w-64 py-7">
                <Paragraph>Masuk</Paragraph>
              </Button>
              <div className="my-5 flex justify-center items-center w-full space-x-3 px-3">
                <div className="w-full h-[1px] bg-primary-black/20"></div>
                <span className="text-primary-black/20">Atau</span>
                <div className="w-full h-[1px] bg-primary-black/20"></div>
              </div>
              <Button
                variant="outline"
                className="flex justify-center w-64 py-7 rounded-3xl items-center space-x-2 border-spanish-gray"
              >
                <img src="/images/google-icon.svg" alt="google icon" />
                <Paragraph>Masuk dengan Google</Paragraph>
              </Button>
            </div>
            <Paragraph className="text-sm">
              Sudah memiliki akun?{" "}
              <CustomLink to="/registration">Masuk</CustomLink>
            </Paragraph>
          </div>
        </form>
      </div>
    </div>
  );
}
