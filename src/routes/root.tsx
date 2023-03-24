import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

export const Root = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <main className="w-[90%] mx-auto z-10">
        <Navbar />
        <Outlet />
      </main>

      <Footer />

      <img
        className="w-full object-cover h-full xl:h-auto absolute bottom-0 pointer-events-none"
        src="/assets/gradient.png"
        alt="gradient background"
      />
    </div>
  );
};
