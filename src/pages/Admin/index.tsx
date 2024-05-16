import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { cn } from "@/lib/utils/cn";
import { LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const linksList = [
  {
    id: 1,
    name: "Dashboard",
    pathname: "/admin",
  },
  {
    id: 2,
    name: "Pelatih",
    pathname: "/admin/pelatih",
  },
  {
    id: 3,
    name: "Arsip",
    pathname: "/admin/arsip",
  },
];

export default function Admin() {
  const location = useLocation();

  return (
    <div className="w-full">
      <aside className="fixed z-50 bg-white w-full hidden max-w-[359px] border-2 left-0 min-h-screen lg:flex justify-between flex-col items-start top-0 drop-shadow-lg">
        <div className="w-full flex flex-col justify-center items-center p-8">
          <div className="w-full flex-col flex justify-center items-center">
            <Image src="/images/logo.svg" alt="logo" draggable={false} />
            <div className="mt-6 w-full">
              <div className="flex border-b-2 border-primary-black p-2 flex-col justify-center items-center">
                <Image src="/images/admin-icon.svg" alt="admin icon" />
                <Heading as="h2" className="mt-2">
                  Admin
                </Heading>
              </div>
              <ul className="w-full space-y-6 py-8">
                {linksList.map((item) => (
                  <li>
                    <Link to={item.pathname}>
                      <Button
                        className={cn(
                          "py-6 bg-transparent text-primary-black hover:text-white hover:bg-primary-color w-full rounded-full text-2xl font-medium",
                          location.pathname === item.pathname
                            ? "bg-primary-color text-white"
                            : ""
                        )}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          onClick={() => {}}
          className="bg-secondary-color w-full cursor-pointer flex justify-between items-center p-4"
        >
          <Paragraph className="text-white text-2xl font-medium">
            Keluar
          </Paragraph>
          <LogOut className="text-white" />
        </div>
      </aside>
      <div>
        <div>
          <span className="text-white font-bold text-2xl">10</span>
          <Paragraph>Pengguna</Paragraph>
        </div>
      </div>
    </div>
  );
}
