import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import {
  avenirNextBold,
  avenirNextLight,
  avenirNextRegular,
  workSans,
} from "@/lib/localFonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lendsqr",
  description: "The best loan management system for smart lenders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${avenirNextLight.variable} ${avenirNextRegular.variable} ${avenirNextBold.variable} ${workSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
