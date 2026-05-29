import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nocturne — Restaurant Gastronomique",
  description:
    "Une expérience culinaire hors du commun. Nocturne vous invite à découvrir une gastronomie d'exception dans un cadre intimiste et raffiné, au cœur de Paris.",
  keywords: ["restaurant gastronomique", "paris", "fine dining", "nocturne", "chef"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${raleway.variable} bg-obsidian text-cream antialiased`}>
        {children}
      </body>
    </html>
  );
}
