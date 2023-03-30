import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

export const Home = () => {
  const [studentId, setStudentId] = useState("");

  return (
    <section className="z-10 flex justify-between items-center min-h-screen">
      <div>
        <h2 className="text-white font-google lg:text-7xl sm:text-5xl text-3xl font-bold">
          PowerOn Workshop:
          <br /> Solution Challenge 2023
        </h2>

        <div className="bg-white max-w-[400px] shadow-md mt-5 flex space-x-4 border border-black rounded-lg items-center px-4">
          <input
            required
            type="text"
            maxLength={7}
            placeholder="Enter Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="bg-none font-google outline-none bg-transparent text-lg w-full"
          />
          <Link
            to={studentId ? `/certificate/${studentId}` : "/"}
            className="border-l border-black hover:text-blue-600 transition-colors text-3xl pl-4 pt-2 pb-3"
          >
            &rarr;
          </Link>
        </div>
        <p className="mt-2 text-white italic">Get your certificate!</p>
      </div>

      <Tilt gyroscope className="max-w-[650px] hidden 2xl:block">
        <img
          className="w-full pointer-events-none h-full rounded-lg object-cover"
          src="/assets/poweron_cert.png"
          alt="PowerOn Certificate"
        />
      </Tilt>
    </section>
  );
};
