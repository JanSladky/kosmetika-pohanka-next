"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { LazyImage } from "../../components/LazyImage";

const images = [
  {
    src: "/images/art/img1.jpg",
    title: "Bystřina v podzimním rouchu",
    description: "Bystřina v podzimním rouchu",
  },
  {
    src: "/images/art/img2.jpg",
    title: "Dominanta krajiny chemele - není na prodej",
    description: "Dominanta krajiny chemele - není na prodej",
  },
  {
    src: "/images/art/img3.jpg",
    title: "Český Krumlov",
    description: "Český Krumlov",
  },
  {
    src: "/images/art/img4.jpg",
    title: "Dramatické středohoří (2016)",
    description: "Dramatické středohoří (2016)",
  },
  {
    src: "/images/art/img5.jpg",
    title: "Fascinující dolomity (30x40)",
    description: "Fascinující dolomity (30x40)",
  },
  {
    src: "/images/art/img6.jpg",
    title: "Gloriet v zimě (2015)",
    description: "Gloriet v zimě (2015)",
  },
  {
    src: "/images/art/img7.jpg",
    title: "Karlštejn 30x50(2015)",
    description: "Karlštejn 30x50(2015)",
  },
  {
    src: "/images/art/img8.jpg",
    title: "Kněžská brána (2015)",
    description: "Kněžská brána (2015)",
  },
  {
    src: "/images/art/img9.jpg",
    title: "Lesní zákoutí (2016)",
    description: "Lesní zákoutí (2016)",
  },
  {
    src: "/images/art/img10.jpg",
    title: "Loket v zimním spánku (2020) 60x40",
    description: "Loket v zimním spánku (2020) 60x40",
  },
  {
    src: "/images/art/img11.jpg",
    title: "Majestátný Loket (2020) 50x30",
    description: "Majestátný Loket (2020) 50x30",
  },
  {
    src: "/images/art/img12.jpg",
    title: "Malebné podhůří (60x40)",
    description: "Malebné podhůří (60x40)",
  },
  {
    src: "/images/art/img13.jpg",
    title: "Odpolední světlohra (30x40)",
    description: "Odpolední světlohra (30x40)",
  },
  {
    src: "/images/art/img14.jpg",
    title: "Pražský hrad (2015) 95x65",
    description: "Pražský hrad (2015) 95x65",
  },
  {
    src: "/images/art/img15.jpg",
    title: "Střechy starého města pražského - PRODÁNO",
    description: "Střechy starého města pražského - PRODÁNO",
  },
  {
    src: "/images/art/img16.jpg",
    title: "V zamyšlení 30x30",
    description: "V zamyšlení 30x30",
  },
  {
    src: "/images/art/img17.jpg",
    title: "Vlídné kotviště (2016) 60x40",
    description: "Vlídné kotviště (2016) 60x40",
  },
  {
    src: "/images/art/img18.jpg",
    title: "Zastavení u kašny - NA PRODEJ",
    description: "Zastavení u kašny - NA PRODEJ",
  },
  {
    src: "/images/art/img19.jpg",
    title: "Zimní idyla 60x40",
    description: "Zimní idyla 60x40",
  },
  {
    src: "/images/art/img20.jpg",
    title: "Zvěčnění minulých časů(2021) - NENÍ NA PRODEJ",
    description: "Zvěčnění minulých časů(2021) - NENÍ NA PRODEJ",
  },
  {
    src: "/images/art/img21.jpg",
    title: "Žatecké nokturno (2023) 40x50 PRODÁNO",
    description: "Žatecké nokturno (2023) 40x50 PRODÁNO",
  },
  {
    src: "/images/art/img22.jpg",
    title: "Žatecké nokturno II (2023) 40x50",
    description: "Žatecké nokturno II (2023) 40x50",
  },
  {
    src: "/images/art/img23.jpg",
    title: "Žatecké nokturno III (2023) 30x40 - NENÍ NA PRODEJ",
    description: "Žatecké nokturno III (2023) 30x40 - NENÍ NA PRODEJ",
  },
];

export default function ArtPage() {
  const [index, setIndex] = useState(-1);
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <section className="py-12 px-4 bg-white text-left">
        {/* Carousel referencí */}
        <h2 className="text-4xl font-bold text-left mb-8 text-gray-800">Art</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Má umělecká dráha mě vedla přes studium na místním gymnáziu a poté na ekonomické fakultě ZČU k soukromému podnikání v oboru kosmetické služby a
          vizážistika. Již od útlého věku jsem částečně inklinoval k rozličným výtvarným činnostem, jimiž byly například kreslení, malování, kombinované
          techniky či intarzování. V tomto smyslu na mě měl nepochybný vliv jeden z pradědů, který za svůj život vytvořil bezpočet malířských děl, ale též můj
          stejně tvůrčí děd a ostatně i otec s matkou. Teprve před několika málo lety jsem dospěl k rozhodnutí, že část svého volného času se budu smysluplně a
          intenzivně věnovat olejomalbě, a to s důrazem kladeným na jemnou propracovanost detailů a sugestivní harmonii barev. Převažujícím námětem mých obrazů
          se stala zvláště místa, k nimž mám vyhraněnou subjektivní emocionální vazbu.
        </p>
      </section>
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
