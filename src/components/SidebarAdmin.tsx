import { useTitle } from "@/hooks";
import { cn } from "@/lib/utils/cn";
import { sidebarLinksList } from "@/lib/utils/data";
import { LogOut, Menu } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import Image from "./ui/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Heading, Paragraph } from "./ui/typography";
import Cookies from "js-cookie";

export default function SidebarAdmin() {
  const location = useLocation();
  const navigate = useNavigate();

  useTitle("Dashboard | Taritme");

  function logout() {
    Cookies.remove("token-admin");
    navigate("/auth/login/admin");
  }

  return (
    <nav className="lg:fixed sticky z-50 bg-white w-full lg:max-w-[359px] left-0 lg:min-h-svh flex justify-between flex-col items-start top-0 drop-shadow-lg">
      <div className="w-full flex flex-col justify-center items-center p-4 lg:p-8">
        <div className="w-full lg:flex-col flex justify-between lg:justify-center items-center">
          <Image
            src="/images/logo.svg"
            alt="logo"
            draggable={false}
            className="w-32 lg:w-full hidden lg:block"
          />
          <div className="lg:hidden block w-fit">
            <Sheet>
              <SheetTrigger>
                <Button variant="outline">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="mt-4 space-y-6 flex flex-col justify-center">
                  {sidebarLinksList.map((item) => (
                    <Link to={item.pathname} key={item.id}>
                      <Button
                        className={cn(
                          "py-6 bg-transparent text-primary-black hover:text-white hover:bg-primary-color w-full rounded-full text-base lg:text-2xl font-medium",
                          location.pathname === item.pathname
                            ? "bg-primary-color text-white"
                            : ""
                        )}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="lg:mt-6 lg:w-full">
            <div className="flex lg:border-b-2 lg:border-primary-black space-x-3 lg:space-x-0 lg:p-2 lg:flex-col justify-center items-center">
              <Image
                src="/images/admin-icon.svg"
                alt="admin icon"
                className="w-10 h-10"
              />
              <Heading as="h2" className="mt-2 text-base lg:text-2xl">
                Admin
              </Heading>
            </div>
            <ul className="w-full hidden lg:block space-y-6 py-8">
              {sidebarLinksList.map((item) => (
                <li key={item.id}>
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
      <button
        onClick={logout}
        className="bg-secondary-color w-full cursor-pointer hidden lg:flex justify-between items-center p-4"
      >
        <Paragraph className="text-white text-2xl font-medium">
          Keluar
        </Paragraph>
        <LogOut className="text-white" />
      </button>
    </nav>
  );
}
