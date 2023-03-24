import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="text-white absolute top-5 flex justify-between items-center w-[90%]">
      {location.pathname !== "/" && (
        <Link to="/">
          <i className="text-3xl hover:text-blue-600 transition-colors">&larr;</i>
        </Link>
      )}
    </nav>
  );
};
