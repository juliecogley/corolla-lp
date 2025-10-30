import Image from "next/image";
const MENUS =["MISSION","ABOUT","VOICE","BOUQUETS","FAQ"];

export default function Header() {
return (
<header className="section" style={{ justifyItems:"center"}}>

<div className="mx-auto flex" style={{paddingBottom: "1rem"}}>
<Image
src="/images/logotype-b.svg" // public/images/logo.svg
alt="Corolla ロゴ"
width={1000} // PCで大きめに
height={320}
className="block" // モバイルとPCでレスポンシブ
priority
/>
</div>

<nav className="font-serif ">
<ul className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-24 text-sm sm:text-lg lg:text-xl tracking-widest">
{MENUS.map((s) => ( 
<li key={s}>
<a href={`#${s.toLowerCase()}`}
className="hover:opacity-70 transition-opacity duration-200">{s}</a>
</li>
))}
</ul>
</nav>
</header>
);
}