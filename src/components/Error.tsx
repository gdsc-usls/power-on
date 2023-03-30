import { useRouteError } from "react-router-dom";
import { Navbar } from "./Navbar";

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div className="bg-black text-white min-h-screen relative grid place-items-center">
      <div className="z-10 absolute top-0 w-[90%] mx-auto">
        <Navbar />
      </div>

      <div className='z-10'>
        <h1 className="text-4xl font-google">An error occured.</h1>
        <p className="text-center text-lg uppercase mt-2">
          {error.statusText || error.message}
        </p>
      </div>

      <img
        className="w-full object-cover h-full xl:h-auto absolute bottom-0 pointer-events-none"
        src="/assets/gradient.png"
        alt="gradient background"
      />
    </div>
  );
};
