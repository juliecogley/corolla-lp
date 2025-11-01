"use client";
import Image from "next/image";
import Header from "../../components/Header";
import CircleSlider from "../../components/CircleSlider";
import Footer from "../../components/Footer";

type Product = { id:string; name:string; price:string; img:string; };
type Voice = { id:string; quote:string; date:string; name:string; img:string; };

const products: Product[] = [
 { id:"1", name:"ブーケA", price:"¥1,980（税込・送料別）", img:"/images/bouque-img1.jpeg" },
 { id:"2", name:"ブーケB", price:"¥2,980（税込・送料別）", img:"/images/bouque-img2.jpeg" },
 { id:"3", name:"ブーケC", price:"¥3,980（税込・送料別）", img:"/images/bouque-img3.jpeg" },
];

const voices: Voice[] = [
 { id:"v1", quote:"やさしい色味で部屋が明るくなりました。", date:"2025.04.04", name:"30代・女性", img:"/images/voice-img1.jpeg"},
 { id:"v2", quote:"ロスフラワーを気軽に楽しめます！", date:"2025.05.18", name:"40代・男性", img:"/images/voice-img2.jpeg"},
 { id:"v3", quote:"おしゃれで写真映えも抜群！", date:"2025.06.20", name:"20代・女性", img:"/images/voice-img3.jpeg"},
];


export default function Page() {
return (
<main>
<Header />
<section className="mx-auto"><CircleSlider /></section>

<section className="section">
<h1 className="h1">「やさしい花束を。」</h1>
<p className="description">
品質に問題がなくても規格外等の理由で廃棄されるロスフラワー。<br />
Corollaではロスフラワーで作ったブーケを販売しています。
</p>
<div className="mt-8">
<a href="#" className="btn btn-primary">ONLINE SHOP</a>
</div>
</section>


 <section id="mission" className="pb-0 bg-[var(--dk)] text-brand-pink">
 <div className="section">
 <h2 className="h2">MISSION</h2>
 <p className="kicker">Corollaのミッション</p>
 <p className="description">
「ロスフラワーで明日を豊かに」。<br/>これは、わたしたちの重要なミッションです。<br/>
 廃棄されるはずのロスフラワーから<br/>
 環境にも人にもやさしい花束を生み出し、多くの人の心を癒す。<br/>
 そんな、豊かな未来を目指しています。
 </p>
 </div>
{/*下に横幅いっぱいの画像 */}
<Image
src="/images/mission-img.jpeg"
alt="MISSIONイメージ"
width={1920}
height={800}
className="w-full h-80 sm:h-[30rem] object-cover block"
priority
/>
 </section>


 <section id="about" className="section">
 <h2 className="h2">ABOUT</h2>
 <p className="kicker">Corollaのブーケについて</p>

 <div className="grid sm:grid-cols-3 gap-6">
 {[
 {img:"/images/about-img1.jpeg",title:"環境にやさしい",desc:"ロスフラワーを商品に活用することで、花の大量廃棄を防いでCO2を削減。環境への負荷を軽減します。"},
 {img:"/images/about-img2.jpeg",title:"お財布にやさしい",desc:"誰でも花のある暮らしを楽しんでもらいという想いから、ロスフラワーならではの特別価格で販売しています。"},
 {img:"/images/about-img3.jpeg",title:"生産者にやさしい",desc:"花卉産業を持続可能にするため、Corollaの売上の一部は生産者様へ寄付しています。"},
 ].map((f,i)=>(
 <article key={i} className="bg-white rounded-3xl shadow-card p-5">
 <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 leading-none">
 <Image src={f.img} alt="" fill sizes="(max-width:768px) 100vw, 360px" className="object-cover block"/>
 </div>
 <h3 className="h3">{f.title}</h3>
 <p className="p-s">{f.desc}</p>
 </article>
 ))}
 </div>
 </section>
{/*下に横幅いっぱいの画像 */}
<Image
src="/images/about-img4.jpeg"
alt="ABOUTイメージ"
width={1920}
height={800}
className="w-full h-80 sm:h-[30rem] object-cover"
priority
/>


 <section id="voice" className="section">
 <h2 className="h2">VOICE</h2>
 <p className="kicker">利用者様の声</p>
 <div className="grid sm:grid-cols-3 gap-6">
 {voices.map(v=>(
 <figure key={v.id} className="bg-white rounded-3xl shadow-card p-5">
 <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
 <Image src={v.img} alt="" 
 width={400}
 height={300}
 className="w-full h-full object-cover"/>
 </div>
  <figcaption className="text-xs opacity-70 flex gap-4 mt-2">
  <span>{v.date}</span>
  <span>{v.name}</span>
  </figcaption>
 <blockquote className="p mb-2 text-left">{v.quote}</blockquote>

 </figure>
 ))}
 </div>
 </section>


 <section id="bouquets" className="section">

<h2 className="h2">BOUQUETS</h2>
<p className="kicker">販売中のブーケ</p>
<div className="grid sm:grid-cols-3 gap-8">
{products.map((p, i) => (
<div key={i} >
{/* 丸画像 */}
<div className="relative w-60 h-60 mx-auto mb-4">
<Image
src={p.img}
alt={p.name}
fill
className="object-cover object-top rounded-full border-4 border-brand-text custom-object"
/>
</div>
{/* テキスト */}
<h3 className="h3">{p.name}</h3>
<p className="p">{p.price}</p>
</div>
))}
</div>
<div className="mt-8">
<a href="#" className="btn btn-primary">VIEW MORE</a>
</div>
</section>


<section id="faq" className="bg-[var(--dk)] text-brand-pink">
<div className="section">
<h2 className="h2">FAQ</h2>
<p className="kicker">よくあるご質問
</p>
 <ul className="space-y-5">
 {[
 {q:"ロスフラワーって何？",a:"市場に出ず余剰となった花を指します。品質管理のうえ使用します。"},
 {q:"ブーケのお花は指定できる？",a:"【オーダーメイド】と表示のある商品はお花やデザインの雰囲気をご指定いただけます。"},
 {q:"品質保証制度はありますか？",a:"商品に不備がある場合は商品到着後から4日以内にご連絡ください。全額返金対応します。"},
 ].map((f,i)=>(
 <li key={i} className="bg-white/5 rounded-2xl p-5">
 <p className="font-medium mb-4 underline decoration-[1px] underline-offset-4">{f.q}</p>
 <p className="p-s">{f.a}</p>
 </li>
 ))}
 </ul>
 <div className="mt-8">
<a href="#" className="btn btn-ghost">ONLINE SHOP</a>
</div>
</div>
<Image
src="/images/faq-img.jpeg" 
alt="FAQイメージ"
width={1920}
height={800}
className="w-full h-80 sm:h-[30rem] object-cover block object-bottom"
priority
/>
</section>
<Footer />
 </main>
 );
}