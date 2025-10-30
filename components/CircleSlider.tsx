'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const IMGS = ['/images/Group 25.svg'];

export default function CircleSlider() {
 const [emblaRef] = useEmblaCarousel(
 { loop: true, align: 'start', containScroll: 'trimSnaps' },
 [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
 );

 return (
 <section className="py-6">
 <div ref={emblaRef} className="overflow-hidden">
 {/* ← ここが Grid。flex は使っていません */}
 <div className="grid grid-flow-col auto-cols-[100%] gap-4">
 {IMGS.map((src, i) => (
 <div key={i} className="grid place-items-center py-4">
 <div className="aspect-square w-[280px] sm:w-[320px] rounded-full overflow-hidden border-2 border-[#3a3a3a]">
 <Image
 src={src}
 alt=""
 width={800}
 height={800}
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
