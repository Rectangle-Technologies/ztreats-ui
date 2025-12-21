import type { Metadata } from "next";
import { Amaranth, Poppins } from "next/font/google";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const amaranth = Amaranth({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-amaranth",
});

export const metadata: Metadata = {
  title: "ZTreats - Premium Treats & Hampers",
  description: "Discover our premium collection of treats and hampers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
