import Header from "@/components/common/Header";
import "./globals.css";
import {
  ibmPlexMono,
  manrope,
  ubuntu,
  spaceGrotesk,
  outfit,
  playfairDisplay,
} from "@/config/font.js";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Sherrifdeen.dev",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ibmPlexMono.variable} ${manrope.variable} ${ubuntu.variable} ${spaceGrotesk.variable} ${outfit.variable} ${playfairDisplay.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
