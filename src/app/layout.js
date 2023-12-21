import "./globals.css";
import { inter, dm_sans } from "./fonts";
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
