import { useState, useEffect } from 'react';
import { CustomLink } from "./ui/typography";
import { Menu } from 'lucide-react';
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuShortcut,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size on mount and resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="dark:bg-primary-black/80 backdrop-blur-lg bg-white/80 w-full flex justify-center items-center">
      <nav className="max-w-7xl w-full px-4 py-5 justify-between flex items-center">
        <div>
          <img src="/images/logo.svg" alt="logo" />
        </div>
        {/* tampilan mobile */}
        {isMobile ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
             <Button variant= "outline">
              <Menu/>
             </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <CustomLink to="/" className="dark:text-white">
                  Temukan Pelatih
                </CustomLink>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CustomLink to="/arsip-kesenian" className="dark:text-white">
                  Arsip Kesenian
                </CustomLink>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CustomLink to="/komunitas" className="dark:text-white">
                  Komunitas
                </CustomLink>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CustomLink to="" className="dark:text-white">
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
                    to="/"
                    className="dark:text-white text-primary-black font-medium px-4 py-2 transition-colors duration-300 hover:bg-red-800 hover:text-white hover:rounded-lg"
                    style={{ borderRadius: '20px' }}
                  >
                    Temukan Pelatih
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    to="/arsip-kesenian"
                    className="dark:text-white text-primary-black font-medium px-4 py-2 transition-colors duration-300 hover:bg-red-800 hover:text-white hover:rounded-lg"
                    style={{ borderRadius: '20px' }}
                  >
                    Arsip Kesenian
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    to="/komunitas"
                    className="dark:text-white text-primary-black font-medium px-4 py-2 transition-colors duration-300 hover:bg-red-800 hover:text-white hover:rounded-lg"
                    style={{ borderRadius: '20px' }}
                  >
                    Komunitas
                  </CustomLink>
                </li>
              </ul>
              <div>
                <Button variant= "outline">
                  <CustomLink
                    to=""
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
