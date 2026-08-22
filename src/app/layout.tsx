import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "eSIM TIM Black 107GB 5G | Ativação Rápida",
  description:
    "eSIM TIM Black com 107GB, 5G e ligações ilimitadas. Ativação rápida e compra online.",
  keywords: [
    "eSIM",
    "TIM Black",
    "107GB",
    "5G",
    "ligações ilimitadas",
    "ativação rápida",
    "chip digital",
  ],
  openGraph: {
    title: "eSIM TIM Black 107GB 5G | Ativação Rápida",
    description:
      "eSIM TIM Black com 107GB, 5G e ligações ilimitadas. Ativação rápida e compra online.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
