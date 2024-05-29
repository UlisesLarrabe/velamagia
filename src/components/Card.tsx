import Image, { StaticImageData } from "next/image";

const Card = ({
  img,
  title,
  description,
}: {
  img: StaticImageData;
  title: string;
  description?: string;
}) => {
  return (
    <article className="card w-[350px] md:h-[420px] lg:h-[220px] lg:w-[450px] lg:card-side bg-[#fff0f6] shadow-xl">
      <figure className="lg:w-[200px]">
        <Image
          src={img}
          width={350}
          height={250}
          className="h-[250px] object-cover"
          alt={`Imagen de ${title}`}
        />
      </figure>
      <main className="card-body flex items-center justify-between">
        <section className="flex flex-col items-center gap-2">
          <h2 className="card-title text-[#bb3b55] md:max-w-[200px] text-center lg:h-auto">
            {title}
          </h2>
          <p className=" text-xs md:max-w-[200px]">{description}</p>
        </section>
        <div className="card-actions justify-end">
          <button className="btn text-[#f0edee] btn-primary">
            Comprar Ahora!
          </button>
        </div>
      </main>
    </article>
  );
};
export default Card;
