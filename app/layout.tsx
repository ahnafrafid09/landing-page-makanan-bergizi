import type { Metadata } from "next";
import { Roboto, Courgette, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const courgette = Courgette({
  variable: "--font-courgette",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
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
      <ThemeProvider>
        <body
          className={`${roboto.variable} ${courgette.variable} ${poppins.variable} antialiased`}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
