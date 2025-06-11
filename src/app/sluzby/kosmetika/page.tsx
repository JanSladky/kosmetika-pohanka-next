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
    src: "/services/kosmetika/img1.jpg",
    title: "Provozovna",
    description: "Provozovna",
  },
  {
    src: "/services/kosmetika/img2.jpg",
    title: "Provozovna",
    description: "Provozovna",
  },
  {
    src: "/services/kosmetika/img3.jpg",
    title: "Provozovna",
    description: "Provozovna",
  },
  {
    src: "/services/kosmetika/img4.jpg",
    title: "Lash lifting řas",
    description: "Lash lifting řas",
  },
];

export default function KosmetikaPage() {
  const [index, setIndex] = useState(-1); // -1 = zavřeno

  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Kosmetika</h1>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed"></p>
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-8 leading-relaxed">
        <li>Nabízíme vám kosmetické ošetření exkluzivní značkovou kosmetikou Le Chaton obsahující to nejlepší z přírodních produktů.</li>
        <li>
          Provádíme efektivní přístrojové ošetření pleti pomocí IPL pulzního světla značky MEDISWISS - kosmetické ošetření přístrojem BELLEX 08 EXCELLENC -
          kyslíkové ošetření přístrojem OXYSTAR
        </li>
        <li>
          Zaměřujeme se především na ošetření problematické pleti a používáme vysoce účinnou kosmetiku NEOSTRATA. Vědecky vyvinutá a klinicky prokázaná péče o
          pleť, aplikovaná a doporučována dermatology k obnovení, vyhlazení a zdokonalení pleti.
        </li>
      </ul>
      <ServiceDetailButtons pricelistId="kosmetika" />
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-10">Fotogalerie</h2>

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
