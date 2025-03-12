import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
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
      <main>{children}</main>
    </ThemeProvider>
  );
}
