import { Inter } from "next/font/google";
import { Dm_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dm_sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const metadata = {
  title: "Sherrfideen's Portflio",
  description: "Sherrifdeen Tijani's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
