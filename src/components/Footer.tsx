export const Footer = () => {
  return (
    <footer className="bottom-5 absolute z-10 flex space-x-1">
      <div className="bg-black px-6 rounded-l-full text-white font-google flex items-center text-xs sm:text-sm md:text-base shadow-md">
        <p>Google Developer Student Clubs - USLS © 2023</p>
      </div>

      <a href="https://github.com/gdsc-usls/certificate-generator" target="_blank" rel='noreferrer noopener' className="bg-black p-4 rounded-r-full shadow-md">
        <img
          src="/assets/github-mark-white.png"
          alt="GitHub"
          className="w-5 md:w-8"
        />
      </a>
    </footer>
  );
};
