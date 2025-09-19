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
  title: "株式会社バディ | 介護施設専門 厨房受託業",
  description: "介護施設の厨房運営をトータルサポート。栄養管理、衛生管理、調理スタッフ派遣まで、プロフェッショナルが安心・安全な食事づくりをお手伝いします。",
  keywords: "介護施設,厨房受託,栄養管理,衛生管理,調理スタッフ,食事提供,介護食",
  authors: [{ name: "株式会社バディ" }],
  openGraph: {
    title: "株式会社バディ | 介護施設専門 厨房受託業",
    description: "介護施設の厨房運営をトータルサポート。安心・安全な食事づくりをお手伝いします。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
