import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CustomLink, Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { loginAdminSchema } from "@/lib/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { m } from "framer-motion";
import { useForm } from "react-hook-form";

export default function LoginAdmin() {
  useTitle("Login Admin | Taritme");

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginAdminSchema),
  });

  // WIP: auth
  function onSubmit() {
    /*navigate("/admin");

    getValues("email");
    getValues("password");*/
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
                      {...register("email")}
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </m.div>
  );
}
