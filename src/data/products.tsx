import velaAromatica from "../../public/assets/vela-aromatica.webp";
import velaBasica from "../../public/assets/vela-basica.webp";
import velaFrase from "../../public/assets/vela-frase.webp";
import velaCeramica from "../../public/assets/vela-ceramica.webp";
import velaSigno from "../../public/assets/vela-signo.webp";
import velaFlores from "../../public/assets/vela-flores.webp";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  title: string;
  img: StaticImageData;
  description?: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Vela aromática",
    img: velaAromatica,
    description: "La más linda para decorar tu hogar.",
  },
  { id: 2, title: "Vela básica", img: velaBasica },
  {
    id: 3,
    title: "Vela con frase personalizada",
    img: velaFrase,
    description: "La vela para regalarle a tu persona favorita!",
  },
  {
    id: 4,
    title: "Vela en cerámica",
    img: velaCeramica,
    description: "Los recipientes de cerámicas son los más lindos.",
  },
  {
    id: 5,
    title: "Vela signo zodiacal",
    img: velaSigno,
    description:
      "Le agregamos un stikcer con tu signo, para que siempre lo tengas presente.",
  },
  {
    id: 6,
    title: "Vela con flores",
    img: velaFlores,
    description: "Podes agregarle tu flor favorita para un aroma más intenso.",
  },
];
