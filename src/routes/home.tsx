import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [studentId, setStudentId] = useState("");

  return (
    <section className='z-10'>
      <h2 className='text-white font-google mb-2'>PowerOn Workshop: Solution Challenge 2023</h2>

    <div className="bg-white flex space-x-4 border border-black rounded-lg items-center px-4">
      <input
        required
        type="text"
        maxLength={7}
        placeholder="Enter Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        className="bg-none font-google outline-none bg-transparent text-xl"
      />
      <Link
        to={studentId ? `/certificate/${studentId}` : "/"}
        className="border-l border-black hover:text-blue-600 transition-colors text-4xl pl-4 pt-2 pb-3"
      >
        &rarr;
      </Link>
    </div>
    </section>
  );
};
