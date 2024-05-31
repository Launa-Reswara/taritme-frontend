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
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { arsipList } from "@/lib/utils/data";
import { setIsEditArsip, setIsTambahArsip } from "@/store/slices/arsip.slice";
import { ArsipSliceProps } from "@/types";
import { m } from "framer-motion";
import { Pencil, Trash, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Arsip() {
  const dispatch = useDispatch();
  const { isEditArsip, isTambahArsip } = useSelector(
    (state: ArsipSliceProps) => state.arsip
  );

  useTitle("Arsip | Taritme");

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
            <Link
              to="https://contentful.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-primary text-lg font-semibold underline underline-offset-2"
            >
              Go to Contentful to manage Arsip Kesenian content!
            </Link>
          </div>
        </section>
      </m.main>
      {isEditArsip ? <EditArsip /> : null}
      {isTambahArsip ? <TambahArsip /> : null}
    </>
  );
}

function TambahArsip() {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center p-4 fixed inset-0 z-50 backdrop-blur-lg min-h-svh">
      <div className="w-full sm:w-[800px] sm:h-[800px] max-w-[600px] overflow-hidden rounded-lg bg-white drop-shadow-lg p-6 sm:px-8 py-2">
        <form className="mt-5 w-full">
          <div className="flex justify-between items-center">
            <Heading as="h1" className="text-primary-color">
              Tambah Arsip
            </Heading>
            <Button
              size="icon"
              className="rounded-full bg-light-silver"
              variant="secondary"
              onClick={() => dispatch(setIsTambahArsip(false))}
            >
              <X />
            </Button>
          </div>
          <div className="mt-5 flex justify-center items-center flex-col">
            <div className="flex justify-start items-center space-y-6 flex-col w-full">
              <div className="w-full space-y-5 mt-5">
                <div className="w-full">
                  <label
                    htmlFor="tanggal"
                    className="block font-normal text-primary-black"
                  >
                    Tanggal
                  </label>
                  <Input
                    placeholder="Unggah foto"
                    type="date"
                    name="tanggal"
                    className="mt-2 border-spanish-gray w-full sm:max-w-[250px] rounded-full p-2"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="penulis"
                    className="block font-normal text-primary-black"
                  >
                    Penulis
                  </label>
                  <Input
                    type="text"
                    placeholder="Penulis"
                    name="penulis"
                    className="mt-2 border-spanish-gray w-full rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="judul"
                    className="block font-normal text-primary-black"
                  >
                    Judul
                  </label>
                  <Input
                    placeholder="Judul"
                    name="judul"
                    className="mt-2 border-spanish-gray w-full rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="isi"
                    className="block font-normal text-primary-black"
                  >
                    Isi
                  </label>
                  <Textarea
                    placeholder="Isi"
                    name="isi"
                    className="mt-2 h-[150px] border-spanish-gray w-full rounded-xl p-4 placeholder-pink-500 placeholder-opacity-75"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="foto"
                    className="block font-normal text-primary-black"
                  >
                    Foto
                  </label>
                  <Input
                    type="file"
                    placeholder="Unggah Foto"
                    name="foto"
                    className="mt-2 border-spanish-gray w-full rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-12 mb-10 flex-col justify-center items-center w-full">
              <Link to={"/temukan-pelatih/:detail/ikuti-kursus"}>
                <Button
                  type="submit"
                  className="text-black bg-secondary-color hover:bg-secondary-color/90 rounded-3xl w-72 px-4 py-6"
                >
                  <Paragraph>Edit Arsip</Paragraph>
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function EditArsip() {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center p-4 fixed inset-0 z-50 backdrop-blur-lg min-h-svh">
      <div className="w-full sm:w-[800px] sm:h-[800px] max-w-[600px] overflow-hidden rounded-lg bg-white drop-shadow-lg p-6 sm:p-8">
        <form className="mt-5 w-full">
          <div className="flex justify-between items-center">
            <Heading as="h1" className="text-primary-color">
              Edit Arsip
            </Heading>
            <Button
              size="icon"
              className="rounded-full bg-light-silver"
              variant="secondary"
              onClick={() => dispatch(setIsEditArsip(false))}
            >
              <X />
            </Button>
          </div>
          <div className="mt-12 flex justify-center items-center flex-col">
            <div className="flex justify-start items-center space-y-6 flex-col w-full">
              <div className="w-full space-y-5 mt-5">
                <div className="w-full">
                  <label
                    htmlFor="tanggal"
                    className="block font-normal text-primary-black"
                  >
                    Tanggal
                  </label>
                  <Input
                    placeholder="Unggah foto"
                    type="date"
                    name="tanggal"
                    className="mt-2 border-spanish-gray w-full sm:max-w-[250px] rounded-full p-2"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="penulis"
                    className="block font-normal text-primary-black"
                  >
                    Penulis
                  </label>
                  <Input
                    type="text"
                    placeholder="Penulis"
                    name="penulis"
                    className="mt-2 border-spanish-gray w-full rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="judul"
                    className="block font-normal text-primary-black"
                  >
                    Judul
                  </label>
                  <Input
                    placeholder="Judul"
                    name="judul"
                    className="mt-2 border-spanish-gray w-full rounded-full p-4 placeholder-pink-500 placeholder-opacity-75"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="isi"
                    className="block font-normal text-primary-black"
                  >
                    Isi
                  </label>
                  <Textarea
                    placeholder="Isi"
                    name="isi"
                    className="mt-2 h-[150px] border-spanish-gray w-full rounded-xl p-4 placeholder-pink-500 placeholder-opacity-75"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-20 my-10 flex-col justify-center items-center w-full">
              <Link to={"/temukan-pelatih/:detail/ikuti-kursus"}>
                <Button
                  type="submit"
                  className="text-black bg-secondary-color hover:bg-secondary-color/90 rounded-3xl w-72 px-4 py-6"
                >
                  <Paragraph>Edit Arsip</Paragraph>
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
