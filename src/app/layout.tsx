import "./globals.css";
import { ReactNode } from "react";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Kosmetické studio Pohanka Žatec",
  description:
    "Specializujeme se také na profesionální make-up a maskérské služby. Ať už se připravujete na důležitou událost, svatbu nebo chcete jen oslnit svým vzhledem. Od jemného denního líčení až po extravagantní večerní. Jsme připraveni proměnit vaše představy v realitu..",
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
