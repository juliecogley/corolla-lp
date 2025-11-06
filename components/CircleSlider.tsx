'use client';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const IMGS = [
'/images/top-img1.svg',
'/images/top-img2.svg',
'/images/top-img3.svg',
'/images/top-img4.svg',
'/images/top-img5.svg',
'/images/top-img6.svg',
'/images/top-img7.svg',
];

export default function CircleSlider() {
 const [emblaRef] = useEmblaCarousel(
 { loop: true, align: 'start', dragFree: true },
 [AutoScroll({ playOnInit: true,speed: 1.0, direction:'backward', stopOnInteraction: false,}),
 ],
 );
 return (
 <section>
 <div className="overflow-hidden" ref={emblaRef} >
 <div style={{display:"flex",gap:24}}>
 {[...IMGS, ...IMGS, ...IMGS, ...IMGS, ...IMGS, ...IMGS, ...IMGS].map((src, i) => (
 <div key={i} style={{flex:"0 0 auto",minWidth:0}}>
 <div style={{width:"375px" , height:"375px" ,margin:"0 16px"}}
 className="overflow-hidden">
 <Image
 src={src}
 alt="image"
 width={400}
 height={400}
 className="w-full h-full object-cover"
 priority={i < 3}
 />
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
