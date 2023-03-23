import { doc } from "firebase/firestore";
import Tilt from "react-parallax-tilt";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import { Member } from "../data";
import { useDoc } from "../hooks/firestore";

export const Certificate = () => {
  const params = useParams();
  const [data, loading] = useDoc<Member>(
    doc(db, `certificates/powerOn/members/${params.studentId}`)
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data.fullName) {
    return <div>Student not found</div>;
  }

  return (
    <Tilt gyroscope className="z-10">
      <div className="md:w-[750px] sm:w-[600px] w-[420px] relative rounded-lg grid place-items-center overflow-hidden">
        <p className="absolute font-google md:text-[40px] text-lg sm:text-[30px] text-[#7f858c] font-bold md:mt-20 sm:mt-16 mt-12 uppercase">
          {data.fullName}
        </p>
        <img
          className="w-full pointer-events-none h-full object-cover"
          src="/assets/poweron_cert.png"
          alt="PowerOn Certificate"
        />
      </div>
    </Tilt>
  );
};
