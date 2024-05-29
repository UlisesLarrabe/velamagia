import Instagram from "@/svg/Instagram";
import Sparkle from "@/svg/Sparkle";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"],
});
const Sleeve = () => {
  return (
    <section className=" h-[95vh] w-screen text-center overflow-hidden z-30 relative flex flex-col items-center justify-center">
      <header className="z-30 relative flex flex-col gap-5 justify-center items-center animate-fade-in">
        <h1
          className={`md:text-7xl text-5xl text-[#FFFBFA] brightness-110 ${montserrat.className} `}
        >
          Velamagia
        </h1>
        <p className="w-[80%] text-[#FFFBFA]">
          Somos una pyme dedicada a la fabricación y venta de velas aromáticas
        </p>
        <a
          href="#about-us"
          className="btn glass bg-[#585353] w-[70%] hover:brightness-150 "
        >
          <Sparkle />
          Enciende tu magia
        </a>
        <a
          href="https://www.instagram.com/_velamagia/?igsh=MW5xdnllbTlyaGxqeQ%3D%3D"
          target="_blank"
          className="btn btn-square hover:bg-[#f5752b] bg-[#BB7044]"
        >
          <Instagram />
        </a>
      </header>

      <div className="absolute top-0 bottom-0 h-full z-10">
        <video
          muted
          autoPlay
          controlsList="nofullscreen"
          className="object-center w-screen h-screen object-cover"
        >
          <source src="/assets/mainVideo.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};
export default Sleeve;
