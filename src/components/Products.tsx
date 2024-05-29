import { Montserrat } from "next/font/google";
import { products } from "@/data/products";
import { StaticImageData } from "next/image";
import Card from "./Card";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"],
});

interface Product {
  id: number;
  title: string;
  img: StaticImageData;
  description?: string;
}

const Products = () => {
  const allProducts: Product[] = products;

  return (
    <>
      <section
        className="lg:w-[1024px] flex flex-col gap-4 items-center p-2 bg-[#FCD9DB]"
        id="products"
      >
        <h2
          id="our-products"
          className={` ${montserrat.className}  text-3xl text-[#A5243D]`}
        >
          Nuestros productos
        </h2>
        <main className="flex justify-center flex-col md:flex-wrap md:flex-row gap-10">
          {allProducts.map((product) => (
            <div key={product.id}>
              <Card
                img={product.img}
                title={product.title}
                description={product.description}
              />
            </div>
          ))}
        </main>
      </section>
    </>
  );
};
export default Products;
