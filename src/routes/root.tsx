import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col relative items-center justify-center">
      <Outlet />

      <img
        className="w-full h-full object-cover absolute bottom-0"
        src="/assets/gradient.png"
        alt="gradient background"
      />
    </div>
  );
};
