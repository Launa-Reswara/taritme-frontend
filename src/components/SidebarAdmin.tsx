import { cn } from "@/lib/utils/cn";
import { sidebarLinksList } from "@/lib/utils/data";
import { LogOut } from "lucide-react";
import { Button } from "react-day-picker";
import { Link } from "react-router-dom";
import Image from "./ui/image";
import { Heading, Paragraph } from "./ui/typography";

export default function SidebarAdmin() {
  return (
    <nav className="fixed z-50 bg-white w-full hidden max-w-[359px] border-2 left-0 min-h-screen lg:flex justify-between flex-col items-start top-0 drop-shadow-lg">
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
              {sidebarLinksList.map((item) => (
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
    </nav>
  );
}
