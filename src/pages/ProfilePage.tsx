import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { getLastPathname } from "@/lib/helpers";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const location = useLocation();
  const navigate = useNavigate();
  useTitle(`${getLastPathname(location.pathname)} | Taritme`);

  return (
    <Layout>
      <div className="flex justify-between items-center mb-8">
        <button
          type="button"
          aria-label="kembali"
          className="flex justify-center items-center space-x-2"
          onClick={() => navigate(-1)}
        >
          <img src="/images/arrow-back-icon.svg" alt="arrow back" />
          <span className="xl:text-2xl">Kembali</span>
        </button>
      </div>
      <div className="mt-5">
        <Heading
          as="h2"
          className="font-normal mb-2 text-primary-color"
          style={{ fontSize: "1.5rem" }}
        >
          Profile
        </Heading>
      </div>
      <header className="mt-5 relative bg-primary-color rounded-t-lg h-36 w-full" style={{ borderTopLeftRadius: "1.3rem", borderTopRightRadius: "1.3rem" }}>
        <div className="absolute bottom-[-3rem] left-6">
          <img
            className="h-20 w-20 rounded-full border-4 border-white"
            src="https://via.placeholder.com/150"
            alt="User avatar"
          />
        </div>
      </header>
      <div className="ml-28 p-2">
          <Paragraph className="text-lg font-medium">Yujin anh</Paragraph>
        </div>

      <div className="mt-5 relative  w-full">
      <form className="grid grid-cols-1 gap-6" style={{ padding: "0 2rem" }}>
          <div className="flex items-center w-full justify-end ">
            {" "}
            <label
              htmlFor="nama"
              className="block text-lg font-medium text-black w-1/3"
            >
              Nama
            </label>
            <Input
              type="text"
              placeholder="Nama Anda"
              className="mt-1 w-2/3 border border-spanish-gray rounded-full p-6"
            />
          </div>
          <div className="flex items-center w-full justify-end">
            {" "}
            <label
              htmlFor="alamat"
              className="block text-lg font-medium text-black w-1/3"
            >
              Email
            </label>
            <Input
              type="text"
              placeholder="Email Anda"
              className="mt-1 w-2/3 border border-spanish-gray rounded-full p-6"
            />
          </div>
          <div className="flex items-center w-full justify-end">
            {" "}
            <label
              htmlFor="email"
              className="block text-lg font-medium text-black w-1/3"
            >
              Nomor Telepon
            </label>
            <Input
              type="tel"
              placeholder="Nomor Telepon Anda"
              className="mt-1 w-2/3 border border-spanish-gray rounded-full p-6"
            />
          </div>
          <div className="flex items-center w-full justify-end">
            {" "}
            <label
              htmlFor="telepon"
              className="block text-lg font-medium text-black w-1/3"
            >
             Jenis Kelamin
            </label>
            <Input
              type="text"
              placeholder="Jenis Kelamin Anda"
              className="mt-1 w-2/3 border border-spanish-gray rounded-full p-6"
            />
          </div>
          <div className="flex items-center w-full justify-end">
            {" "}
            <label
              htmlFor="pekerjaan"
              className="block text-lg font-medium text-black w-1/3"
            >
              Umur
            </label>
            <Input
              type="number"
              placeholder="Umur anda"
              className="mt-1 w-2/3 border border-spanish-gray rounded-full p-6"
            />
          </div>
        </form>
      </div>

      <div className="mt-10 flex my-10 flex-col justify-center items-center w-full">
        <Button
          type="submit"
          className="text-black bg-secondary-color hover:bg-secondary-color/90 rounded-3xl w-72 px-4 py-7"
        >
          <Paragraph>Simpan</Paragraph>
        </Button>
      </div>
    </Layout>
  );
}
