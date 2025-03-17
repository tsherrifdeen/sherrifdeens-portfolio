import {
  IBM_Plex_Mono,
  Manrope,
  Ubuntu,
  Space_Grotesk,
} from "next/font/google";

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-IBM-Plex-Mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Specify desired weights
});

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Specify desired weights
});

export const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"], // Specify desired weights
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"], // Specify desired weights
});
