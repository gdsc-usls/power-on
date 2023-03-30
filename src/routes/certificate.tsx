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

  return (
    <div className="min-h-screen grid place-items-center">
      {loading && (
        <h1 className="text-white md:text-4xl text-center">Loading...</h1>
      )}

      {!loading && !data.fullName && (
        <h1 className="text-white md:text-4xl text-center">
          Certificate does not exist
        </h1>
      )}

      {!loading && data.fullName && (
        <Tilt gyroscope className="max-w-[850px] mx-auto">
          <div className="w-full relative rounded-lg grid place-items-center overflow-hidden">
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
      )}
    </div>
  );
};
