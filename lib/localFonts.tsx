import localFont from "next/font/local";
import { Work_Sans } from "next/font/google";

export const avenirNextBold = localFont({
  display: "swap",
  src: "../public/assets/fonts/AvenirNextLTPro-Bold.otf",
  weight: "400",
  variable: "--font-avenir-bold",
});

export const avenirNextLight = localFont({
  display: "swap",
  src: "../public/assets/fonts/AvenirNextLTPro-It.otf",
  weight: "400",
  variable: "--font-avenir-light",
});

export const avenirNextRegular = localFont({
  display: "swap",
  src: "../public/assets/fonts/AvenirNextLTPro-Regular.otf",
  weight: "400",
  variable: "--font-avenir-regular",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});
