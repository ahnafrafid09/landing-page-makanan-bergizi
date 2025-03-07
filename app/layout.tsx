import type { Metadata } from "next";
import { Roboto, Courgette } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const courgette = Courgette({
  variable: "--font-courgette",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Maksify",
  description: "Landing Page Maksify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${courgette.variable} antialiased`}>
        <Navbar />

        <main className="pt-[72px] md:pt-[80px] lg:pt-[88px]">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
