import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Clic&Progress – Apprendre, ça doit donner envie | Formation & Accompagnement",
  description:
    "Clic&Progress est l'activité de formation et d'accompagnement de Soufiyan, formateur indépendant basé à Clermont-Ferrand. Reconversion, Intelligence Artificielle, Commerce & Soft Skills.",
  keywords: [
    "Clic&Progress",
    "Soufiyan formateur",
    "formation Clermont-Ferrand",
    "formation intelligence artificielle",
    "reconversion professionnelle",
    "ludopédagogie",
    "soft skills",
    "techniques de vente",
    "accompagnement au changement",
  ],
  openGraph: {
    title: "Clic&Progress – Apprendre, ça doit donner envie",
    description:
      "Formations vivantes et accompagnement au changement par Soufiyan. Ce qu'on apprend sert dès le lendemain.",
    type: "website",
    url: "https://clic-progress.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable}`}
    >
      <body className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A] antialiased selection:bg-[#FF6500] selection:text-white">
        {children}
      </body>
    </html>
  );
}
