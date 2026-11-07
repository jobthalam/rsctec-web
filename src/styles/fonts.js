import { DM_Sans as Font1, Urbanist as Font2 } from "next/font/google";

const font1 = Font1({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const font2 = Font2({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
});

export const FONTS = {
  font1: font1.className,
  font2: font2.className,
};

export const FONT_VARIABLES = `${font1.variable} ${font2.variable}`;

export default FONTS;
