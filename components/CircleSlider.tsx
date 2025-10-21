import Image from "next/image";

const IMGS = [
 "/images/top-img1.jpeg",
 "/images/top-img2.jpeg",
 "/images/top-img3.jpeg",
 "/images/top-img4.jpeg",
 "/images/top-img1.jpeg",
 "/images/top-img1.jpeg",
 ];
 
export default function CircleSlider() {
// 横並びを無限に見せるために2回分並べる
const list = [...IMGS, ...IMGS];

return (
<div className="overflow-hidden select-none">
<div className="marquee flex gap-6">
{list.map((src, i) => (
<div key={i} className="relative w-40 h-40 sm:w-52 sm:h-52 shrink-0">
<Image
src={src}
alt=""
fill
className="rounded-full object-cover object-center border-2"
style={{ borderColor: "#3A3A3A" }} /* 枠色 #3A3A3A */
sizes="(max-width: 768px) 160px, 208px"
priority={i < 3}
/>
</div>
))}
</div>
</div>
);
}