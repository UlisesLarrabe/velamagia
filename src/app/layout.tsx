import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Inicio - Velamagia",
  description: "Sitio no oficial de Velamagia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col items-center  bg-[#FCD9DB]  min-h-screen">
        <Navbar />
        <main className="h-full w-full bg-[#FCD9DB] flex flex-col justify-center items-center gap-3">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
