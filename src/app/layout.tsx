import "./globals.css";
import { ReactNode } from "react";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Kosmetické studio Pohanka Žatec",
  description:
    "Specializujeme se také na profesionální make-up a maskérské služby. Ať už se připravujete na důležitou událost, svatbu nebo chcete jen oslnit svým vzhledem. Od jemného denního líčení až po extravagantní večerní. Jsme připraveni proměnit vaše představy v realitu..",
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
    description:
      "Profesionální kosmetické služby, make-up, IPL, lifting a další péče v Žatci.",
    url: "https://www.kosmetikapohanka.cz",
    siteName: "Kosmetické studio Pohanka",
    locale: "cs_CZ",
    type: "website",
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
