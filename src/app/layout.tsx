import "./globals.css";
import type { Metadata } from "next";
import {
  ibmPlexMono,
  manrope,
  ubuntu,
  spaceGrotesk,
  outfit,
  playfairDisplay,
} from "@/config/font.js";
import CustomCursor from "@/components/common/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://sherrifdeen.vercel.app"),
  title: {
    default:
      "Sherrifdeen.vercel.app | Full-Stack Developer & Software Engineer",
    template: "%s | Sherrifdeen.vercel.app",
  },
  description:
    "Sherrifdeen is a full-stack developer and software engineer specializing in building modern web applications with React, Next.js, and Node.js.",
  keywords: [
    "Sherrifdeen",
    "full-stack developer",
    "software engineer",
    "React developer",
    "Next.js",
    "web development",
    "frontend developer",
    "backend developer",
    "portfolio",
  ],
  authors: [{ name: "Sherrifdeen", url: "https://sherrifdeen.vercel.app" }],
  creator: "Sherrifdeen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sherrifdeen.vercel.app",
    siteName: "Sherrifdeen.vercel.app",
    title: "Sherrifdeen.vercel.app | Full-Stack Developer & Software Engineer",
    description:
      "Sherrifdeen is a full-stack developer and software engineer specializing in building modern web applications with React, Next.js, and Node.js.",
    images: [
      {
        url: "/images/og-image.png", // Add a 1200x630 image to your /public folder
        width: 1200,
        height: 630,
        alt: "Sherrifdeen.vercel.app - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sherrifdeen.vercel.app | Full-Stack Developer & Software Engineer",
    description:
      "Sherrifdeen is a full-stack developer and software engineer specializing in building modern web applications with React, Next.js, and Node.js.",
    images: ["/images/og-image.png"],
    creator: "@sherrifdeen_", // uncomment and add your handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon-16x16.png",
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/images/site.webmanifest",
  alternates: {
    canonical: "https://sherrifdeen.vercel.app",
  },
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
      <body className="antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
