import { Outlet } from "react-router-dom";
import { Footer } from "../components";

export const Root = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <Outlet />

      <Footer />
      <img
        className="w-full object-cover h-full xl:h-auto absolute bottom-0 pointer-events-none"
        src="/assets/gradient.png"
        alt="gradient background"
      />
    </div>
  );
};
