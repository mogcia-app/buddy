import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "株式会社バディ | 食からデジタルまで多角的なソリューション",
  description: "厨房委託業から最新のデジタル技術まで、幅広い事業でお客様の課題解決をサポート。介護施設・企業食堂の運営、Web制作、SNS運用代行、AI業務改善ツールなど、トータルソリューションを提供します。",
  keywords: "厨房委託業,介護施設,企業食堂,Web制作,SNS運用代行,AI業務改善,デジタルマーケティング,システム開発,佐賀県,株式会社バディ",
  authors: [{ name: "株式会社バディ" }],
  icons: {
    icon: [
      { url: '/buddylogo.png', sizes: '32x32', type: 'image/png' },
      { url: '/buddylogo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/buddylogo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/buddylogo.png',
  },
  openGraph: {
    title: "株式会社バディ | 食からデジタルまで多角的なソリューション",
    description: "厨房委託業から最新のデジタル技術まで、幅広い事業でお客様の課題解決をサポートします。",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: '/buddylogo.png',
        width: 1200,
        height: 630,
        alt: '株式会社バディ ロゴ',
      },
    ],
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
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
