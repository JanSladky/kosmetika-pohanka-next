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
    src: "/services/radiolifting/img6.jpg",
    title: "",
    description: "",
  },
];

export default function RadioliftingPage() {
  const [index, setIndex] = useState(-1); // -1 = zavřeno

  return (
     <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-left mb-8 text-gray-800">Radiofrekvenční lifting</h1>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        je pokročilá neinvazivní metoda, která účinně bojuje proti stárnutí pleti. Tento ošetření využívá radiofrekvenční energii k zahřátí hlubších vrstev
        pokožky, což stimuluje tvorbu kolagenu a elastinu. Výsledkem je viditelně pevnější, hladší a mladistvější pleť, bez nutnosti chirurgického zákroku.
        Radiofrekvenční lifting je ideální pro zpevnění kontur obličeje, redukci vrásek a zlepšení celkové textury pleti. Procedura je rychlá, bezbolestná a
        nevyžaduje žádnou dobu na zotavení. Dopřejte si přirozený lifting obličeje, který vám vrátí svěžest a mladistvý vzhled.
      </p>
     
 <ServiceDetailButtons pricelistId="radiolifting" />
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
