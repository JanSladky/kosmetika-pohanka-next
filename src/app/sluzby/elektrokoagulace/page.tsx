"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { LazyImage } from "../../../components/LazyImage";
import ServiceDetailButtons from "@/components/ServiceDetailButtons";

const images = [
  {
    src: "/services/elektrokoagulace/img5.jpg",
    title: "Elektrokoagulace",
    description: "Elektrokoagulace",
  },
];

export default function ElektrokoagulacePage() {
  const [index, setIndex] = useState(-1); // -1 = zavřeno

  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-left mb-8 text-gray-800">Elektrokoagulace</h1>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        je moderní a účinná metoda pro odstranění drobných kožních nedokonalostí, jako jsou pavoučkové žilky, fibromy, pigmentové skvrny nebo kožní výrůstky.
        Tento zákrok je rychlý, minimálně invazivní a zanechává pleť hladkou a sjednocenou. Při elektrokoagulaci se využívá jemný elektrický proud, který přesně
        cílí na problematické oblasti, aniž by poškozoval okolní tkáň. Výsledkem je viditelně zdravější a krásnější pokožka. Dopřejte své pleti profesionální
        péči a zbavte se nežádoucích nedokonalostí rychle a bezpečně. Objednejte se na konzultaci a zjistěte, jak vám může elektrokoagulace pomoci ke krásnější
        pleti.
      </p>
      <ServiceDetailButtons pricelistId="elektrok" />
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fotogalerie</h2>

      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-7 gap-4">
        {images.map((img, i) => (
          <button key={i} onClick={() => setIndex(i)} className="relative aspect-[4/3] overflow-hidden rounded shadow hover:scale-105 transition-transform">
            <LazyImage src={img.src} alt={img.title} objectFit="cover" className="w-full h-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images}
        index={index}
        plugins={[Captions]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "center",
          descriptionMaxLines: 3,
        }}
      />
    </main>
  );
}
