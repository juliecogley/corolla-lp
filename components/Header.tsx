import Image from "next/image";
const MENUS =["MISSION","ABOUT","VOICE","BOUQUETS","FAQ"];

export default function Header() {
return (
<header className="header-section" style={{ justifyItems:"center"}}>

<div className="mx-auto flex object-center" style={{paddingBottom: "1.5rem"}}>
<Image
src="/images/logotype-b.svg" // public/images/logo.svg
alt="Corolla ロゴ"
width={1000} // PCで大きめに
height={320}
className="block"
/>
</div>

<nav className="">
<ul className="header-menu flex flex-wrap ">
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