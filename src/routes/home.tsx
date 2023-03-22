import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [studentId, setStudentId] = useState("");

  return (
    <div className="flex space-x-4 border rounded z-10 items-center text-white px-4">
      <input
        type="text"
        placeholder="Enter Student ID:"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        className="bg-none outline-none bg-transparent text-xl"
      />
      <Link to={`/certificate/${studentId}`} className="text-4xl mb-1">
        &rarr;
      </Link>
    </div>
  );
};
