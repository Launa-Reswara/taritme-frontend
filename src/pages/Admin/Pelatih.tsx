import SidebarAdmin from "@/components/SidebarAdmin";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { pelatihList } from "@/lib/utils/data";
import {
  setIsEditPelatih,
  setIsTambahPelatih,
} from "@/store/slices/pelatih.slice";
import { PelatihSliceProps } from "@/types";
import { m } from "framer-motion";
import { Pencil, Trash, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Pelatih() {
  const dispatch = useDispatch();
  const { isEditPelatih, isTambahPelatih } = useSelector(
    (state: PelatihSliceProps) => state.pelatih
  );

  useTitle("Pelatih | Taritme");

  return (
    <>
      <SidebarAdmin />
      <m.main
        transition={{ duration: 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="lg:ml-[358px] min-h-svh flex justify-start p-4 lg:p-10 items-center flex-col"
      >
        <section className="flex w-full justify-center items-center">
          <div className="w-full">
            <button
              className="text-primary-black text-2xl"
              type="button"
              aria-label="tambah pelatih"
              onClick={() => dispatch(setIsTambahPelatih(true))}
            >
              + Tambah Pelatih
            </button>
            <Table className="w-full mt-10">
              <TableHeader>
                <TableRow className="bg-primary-color hover:bg-primary-color">
                  <TableHead className="text-center text-white">Foto</TableHead>
                  <TableHead className="text-center text-white">Nama</TableHead>
                  <TableHead className="text-center text-white">
                    No HP
                  </TableHead>
                  <TableHead className="text-center text-white">
                    Email
                  </TableHead>
                  <TableHead className="text-center text-white">
                    Status
                  </TableHead>
                  <TableHead className="text-center text-white">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pelatihList.map((item) => (
                  <TableRow
                    key={item.id}
                    className="bg-secondary-color hover:bg-secondary-color hover:odd:bg-light-silver odd:bg-light-silver"
                  >
                    <TableCell className="text-center flex justify-center items-center">
                      <Image
                        src={item.foto}
                        alt={item.nama}
                        className="w-10 h-10"
                      />
                    </TableCell>
                    <TableCell className="text-center">{item.nama}</TableCell>
                    <TableCell className="text-center">{item.nohp}</TableCell>
                    <TableCell className="text-center">{item.email}</TableCell>
                    <TableCell className="text-center">{item.status}</TableCell>
                    <TableCell className="flex justify-center items-center space-x-4">
                      <Button
                        variant="outline"
                        onClick={() => dispatch(setIsEditPelatih(true))}
                      >
                        <Pencil />
                      </Button>
                      <Button variant="outline">
                        <Trash />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </m.main>
      {isTambahPelatih ? <FormTambahPelatih /> : null}
      {isEditPelatih ? <FormEditpelatih /> : null}
    </>
  );
}

function FormEditpelatih() {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center p-4 fixed inset-0 z-50 backdrop-blur-lg min-h-svh">
      <div className="w-full sm:w-[800px] sm:h-[800px] max-w-[600px] overflow-hidden rounded-lg bg-white drop-shadow-lg p-6 sm:p-8">
        <form className="mt-5 w-full">
          <div className="flex justify-between items-center">
            <Heading as="h1" className="text-primary-color sm:mx-12">
              Edit Pelatih
            </Heading>
            <Button
              size="icon"
              className="rounded-full bg-light-silver"
              variant="secondary"
              onClick={() => dispatch(setIsEditPelatih(false))}
            >
              <X />
            </Button>
          </div>
          <div className="mt-12 flex justify-center items-center flex-col">
            <div className="flex justify-start items-center space-y-6 flex-col w-full">
              <div className="w-full space-y-5 mt-5">
                <div className="w-full sm:mx-12">
                  <label
                    htmlFor="foto"
                    className="block font-normal text-primary-black"
                  >
                    Foto
                  </label>
                  <Input
                    placeholder="Unggah foto"
                    type="file"
                    name="foto"
                    className="mt-2 border-spanish-gray w-full sm:max-w-[250px] rounded-full p-2"
                  />
                </div>

                <div className="w-full sm:mx-12">
                  <label
                    htmlFor="nama"
                    className="block font-normal text-primary-black"
                  >
                    Nama
                  </label>
                  <Input
                    type="text"
                    placeholder="Nama anda"
                    name="nama"
                    className="mt-2 border-spanish-gray w-full sm:w-[420px] rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                    required
                  />
                </div>

                <div className="w-full sm:mx-12">
                  <label
                    htmlFor="hp"
                    className="block font-normal text-primary-black"
                  >
                    No Hp
                  </label>
                  <Input
                    type="tel"
                    placeholder="No HP anda"
                    name="hp"
                    className="mt-2 border-spanish-gray w-full sm:w-[420px] rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                    required
                  />
                </div>

                <div className="w-full sm:mx-12">
                  <label
                    htmlFor="email"
                    className="block font-normal text-primary-black"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Email anda"
                    name="email"
                    className="mt-2 border-spanish-gray w-full sm:w-[420px] rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                    required
                  />
                </div>

                <div className="w-full sm:mx-12">
                  <label
                    htmlFor="status"
                    className="block font-normal text-primary-black"
                  >
                    Status
                  </label>
                  <select
                    className="mt-1 w-full border sm:w-[420px] border-spanish-gray rounded-full p-2 focus:ring-indigo-500 focus:border-indigo-500"
                    defaultValue=""
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
                  <Paragraph>Edit</Paragraph>
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormTambahPelatih() {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center p-4 fixed inset-0 z-50 backdrop-blur-lg min-h-svh">
      <div className="w-full sm:w-[800px] sm:h-[800px] max-w-[600px] overflow-hidden rounded-lg bg-white drop-shadow-lg p-6 sm:p-8">
        <form className="mt-5 w-full">
          <div className="flex justify-between items-center">
            <Heading as="h1" className="text-primary-color sm:mx-12">
              Tambah Pelatih
            </Heading>
            <Button
              size="icon"
              className="rounded-full bg-light-silver"
              variant="secondary"
              onClick={() => dispatch(setIsTambahPelatih(false))}
            >
              <X />
            </Button>
          </div>
          <div className="mt-12 flex justify-center items-center flex-col">
            <div className="flex justify-start items-center space-y-6 flex-col w-full">
              <div className="w-full space-y-5 mt-5">
                <div className="w-full sm:mx-12">
                  <label
                    htmlFor="foto"
                    className="block font-normal text-primary-black"
                  >
                    Foto
                  </label>
                  <Input
                    placeholder="Unggah foto"
                    type="file"
                    name="foto"
                    className="mt-2 border-spanish-gray w-full sm:max-w-[250px] rounded-full p-2"
                  />
                </div>

                <div className="w-full sm:mx-12">
                  <label
                    htmlFor="nama"
                    className="block font-normal text-primary-black"
                  >
                    Nama
                  </label>
                  <Input
                    type="text"
                    placeholder="Nama anda"
                    name="nama"
                    className="mt-2 border-spanish-gray w-full sm:w-[420px] rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                    required
                  />
                </div>

                <div className="w-full sm:mx-12">
                  <label
                    htmlFor="hp"
                    className="block font-normal text-primary-black"
                  >
                    No Hp
                  </label>
                  <Input
                    type="tel"
                    placeholder="No HP anda"
                    name="hp"
                    className="mt-2 border-spanish-gray w-full sm:w-[420px] rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                    required
                  />
                </div>

                <div className="w-full sm:mx-12">
                  <label
                    htmlFor="email"
                    className="block font-normal text-primary-black"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Email anda"
                    name="email"
                    className="mt-2 border-spanish-gray w-full sm:w-[420px] rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                    required
                  />
                </div>

                <div className="w-full sm:mx-12">
                  <label
                    htmlFor="status"
                    className="block font-normal text-primary-black"
                  >
                    Status
                  </label>
                  <select
                    className="mt-1 w-full border sm:w-[420px] border-spanish-gray rounded-full p-2 focus:ring-indigo-500 focus:border-indigo-500"
                    defaultValue=""
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
