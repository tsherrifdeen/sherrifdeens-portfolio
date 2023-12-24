import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "Sherrfideen's Portflio",
  description: "Sherrifdeen Tijani's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${dm_sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
