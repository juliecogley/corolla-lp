'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const IMGS = [
  '/images/sample-circle-1.svg',
  '/images/sample-circle-2.svg',
  '/images/sample-circle-3.svg',
];

export default function CircleSlider() {
 const [emblaRef] = useEmblaCarousel(
 { loop: true },
 [AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })]
 );

 return (
 <section className="py-6">
 <div className="overflow-hidden" ref={emblaRef}>
 <div style={{ display: 'flex' }}>
 {[...IMGS, ...IMGS, ...IMGS, ...IMGS, ...IMGS].map((src, i) => (
 <div key={i} style={{ flex: '0 0 auto', minWidth: 0 }}>
 <div style={{ width: '560px', height: '560px', margin: '0 16px' }} className="rounded-full overflow-hidden border-2 border-[#3a3a3a]">
 <Image
 src={src}
 alt=""
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
