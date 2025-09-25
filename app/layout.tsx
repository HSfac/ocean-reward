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
  title: "블루체인 부산 - 부산 해양쓰레기 블록체인 리워드 시스템",
  description: "해양쓰레기를 수거하고 토큰으로 보상받는 부산의 혁신적인 블록체인 리워드 플랫폼",
  keywords: "부산, 해양쓰레기, 블록체인, 리워드, 토큰, 환경보호, ESG, 클레이튼, 블루체인",
  openGraph: {
    title: "블루체인 부산 - 깨끗한 바다, 블록체인이 만드는 미래",
    description: "해양쓰레기 수거 활동에 대한 블록체인 기반 투명한 리워드 시스템",
    type: "website",
    locale: "ko_KR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
