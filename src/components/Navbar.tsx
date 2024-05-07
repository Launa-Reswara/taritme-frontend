import { CustomLink } from "./ui/typography";

export default function Navbar() {
  return (
    <header className="dark:bg-primary-black/80 backdrop-blur-lg bg-white/80 w-full flex justify-center items-center">
      <nav className="max-w-7xl w-full px-4 py-5 justify-between flex items-center">
        <div>
          <img src="/images/logo.svg" alt="logo" />
        </div>
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
          <CustomLink
            to=""
            className="text-primary-color dark:text-secondary-color font-medium"
          >
            Masuk
          </CustomLink>
        </div>
      </nav>
    </header>
  );
}
