import SidebarAdmin from "@/components/SidebarAdmin";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTitle } from "@/hooks";
import { pelatihList } from "@/lib/utils/data";
import { Pencil, Trash } from "lucide-react";

export default function Pelatih() {
  useTitle("Pelatih | Taritme");

  return (
    <>
      <SidebarAdmin />
      <main className="border-2 lg:ml-[358px] min-h-svh flex justify-start p-4 lg:p-10 items-center flex-col">
        <section className="flex w-full justify-center items-center">
          <div className="w-full">
            <button className="text-primary-black text-2xl">
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
      </main>
    </>
  );
}
