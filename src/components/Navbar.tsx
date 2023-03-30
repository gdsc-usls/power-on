import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="text-white absolute top-10 flex justify-between items-center w-full">
      <div className="flex space-x-4 items-center">
        <img src="/assets/gdsc_logo.png" alt="logo" className="w-[70px]" />
        <p>Google DSC - USLS</p>
      </div>

      <ul className="lg:flex space-x-12 hidden">
        <li>
          <Link to="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
        </li>

        <li>
          <a
            href="mailto:gdsc@usls.edu.ph"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-gray-300 transition-colors"
          >
            Contact
          </a>
        </li>

        <li>
          <a
            href="https://gdsc-usls.live"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-gray-300 transition-colors"
          >
            Landing
          </a>
        </li>

        <li>
          <a
            href="https://github.com/gdsc-usls/certificate-generator"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md bg-blue-600 text-white px-6 py-3"
          >
            Source Code
          </a>
        </li>
      </ul>
    </nav>
  );
};
