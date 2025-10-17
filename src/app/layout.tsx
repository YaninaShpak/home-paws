import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Header from "@/components/shared/header/Header";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["cyrillic"],
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Дом для питомцев",
  description:
    "Приложение для поиска передержки, няни или гостиницы для вашего питомца",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable}`}>
        <div className="container">
          <Header />
        </div>
          {children}
      </body>
    </html>
  );
}
