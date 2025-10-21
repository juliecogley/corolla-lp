import Image from "next/image";

export default function Header() {
return (
<header className="section" style={{ justifyItems: "center" }}>
{/* ロゴ画像（中央にドーン） */}
<div className=" mx-auto flex justify-center items-center min-h-screen">
<Image
src="/images/logotype-b.svg" // public/images/logo.svg
alt="Corolla ロゴ"
width={1000} // PCで大きめに
height={320}
className="block" // モバイルとPCでレスポンシブ
priority
/>
</div>

{/* メニュー */}
<nav className="px-4 sm:px-6 lg:px-8 py-14 font-serif flex justify-center gap-6 sm:gap-14 text-sm sm:text-lg lg:text-xl ">
{["MISSION","ABOUT","VOICE","BOUQUETS","FAQ"].map((s) => (
<a
key={s}
href={`#${s.toLowerCase()}`}
className="leading-none tracking-wide hover:opacity-70 transition-opacity duration-200 ">
{s}
</a>
))}
</nav>
</header>
);
}