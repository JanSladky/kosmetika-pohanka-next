import "./globals.css";
import { ReactNode } from "react";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Kosmetické studio Pohanka Žatec | Profesionální péče o pleť",
  description:
    "Kosmetické studio Pohanka v Žatci nabízí make-up, permanentní make-up, ošetření pleti, IPL, radiofrekvenční lifting a další profesionální služby. Přijďte si odpočinout.",
  keywords: [
    "kosmetika Žatec",
    "kosmetické studio",
    "make-up Žatec",
    "permanentní make-up",
    "ošetření pleti",
    "IPL Žatec",
    "radiofrekvenční lifting",
    "líčení na svatbu",
    "profesionální kosmetika",
  ],
  authors: [{ name: "Jan Sladký", url: "https://www.jansladky.eu" }],
  creator: "Jan Sladký",
  publisher: "Kosmetické studio Pohanka",
  metadataBase: new URL("https://www.kosmetikapohanka.cz"),
  openGraph: {
    title: "Kosmetické studio Pohanka Žatec",
    description: "Profesionální kosmetické služby, make-up, IPL, lifting a další péče v Žatci.",
    url: "https://www.kosmetikapohanka.cz",
    siteName: "Kosmetické studio Pohanka",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kosmetické studio Pohanka",
    description: "Profesionální make-up a péče o pleť v srdci Žatce.",
    creator: "@kamilpohanka",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
