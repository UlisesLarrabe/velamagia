"use client";
import { useState } from "react";
import ImageAboutUs from "../../public/assets/mainImage.jpg";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"],
});

interface Info {
  name: string;
  web: string;
  description: string;
}

const AboutUs = () => {
  const info: Info[] = [
    {
      name: "Mission",
      web: "Misión",
      description:
        "Satisfacer a los fanáticos de los aromas con la producción de velas aromáticas.",
    },
    {
      name: "Vision",
      web: "Visión",
      description:
        "Llegar a las ventas necesarias para sostener el negocio y así poder alcanzar una ganancia que nos permita progresar y sostenernos a lo largo del tiempo.",
    },
    {
      name: "Values",
      web: "Valores",
      description:
        "Creatividad,originalidad, eficiencia y puntualidad en la entrega y calidad en el producto y el servicio.",
    },
  ];

  const [infoSelected, setSelectedInfo] = useState<Info>(info[0]);

  const isSelected = (info: Info): boolean => {
    return info.name === infoSelected.name;
  };

  return (
    <section
      className="lg:w-[1024px] w-full flex flex-col gap-4 items-center p-2 bg-[#FCD9DB]"
      id="about-us"
    >
      <header className="flex justify-center items-center">
        <h2
          className={` ${montserrat.className} text-xl md:text-3xl text-[#A5243D]`}
        >
          MISIÓN, VISIÓN Y VALORES
        </h2>
      </header>
      <main className="flex md:flex-row flex-col gap-3 items-center md:items-start justify-center w-full">
        <section className="flex flex-col gap-4 w-full items-center md:items-start md:w-[50%] md:h-auto h-[150px]">
          <div className="flex justify-center md:justify-normal md:w-[500px] gap-2">
            {info.map((item) => (
              <button
                onClick={() => setSelectedInfo(item)}
                className={`text-[#A5243F] border-b-2 border-grey p-2 ${
                  isSelected(item) && "font-bold border-red-800 text-[#250a0a]"
                }`}
                key={item.name}
              >
                {item.web}
              </button>
            ))}
          </div>
          <p className="w-[70%] text-[#43121c]">{infoSelected.description}</p>
        </section>
        <Image
          src={ImageAboutUs}
          alt="La imagen de una vela encendida"
          width={400}
          height={400}
          className=" rounded-sm"
        />
      </main>
    </section>
  );
};
export default AboutUs;
