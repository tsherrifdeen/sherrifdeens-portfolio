import "./globals.css";
import { inter } from "./fonts";
export const metadata = {
  title: "Sherrfideen's Portflio",
  description: "Sherrifdeen Tijani's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
