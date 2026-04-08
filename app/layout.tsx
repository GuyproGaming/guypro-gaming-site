import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guypro Gaming – Actualités et jeux mobiles compatibles Winlator",
  description:
    "Découvrez des jeux mobiles compatibles Winlator, GameHub et émulateurs, consultez des guides pratiques et échangez avec la communauté Guypro Gaming.",

  keywords: [
    "jeux mobiles",
    "winlator android",
    "jeux compatibles winlator",
    "gamehub android",
    "émulateur android gaming",
    "guypro gaming",
    "gaming mobile",
  ],

  authors: [{ name: "Guypro Gaming" }],

  metadataBase: new URL("https://guyprogaming.app"),

  openGraph: {
    title: "Guypro Gaming",
    description:
      "Actualités gaming mobile, compatibilité Winlator, guides et communauté active.",
    url: "https://guyprogaming.app",
    siteName: "Guypro Gaming",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Guypro Gaming",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Guypro Gaming",
    description:
      "Actualités gaming mobile, guides pratiques et jeux compatibles Winlator.",
    images: ["/banner.jpg"],
  },

  icons: {
    icon: "/logo.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
