import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import type { Metadata } from "next";

const noto = Noto_Sans_JP({
subsets: ["latin"],
weight: ["400","500","700"],
variable: "--font-noto",
display: "swap",
});

export const metadata: Metadata = {
title: "Corolla | やさしい花束を。",
description: "ロスフラワーを活用したやさしいブーケをお届けします。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="ja" className={`${noto.variable}`}>
<body className="font-sans antialiased">{children}</body>
</html>
);
}