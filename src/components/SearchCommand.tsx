import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { PelatihProps } from "@/types";
import { CommandDialog } from "cmdk";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";
import Image from "./ui/image";

type SearchCommandProps = {
  data: PelatihProps[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SearchCommand({
  data,
  open,
  setOpen,
}: SearchCommandProps) {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.ctrlKey) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  const initialData = open ? data : [];

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Cari Pelatih...." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Results">
          {initialData.map((item) => (
            <Link to={slugify(item.name, { lower: true })} key={item.id}>
              <CommandItem>
                <Image
                  src={item.image}
                  alt={item.name}
                  className="mr-2 h-4 w-4"
                />
                <span>{item.name}</span>
              </CommandItem>
            </Link>
          ))}
        </CommandGroup>
        <CommandSeparator />
      </CommandList>
    </CommandDialog>
  );
}
