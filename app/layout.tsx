import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./component/SessionWrapper";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ANIME LIST",
  description: "WEB UNTUK PARA WIBU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={`${gabarito.className} bg-[#222831]`}>{children}</body>
      </html>
    </SessionWrapper>
  );
}
