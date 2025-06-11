"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { LazyImage } from "@/components/LazyImage";
import Link from "next/link";
import ServiceList from "@/components/ServiceList";
import ReferenceCarousel from "@/components/ReferenceCarousel";

const sliderImages = [
  { src: "/images/carousel/img1.jpg", alt: "Úvodní obrázek 1" },
  { src: "/images/carousel/img2.jpg", alt: "Úvodní obrázek 2" },
  { src: "/images/carousel/img3.jpg", alt: "Úvodní obrázek 3" },
];

const services = [
  { id: "ipl", title: "IPL Mediswiss", image: "/services/ipl.jpg" },
  { id: "makeup", title: "Make-up", image: "/services/makeup.jpg" },
  { id: "kosmetika", title: "Kosmetika", image: "/services/kosmetika.jpg" },
  { id: "pmu", title: "Permanentní make-up", image: "/services/permanentnimakeup.jpg" },
  { id: "elektrok", title: "Elektrokoagulace", image: "/services/elektrokoagulace.jpg" },
  { id: "radiolifting", title: "Radiofrekvenční lifting", image: "/services/radiolifting.jpg" },
];

export default function HomePage() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });

  const [refSliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 2, spacing: 10 },
    mode: "snap",
  });

  return (
    <main className="font-sans">
      {/* Carousel */}
      <div className="hidden lg:block">
        <div ref={sliderRef} className="keen-slider h-screen relative overflow-hidden">
          {sliderImages.map((img, i) => (
            <div key={i} className="keen-slider__slide relative w-full h-screen">
              <LazyImage src={img.src} alt={img.alt} objectFit="cover" className="w-full h-full" />
              {/* Scroll indikátor */}
              <a href="#intro" className="absolute bottom-6 left-1/2 -translate-x-1/2 transform animate-bounce z-20 flex justify-center items-center">
                <svg className="w-[150px] h-[150px] text-[#7FA9EC] opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="block lg:hidden h-[60px]" />

      {/* Úvodní blok textu */}
      <section id="intro" className="bg-white scroll-mt-[60px] py-12 px-4 max-w-4xl mx-auto text-left">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Vítejte na webu kosmetického studia</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          snoubí se zde krása, péče a relaxace. Jsme tu, abychom vám nabídli nejen kosmetické služby, ale také chvíle klidu a pohody. Pokud máte problémy s akné
          nebo jinými kožními potížemi naše kosmetické studio nabízí odborné ošetření na míru s individuálním přístupem a ověřenými technikami. Naše služby jsou
          zaměřené nejen na léčbu, ale i na prevenci, abychom vám pomohli dosáhnout zdravé a krásné pleti.
        </p>
        <p className="text-lg mt-3 text-gray-700 leading-relaxed">
          Specializujeme se také na profesionální make-up a maskérské služby. Ať už se připravujete na důležitou událost, svatbu nebo chcete jen oslnit svým
          vzhledem. Od jemného denního líčení až po extravagantní večerní. Jsme připraveni proměnit vaše představy v realitu..
        </p>
      </section>

      {/* Komponenta se službami */}
      <section className="bg-gray-100 py-12 px-4 text-center">
        <section className="bg-gray-100 py-12 px-4 text-center">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Nabídka služeb</h2>
          <ServiceList />
        </section>
      </section>

      {/* Carousel referencí */}
      <section className="py-12 px-4 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">Reference</h2>
        <ReferenceCarousel />
      </section>
    </main>
  );
}
