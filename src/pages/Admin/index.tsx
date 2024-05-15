import Image from "@/components/ui/image";
import { Paragraph } from "@/components/ui/typography";
import { LogOut } from "lucide-react";

export default function Admin() {
  return (
    <aside className="sticky top-0 drop-shadow-lg">
      <div>
        <Image src="/images/logo.svg" alt="logo" />
        <div>
          <div>
            <Image src="" alt="" />
          </div>
        </div>
        <ul>
          <li>Dashboard</li>
          <li>Pelatih</li>
          <li>Arsip</li>
        </ul>
      </div>
      <div>
        <Paragraph>Keluar</Paragraph>
        <LogOut />
      </div>
    </aside>
  );
}
