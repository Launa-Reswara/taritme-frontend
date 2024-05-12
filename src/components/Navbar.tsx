import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils/cn";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { CustomLink } from "./ui/typography";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    // Check screen size on mount and resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950); // Adjust this breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]);

  return (
    <header className="dark:bg-primary-black/80 backdrop-blur-lg bg-white/80 w-full flex justify-center items-center">
      <nav className="max-w-[1440px] w-full px-4 py-3 justify-between flex items-center">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        {/* tampilan mobile */}
        {isMobile ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <CustomLink
                  to="/temukan-pelatih"
                  className="text-primary-black"
                >
                  Temukan Pelatih
                </CustomLink>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CustomLink to="/arsip-kesenian" className="text-primary-black">
                  Arsip Kesenian
                </CustomLink>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CustomLink to="/komunitas" className="text-primary-black">
                  Komunitas
                </CustomLink>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CustomLink to="/auth/login" className="text-primary-black">
                  Masuk
                </CustomLink>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          //untuk tampilan web
          <>
            <ul className="flex justify-center items-center space-x-12">
              <li>
                <CustomLink
                  to="/temukan-pelatih"
                  className={cn(
                    "dark:text-white text-primary-black font-medium px-4 py-2 transition-colors duration-300 hover:bg-primary-color hover:text-white hover:rounded-lg",
                    location.pathname.includes("/temukan-pelatih")
                      ? "bg-primary-color text-white rounded-lg"
                      : ""
                  )}
                  style={{ borderRadius: "20px" }}
                >
                  Temukan Pelatih
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/arsip-kesenian"
                  className={cn(
                    "dark:text-white text-primary-black font-medium px-4 py-2 transition-colors duration-300 hover:bg-primary-color hover:text-white hover:rounded-lg",
                    location.pathname.includes("/arsip-kesenian")
                      ? "bg-primary-color text-white rounded-lg"
                      : ""
                  )}
                  style={{ borderRadius: "20px" }}
                >
                  Arsip Kesenian
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/komunitas"
                  className={cn(
                    "dark:text-white text-primary-black font-medium px-4 py-2 transition-colors duration-300 hover:bg-primary-color hover:text-white hover:rounded-lg",
                    location.pathname === "/komunitas"
                      ? "bg-primary-color text-white rounded-lg"
                      : ""
                  )}
                  style={{ borderRadius: "20px" }}
                >
                  Komunitas
                </CustomLink>
              </li>
            </ul>
            <div>
              <Button variant="outline">
                <CustomLink
                  to="/auth/login"
                  className="text-primary-color dark:text-secondary-color font-medium"
                >
                  Masuk
                </CustomLink>
              </Button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
