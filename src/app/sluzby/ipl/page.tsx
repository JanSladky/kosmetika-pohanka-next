"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { LazyImage } from "../../../components/LazyImage";
import Skeleton from "../../../components/Skeleton";
import ServiceDetailButtons from "@/components/ServiceDetailButtons";

const images = [
  {
    src: "/services/ipl/img1.jpg",
    title: "Acne vulgaris",
    description: "",
  },
  {
    src: "/services/ipl/img2.jpg",
    title: "IPL přístroj",
    description: "",
  },
  {
    src: "/services/ipl/img3.jpg",
    title: "IPL přístroj",
    description: "",
  },
  {
    src: "/services/ipl/img4.jpg",
    title: "Ošetření akné",
    description: "",
  },
  {
    src: "/services/ipl/img5.jpg",
    title: "Ošetření akné",
    description: "",
  },
  {
    src: "/services/ipl/img6.jpg",
    title: "Ošetření akné",
    description: "",
  },
  {
    src: "/services/ipl/img7.png",
    title: "Redukce pigmentových skvrn",
    description: "",
  },
  {
    src: "/services/ipl/img8.png",
    title: "IPL Přístroj",
    description: "",
  },
  {
    src: "/services/ipl/img9.jpg",
    title: "Teleangiektáze - nos",
    description: "",
  },
];

export default function IPLPage() {
  const [index, setIndex] = useState(-1); // -1 = zavřeno

  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">IPL Mediswiss</h1>

      <div className="mb-10 flex justify-start">
        <video src="/video/ipl.mp4" controls className="w-full max-w-3xl rounded-lg shadow-lg" />
      </div>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        V našem kosmetickém studiu používáme přístroj IPL. Jedná se o nejnovější technologii pulzního světla DPL (dye pulse light), která má v dermatologii
        široké využití. Ošetření zlepšuje vzhled pleti klientů všech věkových kategorií. Jde o neinvazivní a téměř bezbolestnou metodu.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tímto ošetřením:</h2>

      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-10">
        <li>
          provádíme <strong className="font-semibold">fotorejuvenaci (fotoomlazení)</strong>, kde pulzní světlo proniká do dermis a aktivuje tvorbu kolagenu
        </li>
        <li>
          dochází k <strong className="font-semibold">redukci pigmentových a stařeckých skvrn</strong>
        </li>
        <li>
          zlepšuje se stav <strong className="font-semibold">aknózní pleti</strong>, sjednocují se barevné nerovnosti
        </li>
        <li>
          zlepšujeme stav rozšířených žilek (tzv. <strong className="font-semibold">teleangiektázie</strong>)
        </li>
        <li>
          účinná a trvalá <strong className="font-semibold">epilace</strong> i na těle
        </li>
      </ul>

      <p className="text-gray-700 mb-10 leading-relaxed">
        Samotný zákrok trvá cca 30–45 minut v závislosti na ošetřované oblasti. Doporučená kúra je 6–8 ošetření s rozestupem 3–4 týdnů. Vše závisí na
        individuální citlivosti pacienta.
      </p>
       <ServiceDetailButtons pricelistId="ipl" />

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fotogalerie</h2>

      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-7 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="relative aspect-[4/3] overflow-hidden rounded shadow hover:scale-105 transition-transform"
          >
            <LazyImage
              src={img.src}
              alt={img.title}
              objectFit="cover"
              className="w-full h-full object-cover"
              loading="lazy"
            />
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