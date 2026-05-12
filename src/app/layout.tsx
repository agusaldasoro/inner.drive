import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://innerdrive.program"),
  title: {
    default: "Inner Drive · Programación para atletas de CrossFit",
    template: "%s · Inner Drive",
  },
  description:
    "Programación online para atletas de CrossFit y fitness competitivo. Base sólida, resultado real. Entrenamiento desde cualquier lugar.",
  openGraph: {
    title: "Inner Drive",
    description:
      "Programación online para atletas de CrossFit y fitness competitivo.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen bg-brand-ink font-sans text-white">
        <Navbar />
        <main className="min-h-[calc(100vh-160px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
