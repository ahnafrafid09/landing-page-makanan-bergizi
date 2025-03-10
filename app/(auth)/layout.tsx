import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
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
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
