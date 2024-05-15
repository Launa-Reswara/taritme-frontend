import { Link } from "react-router-dom";
import { Heading, Paragraph } from "./ui/typography";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { X } from "lucide-react";

export default function Editpelatih() {
    return (
        <div className="flex justify-center items-center p-4 fixed inset-0 z-50 backdrop-blur-md min-h-svh">
        <div className="sm:w-[800px] sm:h-[800px] w-full max-w-[600px] overflow-hidden rounded-lg bg-white drop-shadow-lg p-6 sm:p-8">
          <div className="relative">
            <Button
              size="icon"
              className="absolute top-4 right-4 rounded-full bg-light-silver"
              variant="secondary"
            >
              <X />
            </Button>
          </div>
          <form className="mt-5 w-full">
            <Heading as="h1" className="text-primary-color mx-12">
              Edit Pelatih
            </Heading>
            <div className="mt-12 flex justify-center items-center flex-col">
              <div className="flex justify-start items-center space-y-6 flex-col w-full">
                <div className="w-full space-y-5 mt-5">
                  <div className="w-full mx-12">
                    <label htmlFor="foto" className="block font-semibold">
                      Foto
                    </label>
                    <Input
                      placeholder="Unggah foto"
                      type="file"
                      name="foto"
                      className="mt-2 border-spanish-gray rounded-full p-2"
                      style={{ maxWidth: "250px" }}
                    />
                  </div>
  
                  <div className="w-full mx-12">
                    <label htmlFor="nama" className="block font-semibold">
                      Nama
                    </label>
                    <Input
                      type="text"
                      placeholder="Nama anda"
                      name="nama"
                      className="mt-2 border-spanish-gray rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                      required
                      style={{ maxWidth: "420px" }}
                    />
                  </div>
  
                  <div className="w-full mx-12">
                    <label htmlFor="hp" className="block font-semibold">
                      No Hp
                    </label>
                    <Input
                      type="tel"
                      placeholder="No HP anda"
                      name="hp"
                      className="mt-2 border-spanish-gray rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                      required
                      style={{ maxWidth: "420px" }}
                    />
                  </div>
  
                  <div className="w-full mx-12">
                    <label htmlFor="email" className="block font-semibold">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Email anda"
                      name="email"
                      className="mt-2 border-spanish-gray rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                      required
                      style={{ maxWidth: "420px" }}
                    />
                  </div>
  
                  <div className="w-full mx-12">
                    <label htmlFor="status" className="block font-semibold">
                      Status
                    </label>
                    <select
                      className="mt-1 w-full border border-spanish-gray rounded-full p-2 focus:ring-indigo-500 focus:border-indigo-500"
                      defaultValue=""
                      style={{ maxWidth: "420px" }}
                    >
                      <option value="" disabled hidden>
                        Pilih Status
                      </option>
                      <option value="pekerja-lepas">Pekerja Lepas</option>
                      <option value="...">......</option>
                    </select>
                  </div>
                  
                </div>
              </div>
              <div className="flex mt-20 my-10 flex-col justify-center items-center w-full">
                <Link to={"/temukan-pelatih/:detail/ikuti-kursus"}>
                  <Button className="text-black bg-secondary-color hover:bg-secondary-color/90 rounded-3xl w-72 px-4 py-6">
                    <Paragraph>Tambahkan</Paragraph>
                  </Button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  