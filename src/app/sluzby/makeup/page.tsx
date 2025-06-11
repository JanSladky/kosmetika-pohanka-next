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
    src: "/services/makeup/img1.jpg",
    title: "",
    description: "",
  },
  {
    src: "/services/makeup/img2.jpg",
    title: "Akce Žena a život - makeup Astor (2010)",
    description: "Akce Žena a život - makeup Astor (2010)",
  },
  {
    src: "/services/makeup/img3.png",
    title: "Kapka naděje - koncert",
    description: "Kapka naděje - koncert",
  },
  {
    src: "/services/makeup/img4.jpg",
    title: "Líčení pro časopis Astor",
    description: "Líčení pro časopis Astor",
  },
  {
    src: "/services/makeup/img5.jpg",
    title: "Makeup - časopis Cosmopolitan",
    description: "Makeup - časopis Cosmopolitan",
  },
  {
    src: "/services/makeup/img6.jpg",
    title: "Makeup - časopis Cosmopolitan",
    description: "Makeup - časopis Cosmopolitan",
  },
  {
    src: "/services/makeup/img7.jpg",
    title: "Makeup - časopis Cosmopolitan",
    description: "Makeup - časopis Cosmopolitan",
  },
  {
    src: "/services/makeup/img8.jpg",
    title: "Makeup - časopis Cosmopolitan",
    description: "Makeup - časopis Cosmopolitan",
  },
  {
    src: "/services/makeup/img9.jpg",
    title: "Makeup - časopis Cosmopolitan",
    description: "Makeup - časopis Cosmopolitan",
  },
  {
    src: "/services/makeup/img10.jpg",
    title: "Makeup - den s Rimmel",
    description: "Makeup - den s Rimmel",
  },
  {
    src: "/services/makeup/img11.jpg",
    title: "Makeup pro fotografa",
    description: "Makeup pro fotografa",
  },
  {
    src: "/services/makeup/img12.jpg",
    title: "Makeup pro fotografa",
    description: "Makeup pro fotografa",
  },
  {
    src: "/services/makeup/img13.jpg",
    title: "Makeup pro fotografa",
    description: "Makeup pro fotografa",
  },
  {
    src: "/services/makeup/img14.jpg",
    title: "Makeup pro fotografa",
    description: "Makeup pro fotografa",
  },
  {
    src: "/services/makeup/img15.jpg",
    title: "Makeup pro fotografa",
    description: "Makeup pro fotografa",
  },
  {
    src: "/services/makeup/img16.jpg",
    title: "Miss univerzita - Praha 2012",
    description: "Miss univerzita - Praha 2012",
  },
  {
    src: "/services/makeup/img17.jpg",
    title: "Miss univerzita - Praha 2012",
    description: "Miss univerzita - Praha 2012",
  },
  {
    src: "/services/makeup/img18.jpg",
    title: "Miss univerzita - Praha 2012",
    description: "Miss univerzita - Praha 2012",
  },
  {
    src: "/services/makeup/img19.jpg",
    title: "Miss univerzita - Praha 2012",
    description: "Miss univerzita - Praha 2012",
  },
  {
    src: "/services/makeup/img20.jpg",
    title: "Proměna - studio 3",
    description: "Proměna - studio 3",
  },
  {
    src: "/services/makeup/img21.jpg",
    title: "Proměna - studio 3",
    description: "Proměna - studio 3",
  },
  {
    src: "/services/makeup/img22.jpg",
    title: "Proměna - studio 3",
    description: "Proměna - studio 3",
  },
  {
    src: "/services/makeup/img23.jpg",
    title: "Proměna - studio 3",
    description: "Proměna - studio 3",
  },
  {
    src: "/services/makeup/img24.jpg",
    title: "Proměna - studio 3",
    description: "Proměna - studio 3",
  },
  {
    src: "/services/makeup/img25.jpg",
    title: "Proměna final",
    description: "Proměna final",
  },
  {
    src: "/services/makeup/img26.jpg",
    title: "Proměnna Rimmel den",
    description: "Proměnna Rimmel den",
  },
  {
    src: "/services/makeup/img27.jpg",
    title: "Proměna studio 2",
    description: "Proměna studio 2",
  },
  {
    src: "/services/makeup/img28.jpg",
    title: "Proměna studio",
    description: "Proměna studio",
  },
  {
    src: "/services/makeup/img29.jpg",
    title: "Souboj nevěst Praha",
    description: "Souboj nevěst Praha",
  },
  {
    src: "/services/makeup/img30.jpg",
    title: "Svatební backstage",
    description: "Svatební backstage",
  },
  {
    src: "/services/makeup/img31.jpg",
    title: "Svatební",
    description: "Svatební",
  },
  {
    src: "/services/makeup/img32.jpg",
    title: "Svatební",
    description: "Svatební",
  },
  {
    src: "/services/makeup/img33.jpg",
    title: "Svatební",
    description: "Svatební",
  },
  {
    src: "/services/makeup/img34.jpg",
    title: "Svatební",
    description: "Svatební",
  },
  {
    src: "/services/makeup/img35.jpg",
    title: "Svatební",
    description: "Svatební",
  },
  {
    src: "/services/makeup/img36.jpg",
    title: "Svatební",
    description: "Svatební",
  },
  {
    src: "/services/makeup/img37.jpg",
    title: "Svatební",
    description: "Svatební",
  },
  {
    src: "/services/makeup/img38.jpg",
    title: "Svatební",
    description: "Svatební",
  },
  {
    src: "/services/makeup/img39.jpg",
    title: "Teta drogerie",
    description: "Teta drogerie",
  },
  {
    src: "/services/makeup/img40.jpg",
    title: "Backstage 3",
    description: "Backstage 3",
  },
  {
    src: "/services/makeup/img41.jpg",
    title: "Backstage",
    description: "Backstage",
  },
  {
    src: "/services/makeup/img42.jpg",
    title: "Blbej den - TV seznam",
    description: "Blbej den - TV seznam",
  },
  {
    src: "/services/makeup/img43.jpg",
    title: "Blbej den - TV seznam",
    description: "Blbej den - TV seznam",
  },
  {
    src: "/services/makeup/img44.jpg",
    title: "Blbej den - TV seznam",
    description: "Blbej den - TV seznam",
  },
  {
    src: "/services/makeup/img45.jpg",
    title: "Blbej den - TV seznam",
    description: "Blbej den - TV seznam",
  },
  {
    src: "/services/makeup/img46.jpg",
    title: "Důchodci spot pro VHV s.r.o.",
    description: "Důchodci spot pro VHV s.r.o.",
  },
  {
    src: "/services/makeup/img47.jpg",
    title: "Důchodci spot pro VHV s.r.o.",
    description: "Důchodci spot pro VHV s.r.o.",
  },
  {
    src: "/services/makeup/img48.jpg",
    title: "Důchodci spot pro VHV s.r.o.",
    description: "Důchodci spot pro VHV s.r.o.",
  },
  {
    src: "/services/makeup/img49.jpg",
    title: "Hloubka ostrosti - krátkometrážní film",
    description: "Hloubka ostrosti - krátkometrážní film",
  },
  {
    src: "/services/makeup/img50.jpg",
    title: "Hloubka ostrosti - krátkometrážní film",
    description: "Hloubka ostrosti - krátkometrážní film",
  },
  {
    src: "/services/makeup/img51.jpg",
    title: "Hloubka ostrosti - krátkometrážní film",
    description: "Hloubka ostrosti - krátkometrážní film",
  },
  {
    src: "/services/makeup/img52.jpg",
    title: "",
    description: "",
  },
  {
    src: "/services/makeup/img53.jpg",
    title: "Make-up - Modní přehlídka - Žatec - Moskva",
    description: "Make-up - Modní přehlídka - Žatec - Moskva",
  },
  {
    src: "/services/makeup/img54.jpg",
    title: "Omrzliny - maskérský kurz",
    description: "Omrzliny - maskérský kurz",
  },
  {
    src: "/services/makeup/img55.jpg",
    title: "Omrzliny - maskérský kurz",
    description: "Omrzliny - maskérský kurz",
  },
  {
    src: "/services/makeup/img56.jpg",
    title: "Smrtka a Oráč - film pro Mederův dům",
    description: "Smrtka a Oráč - film pro Mederův dům",
  },
  {
    src: "/services/makeup/img57.jpg",
    title: "Smrtka a Oráč - film pro Mederův dům",
    description: "Smrtka a Oráč - film pro Mederův dům",
  },
  {
    src: "/services/makeup/img58.jpg",
    title: "Backstage",
    description: "Backstage",
  },
  {
    src: "/services/makeup/img59.jpg",
    title: "Blbej den - TV seznam",
    description: "Blbej den - TV seznam",
  },
  {
    src: "/services/makeup/img60.jpg",
    title: "Blbej den - TV seznam",
    description: "Blbej den - TV seznam",
  },
];

export default function MakeupPage() {
  const [index, setIndex] = useState(-1);
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-left mb-8 text-gray-800">Make-up / maskérství</h1>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Nabízíme profesionální make-up a maskérské služby pro každou příležitost. Ať už potřebujete dokonalý make-up na svatbu, večírek, nebo speciální událost,
        nebo hledáte odborníka na filmové, divadelní nebo speciální efekty, jsme tu pro vás. Pracujeme s nejlepšími produkty a technikami, aby jsme vytvořili
        vzhled, který bude nejen krásný, ale také dlouhotrvající. Každý náš klient je pro nás jedinečný, a proto se zaměřujeme na individuální přístup, který
        zohledňuje vaše přání a potřeby. Objednejte se u nás a zažijte profesionální péči, která vás promění k dokonalosti.
      </p>
      <ServiceDetailButtons pricelistId="makeup" />
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
