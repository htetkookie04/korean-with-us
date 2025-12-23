import { Poppins, Noto_Sans_KR } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Korean With Us - Learn Korean Language & Culture",
  description: "Join Korean With Us language center in Myanmar. Learn Korean from beginner to advanced levels with experienced teachers. TOPIK preparation, speaking practice, and cultural immersion.",
  keywords: "Korean language, Korean classes, TOPIK preparation, Myanmar, Korean culture, language learning",
  icons: {
    icon: [
      { url: '/favicon.svg', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg', sizes: '192x192', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#F472B6" />
      </head>
      <body
        className={`${poppins.variable} ${notoSansKR.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}