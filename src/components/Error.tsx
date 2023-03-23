import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <div className="bg-slate-900 text-white min-h-screen flex flex-col relative items-center justify-center">
      <div>
        <h1 className="text-4xl font-google">An error occured.</h1>
        <p className="text-center text-lg uppercase mt-2">{error.statusText || error.message}</p>
      </div>

      <img
        className="w-full h-full object-cover absolute bottom-0 pointer-events-none"
        src="/assets/gradient.png"
        alt="gradient background"
      />
    </div>
  );
};
