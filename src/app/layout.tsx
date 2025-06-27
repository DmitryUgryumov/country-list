import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Список стран мира",
  description: "Информация о всех странах мира с флагами и ISO кодами",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
