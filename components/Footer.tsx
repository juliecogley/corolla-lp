// src/components/Footer.tsx
import Image from "next/image";
const MENUS =["MISSION","ABOUT","VOICE","BOUQUETS","FAQ"];

export default function Footer() {

return (
<footer className=" bg-[var(--dk)]" style={{ justifyItems:"center"}} >
<div className="section" > 

<div className="mx-auto flex mb-4" style={{paddingBottom: "1.5rem"}}>
<Image
src="/images/logotype-w.svg" // public/images/logo.svg
alt="logotype"
width={1000} // PCで大きめに
height={320}
className="block" // モバイルとPCでレスポンシブ
priority
/>
</div>

<div className="span mb-4" style={{paddingBottom: "2.5rem"}}>
〒000-0000<br />
東京都〇〇区〇〇0-0-0-0<br />
03-0000-0000
</div>

{/* ロゴマーク*/}
<div className="mb-4" style={{paddingBottom: "2.5rem"}}>
<div className="footer-menu flex">
<Image 
src="/images/logomark-w.svg" 
alt="logomark" 
width={136} 
height={136} 
className="block mx-auto h-auto w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 " 
priority
/>
</div>
</div>

<nav className="mb-4" style={{paddingBottom: "1.5rem"}}>
<ul className="footer-menu flex flex-wrap">
{MENUS.map((s) => ( 
<li key={s}>
<a href={`#${s.toLowerCase()}`}
className="hover:opacity-70 transition-opacity duration-200">{s}</a>
</li>
))}
</ul>
</nav>


<div className="span flex">
<span>©2025 Corolla Inc.</span>
<a href="/privacy" className="hover:opacity-100">個人情報保護方針</a>
</div>

</div>  
</footer>
);
}