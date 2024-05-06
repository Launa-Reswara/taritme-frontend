import { CustomLink } from "./ui/typography";

export default function Navbar() {
  return (
    <header className="bg-primary-black w-full flex justify-center items-center">
      <nav className="max-w-7xl w-full justify-between flex items-center">
        <div>
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <ul className="flex justify-center items-center space-x-12">
          <li>
            <CustomLink to="/" className="text-white">
              Temukan Pelatih
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/" className="text-white">
              Arsip Kesenian
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/" className="text-white">
              Komunitas
            </CustomLink>
          </li>
        </ul>
        <div>
          <CustomLink to="" className="text-secondary-color">
            Masuk
          </CustomLink>
        </div>
      </nav>
    </header>
  );
}
