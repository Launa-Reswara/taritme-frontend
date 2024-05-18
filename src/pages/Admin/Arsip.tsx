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
import { Textarea } from "@/components/ui/textarea";
import { useTitle } from "@/hooks";
import { pelatihList } from "@/lib/utils/data";
import { m } from "framer-motion";
import { Pencil, Trash } from "lucide-react";

export default function Arsip() {
  useTitle("Arsip | Taritme");

  return (
    <>
      <SidebarAdmin />
      <m.main
        transition={{ duration: 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="border-2 lg:ml-[358px] min-h-svh flex justify-start p-4 lg:p-10 items-center flex-col"
      >
        <section className="flex w-full justify-center items-center">
          <div className="w-full">
            <button
              className="text-primary-black text-2xl"
              type="button"
              aria-label="tambah arsip"
            >
              + Tambah Arsip
            </button>
            <Table className="w-full mt-10">
              <TableHeader>
                <TableRow className="bg-primary-color hover:bg-primary-color">
                  <TableHead className="text-center text-white">
                    Tanggal
                  </TableHead>
                  <TableHead className="text-center text-white">
                    Penulis
                  </TableHead>
                  <TableHead className="text-center text-white">
                    Judul
                  </TableHead>
                  <TableHead className="text-center text-white">Isi</TableHead>
                  <TableHead className="text-center text-white">Foto</TableHead>
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
                      <Button variant="outline">
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
      <TambahArsip />
    </>
  );
}

function TambahArsip() {
  return (
    <div className="flex justify-center items-center p-4 fixed inset-0 z-50 backdrop-blur-lg min-h-svh">
      <div className="w-full sm:w-[800px] sm:h-[800px] max-w-[600px] overflow-hidden rounded-lg bg-white drop-shadow-lg p-6 sm:p-8">
        <form className="space-y-10">
          <div className="flex items-center">
            <label
              htmlFor="tanggal"
              className="block font-normal text-primary-black"
            >
              Tanggal
            </label>
            <Input
              type="date"
              placeholder="DD/MM/YYYY"
              className="border-spanish-gray w-full sm:max-w-[250px] rounded-full p-2"
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="penulis"
              className="block font-normal text-primary-black"
            >
              Penulis
            </label>
            <Input
              type="text"
              placeholder="Penulis"
              className="border-spanish-gray w-full sm:max-w-[250px] rounded-full p-2"
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="judul"
              className="block font-normal text-primary-black"
            >
              Judul
            </label>
            <Input
              type="text"
              placeholder="Judul"
              className="border-spanish-gray w-full sm:max-w-[250px] rounded-full p-2"
            />
          </div>
          <div className="flex items-start">
            <label
              htmlFor="isi"
              className="block font-normal text-primary-black"
            >
              Isi
            </label>
            <Textarea
              name="isi"
              placeholder="Isi"
              className="border-spanish-gray w-full rounded-2xl p-4"
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="foto"
              className="block font-normal text-primary-black"
            >
              Foto
            </label>
            <Input
              type="file"
              placeholder="Unggah Foto"
              className="border-spanish-gray w-full sm:max-w-[250px] rounded-full p-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
