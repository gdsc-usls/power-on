import Tilt from "react-parallax-tilt";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center">
      <Tilt>
        <div className="w-[800px] reltive rounded-lg grid place-items-center overflow-hidden">
          <p className='absolute text-5xl text-gray-600 font-bold mt-16'>JOSH DANIEL BAÑARES</p>
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
