"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { LazyImage } from "../../../components/LazyImage";

const images = [
  {
    src: "/services/pmu/img1.jpg",
    title: "Horní a dolní linky - slabé",
    description: "Horní a dolní linky - slabé",
  },
  {
    src: "/services/pmu/img2.jpg",
    title: "Horní a dolní linky - silné",
    description: "Horní a dolní linky - silné",
  },
  {
    src: "/services/pmu/img3.jpg",
    title: "Horní a dolní linky",
    description: "Horní a dolní linky",
  },
  {
    src: "/services/pmu/img4.jpg",
    title: "Horní a dolní linky",
    description: "Horní a dolní linky",
  },
  {
    src: "/services/pmu/img5.jpg",
    title: "Horní linky silné",
    description: "Horní linky silné",
  },
  {
    src: "/services/pmu/img6.png",
    title: "Kombinace pudrového a vláskovaného obočí",
    description: "Kombinace pudrového a vláskovaného obočí",
  },
  {
    src: "/services/pmu/img7.jpg",
    title: "Kontura a výplň rtů",
    description: "Kontura a výplň rtů",
  },
  {
    src: "/services/pmu/img8.jpg",
    title: "Permanentní linky",
    description: "Permanentní linky",
  },
  {
    src: "/services/pmu/img9.jpg",
    title: "Před a po - horní a dolní linky",
    description: "Před a po - horní a dolní linky",
  },
  {
    src: "/services/pmu/img9.jpg",
    title: "Vláskování obočí",
    description: "Vláskování obočí",
  },
];

export default function PMUPage() {
  const [index, setIndex] = useState(-1); // -1 = zavřeno

  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-left mb-8 text-gray-800">Permanentní make-up</h1>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        je skvělou volbou pro ty, kteří chtějí vypadat upraveně a přirozeně každý den bez nutnosti denního líčení. Naše profesionální služby permanentního
        make-upu zahrnují úpravu obočí, očních linek a rtů, přičemž klademe důraz na preciznost a bezpečnost. Používáme pouze kvalitní pigmenty, které zaručují
        dlouhotrvající a přirozený vzhled.
      </p>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Permanentní make-up vám ušetří čas, zvýší sebevědomí a zdůrazní vaši přirozenou krásu. Objednejte se na konzultaci a zjistěte, jak vám můžeme pomoci
        dosáhnout perfektního vzhledu bez námahy.
      </p>

      
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
