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
description: "ロスフラワーから作ったやさしいブーケをお届けします。",
metadataBase: new URL("https://corolla-lp.vercel.app/"),
openGraph:{
title:"Corolla",
description: "ロスフラワーから作ったやさしいブーケをお届けします。",
url:"https://corolla-lp.vercel.app/",
siteName:"Corolla",
images:[{url: "/ogp-img.svg", width: 1200, height:630 }],
locale:"ja_JP",
type:"website",
},
twitter:{
card:"summary_large_image",
images:[ "/ogp-img.svg"],   
}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="ja" className={`${noto.variable}`}>
<body className="font-sans antialiased">{children}</body>
</html>
);
}