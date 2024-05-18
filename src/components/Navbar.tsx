import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils/cn";
import { Menu } from "lucide-react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { CustomLink } from "./ui/typography";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="dark:bg-primary-black/80 backdrop-blur-lg bg-white/80 w-full flex justify-center items-center">
      <nav className="max-w-[1440px] w-full px-4 py-3 justify-between flex items-center">
        <Link to="/">
          <img
            src="/images/logo.svg"
            alt="logo"
            className="w-36 lg:w-full"
            draggable={false}
          />
        </Link>
        {/* tampilan mobile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="block lg:hidden">
            <Button variant="outline">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuItem>
              <CustomLink
                to="/temukan-pelatih"
                className={cn(
                  "text-primary-black font-medium",
                  location.pathname.includes("/temukan-pelatih")
                    ? "font-bold"
                    : ""
                )}
              >
                Temukan Pelatih
              </CustomLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CustomLink
                to="/arsip-kesenian"
                className={cn(
                  "text-primary-black font-medium",
                  location.pathname.includes("/arsip-kesenian")
                    ? "font-bold"
                    : ""
                )}
              >
                Arsip Kesenian
              </CustomLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CustomLink
                to="/komunitas"
                className={cn(
                  "text-primary-black font-medium",
                  location.pathname === "/komunitas" ? "font-bold" : ""
                )}
              >
                Komunitas
              </CustomLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CustomLink
                to="/auth/login"
                className={cn(
                  "text-primary-black font-medium",
                  location.pathname === "/auth/login" ? "font-bold" : ""
                )}
              >
                Masuk
              </CustomLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* tampilan desktop */}
        <ul className="lg:flex justify-center hidden items-center space-x-12">
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
        <CustomLink to="/auth/login" className="hidden lg:block">
          <Button
            variant="outline"
            className="text-primary-color dark:text-secondary-color font-medium"
          >
            Masuk
          </Button>
        </CustomLink>
      </nav>
    </header>
  );
}
