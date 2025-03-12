import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeProvider";

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
    <ThemeProvider>
      <Navbar />
      <main className="pt-[69px] md:pt-[77px] lg:pt-[85px]">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
