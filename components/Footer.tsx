// src/components/Footer.tsx
import Image from "next/image";

export default function Footer() {
// 住所＆メニューの上下余白（同じ値にそろえる）
const sectionPad = "py-6 sm:py-8";

return (
// 背景は #3a3a3a のまま
<footer className="text-white" style={{ backgroundColor: "#3a3a3a" }}>
<div className="container-px max-w-6xl text-center py-14 sm:py-20 md:flex">
{/* ロゴタイプ */}
<div className="mb-6 sm:mb-8">
<Image
src="/images/logotype-w.svg"
alt="Corolla"
width={500}
height={160}
className="mx-auto h-auto w-[220px] sm:w-[360px]"
priority
/>
</div>

{/* 住所（上下余白＝sectionPad） */}
<address
className={`mt-6 sm:mt-8 not-italic text-xs sm:text-sm leading-relaxed opacity-90 ${sectionPad}`}
>
〒000-0000<br />
東京都〇〇区〇〇0-0-0-0<br />
03-0000-0000
</address>

{/* ロゴマーク（ロゴタイプとメニューの“中間”なので上下は少し広め） */}
<div className="mt-6 sm:mt-8 justify-center">
<div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full ring-2 ring-white/70 grid place-items-center">
<Image className="mx-auto " src="/images/logomark-w.svg" alt="Corolla mark" width={100} height={100} />
</div>
</div>

{/* メニュー（上下余白＝sectionPad） */}
<nav className="font-serif mb-8 sm:mb-10 text-center">
<ul className="flex flex-row flex-wrap justify-center items-center gap-x-6 gap-y-3 sm:gap-x-8 sm:gap-y-4 text-[11px] sm:text-sm whitespace-normal">
{["TOP", "MISSION", "ABOUT", "VOICE", "BOUQUETS", "FAQ"].map((label) => (
<li key={label} className="w-1/3 sm:w-auto text-center"> 
<a 
href={label === "TOP" ? "#top" : `#${label.toLowerCase()}`}
className="inline-block px-2 py-1 hover:opacity-80"
>
{label}
</a>
</li>
))}
</ul>
</nav>

{/* 仕切り線＋コピーライト */}
<div className="mx-auto max-w-5xl border-t border-white/10" />
<div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-9 text-xs opacity-80">
<span className="mb-2 sm:mb-0">©2025 Corolla.</span>
<a href="/privacy" className="hover:opacity-100 underline underline-offset-4">
個人情報保護方針
</a>
</div>
</div>
</footer>
);
}