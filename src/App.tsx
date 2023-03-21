import Tilt from "react-parallax-tilt";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center">
      <Tilt>
        <div className="w-[750px] reltive rounded-lg grid place-items-center overflow-hidden">
          <p className='absolute font-google text-[40px] text-[#7f858c] font-bold mt-20'>JOSH DANIEL BAÑARES</p>
          <img
            className="w-full h-full object-cover"
            src="/assets/poweron_cert.png"
            alt="PowerOn Certificate"
          />
        </div>
      </Tilt>
    </div>
  );
}

export default App;
