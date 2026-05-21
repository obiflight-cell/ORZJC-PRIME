import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ORZJC Prime — Award-Winning Luxury Travel",
  description:
    "Award-winning luxury journeys, curated for the extraordinary. ORZJC Prime — where the world becomes your stage.",
  keywords: "luxury travel, award-winning destinations, premium holidays, ORZJC Prime",
  openGraph: {
    title: "ORZJC Prime — Award-Winning Luxury Travel",
    description: "Award-winning luxury journeys, curated for the extraordinary.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins antialiased bg-blue-deep text-white-pure">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
