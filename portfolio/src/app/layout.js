import Header from "@/components/common/Header";
import "./globals.css";
import { ibmPlexMono, manrope, ubuntu, spaceGrotesk } from "@/config/font.js";

export const metadata = {
  title: "Sherrifdeen.dev",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ibmPlexMono.variable} ${manrope.variable} ${ubuntu.variable} ${spaceGrotesk.variable}`}
    >
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
