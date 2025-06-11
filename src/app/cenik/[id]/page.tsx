"use client";
import React from "react";
import AccordionSection from "@/components/AccordionSection";
import Link from "next/link";
import { notFound } from "next/navigation";
import CenikDetailButtons from "@/components/CenikDetailButtons";

const ceniky: Record<
  string,
  {
    title: string;
    description?: string;
    sections: {
      title: string;
      items: { name: string; price: string }[];
    }[];
  }
> = {
  ipl: {
    title: "IPL Mediswiss",
    description: "Ošetření přístrojem mediswiss opt ipl e-light dpl",
    sections: [
      {
        title: "Fotorejuvenace",
        items: [
          { name: "Celý obličej", price: "1000 Kč" },
          { name: "Krk", price: "700 Kč" },
          { name: "Dekolt", price: "1000 Kč" },
          { name: "Obě ruce", price: "1500 Kč" },
          { name: "Celý obličej - krk - dekolt", price: "2500 Kč" },
        ],
      },
      {
        title: "Ošetření pigmentových skvrn",
        items: [
          { name: "Celý obličej", price: "1000 Kč" },
          { name: "Tváře", price: "800 Kč" },
          { name: "Čelo", price: "500 Kč" },
          { name: "Nos", price: "1500 Kč" },
          { name: "Celý obličej - krk - dekolt", price: "2500 Kč" },
        ],
      },
      {
        title: "Radiofrekvenční lifting",
        items: [
          { name: "Celý obličej", price: "800 Kč" },
          { name: "Oční okolí", price: "300 Kč" },
        ],
      },
      {
        title: "Fotoepilace",
        items: [
          { name: "Horní ret", price: "300 Kč" },
          { name: "Brada", price: "500 Kč" },
          { name: "Tváře", price: "1000 Kč" },
          { name: "Krk", price: "500 Kč" },
          { name: "Mezi obočím", price: "200 Kč" },
          { name: "Hrudník", price: "2500 Kč" },
          { name: "Břicho", price: "2500 Kč" },
          { name: "Ramena", price: "1500 Kč" },
          { name: "Podpaždí", price: "750 Kč" },
          { name: "Celé ruce", price: "1500 Kč" },
          { name: "Předloktí", price: "2500 Kč" },
          { name: "Třísla", price: "1500 Kč" },
          { name: "Stehna", price: "3000 Kč" },
          { name: "Lýtka", price: "2500 Kč" },
          { name: "Celé nohy", price: "5000 Kč" },
          { name: "Hýžď", price: "2000 Kč" },
          { name: "Záda - horní část", price: "1000 Kč" },
          { name: "Záda - dolní část", price: "2500 Kč" },
          { name: "Záda - celá", price: "5000 Kč" },
          { name: "Epilace celého těla", price: "8000 Kč" },
        ],
      },
      {
        title: "Ošetření akné",
        items: [
          { name: "Celý obličej", price: "1500 Kč" },
          { name: "Brada", price: "500 Kč" },
          { name: "Tváře", price: "800 Kč" },
          { name: "Čelo", price: "500 Kč" },
          { name: "Krk", price: "700 Kč" },
          { name: "Dekolt", price: "1000 Kč" },
          { name: "Záda", price: "2000 Kč" },
          { name: "Ramena", price: "1500 Kč" },
        ],
      },
      {
        title: "Ošetření teleangiektáze",
        items: [
          { name: "Celý obličej", price: "1000 Kč" },
          { name: "Tváře", price: "800 Kč" },
          { name: "Krk", price: "700 Kč" },
          { name: "Nos", price: "500 Kč" },
          { name: "Obě stehna", price: "2500 Kč" },
          { name: "Obě lýtka", price: "1700 Kč" },
        ],
      },
    ],
  },
  makeup: {
    title: "Makeup / maskérství",
    sections: [
      {
        title: "Make-up",
        items: [
          { name: "Denní líčení", price: "700 Kč" },
          { name: "Večerní líčení", price: "900 Kč" },
          { name: "Zkouška", price: "500 Kč" },
          { name: "Svatební líčení", price: "1200 Kč" },
          { name: "Svatební líčení - zkouška", price: "700 Kč" },
          { name: "Svatební líčení - včetně zkoušky", price: "1700 Kč" },
          { name: "Svatební líčení - včetně zkoušky - nalepení PM řas", price: "2400 Kč" },
          { name: "Svatební líčení - včetně zkoušky - nalepení řas v celku", price: "2000 Kč" },
          { name: "Svatební líčení - včetně zkoušky - nalepení řas trsy", price: "2000 Kč" },
          { name: "Svatební líčení - svatebčané", price: "700 Kč" },
          { name: "Svatební líčení - ženich", price: "300 Kč" },
          { name: "Líčení - víkend", price: "1200 Kč" },
          { name: "Foto make-up", price: "1000 Kč" },
          { name: "Poradenství v líčení a péče o pleť - 60 min", price: "600 Kč" },
          { name: "Doprava 1 km", price: "12 Kč" },
        ],
      },
    ],
  },
  kosmetika: {
    title: "Kosmetika",
    sections: [
      {
        title: "Obočí a řasy",
        items: [
          { name: "Barvení obočí", price: "90 Kč" },
          { name: "Úprava obočí", price: "100 Kč" },
          { name: "Barvení řas", price: "90 Kč" },
          { name: "Lash lifting řas", price: "590 Kč" },
          { name: "Permanentní prodlužování řas", price: "890 Kč" },
          { name: "Doplnění řas 30 - 60 min", price: "450 Kč" },
          { name: "Lepení řasy - trsy", price: "350 Kč" },
        ],
      },
      {
        title: "Depilace voskem",
        items: [
          { name: "Depilace nad horním rtem", price: "70 Kč" },
          { name: "Depilace brady", price: "80 Kč" },
          { name: "Depilace krku", price: "150 Kč" },
          { name: "Depilace tváře", price: "100 Kč" },
          { name: "Depilace celé ruky", price: "230 Kč" },
          { name: "Depilace poloviny ruky", price: "100 Kč" },
          { name: "Depilace podpaždí", price: "90 Kč" },
          { name: "Depilace nohou", price: "280 Kč" },
          { name: "Parafínová lázeň rukou", price: "250 Kč" },
        ],
      },
      {
        title: "Kosmetika - základní úkony",
        items: [
          { name: "Odlíčení", price: "20 Kč" },
          { name: "Depilace brady", price: "80 Kč" },
          { name: "Depilace krku", price: "150 Kč" },
          { name: "Depilace tváře", price: "100 Kč" },
          { name: "Depilace celé ruky", price: "230 Kč" },
          { name: "Depilace poloviny ruky", price: "100 Kč" },
          { name: "Depilace podpaždí", price: "90 Kč" },
          { name: "Depilace nohou", price: "280 Kč" },
          { name: "Parafínová lázeň rukou", price: "250 Kč" },
        ],
      },
      {
        title: "Kompletní kosmetické ošetření",
        items: [
          { name: "Odlíčení pletí", price: "" },
          { name: "Úprava obočí", price: "" },
          { name: "Barvení obočí a řas", price: "" },
          { name: "Peeling", price: "" },
          { name: "Masáž obličeje a dekoltu", price: "" },
          { name: "Hloubkové čištění", price: "" },
          { name: "Ozonizace", price: "" },
          { name: "Elektrolifting", price: "" },
          { name: "Kyslíkové ošetření", price: "" },
          { name: "Aplikace séra", price: "" },
          { name: "Pleťová maska", price: "" },
          { name: "Závěrečný krém", price: "" },
          { name: "Konečná úprava", price: "" },
          { name: "Denní makeup", price: "" },
          { name: "Celkem", price: "1190 Kč" },
        ],
      },
      {
        title: "Ošetření přístrojem Bellex 08 Excellens",
        items: [
          { name: "Ozonizace pleti", price: "150 Kč" },
          { name: "Elektrolifting pleti", price: "190 Kč" },
          { name: "Nepřímá masáž", price: "200 Kč" },
          { name: "Brossage pleti", price: "80 Kč" },
          { name: "Galvanizace - hloubková hydratace", price: "200 Kč" },
        ],
      },
      {
        title: "Chemický peeling",
        items: [
          { name: "Chemický peeling", price: "790 Kč" },
          { name: "Retinol peeling", price: "890 Kč" },
        ],
      },
      {
        title: "Ošetření přístrojem Oxystar",
        items: [{ name: "Kyslíkové ošetření - 15 minut", price: "100 Kč" }],
      },
    ],
  },
  pmu: {
    title: "Permanentní make-up",
    sections: [
      {
        title: "Permanentní make-up",
        items: [
          { name: "Spodní linky", price: "1400 Kč" },
          { name: "Horní linky - slabé", price: "1800 Kč" },
          { name: "Horní linky - silné", price: "2400 Kč" },
          { name: "Horní i dolní linky", price: "3200 Kč" },
          { name: "Obočí stínování", price: "3300 Kč" },
          { name: "Obočí vláskování", price: "3300 Kč" },
          { name: "Kontura rtů + výplň", price: "4000 Kč" },
          { name: "Kontura rtů", price: "3600 Kč" },
          { name: "Korekce po pm", price: "400 Kč" },
        ],
      },
    ],
  },
  elektrok: {
    title: "Elektrokoagulace",
    sections: [
      {
        title: "Odstranění kožních útvarů",
        items: [{ name: "Fibromy, mílie", price: "500 až 700 Kč" }],
      },
    ],
  },
  radiolifting: {
    title: "Radiofrekvenční lifting",
    sections: [
      {
        title: "Radiofrekvenční ošetření",
        items: [
          { name: "Celý obličej", price: "800 Kč" },
          { name: "Oční okolí", price: "300 Kč" },
        ],
      },
    ],
  },
};

export default function CenikDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const cenik = ceniky[id];

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">{cenik.title}</h1>
      {cenik.description && <p className="text-lg text-center text-gray-600 mb-10">{cenik.description}</p>}

      {cenik.sections.map((section) => (
        <AccordionSection key={section.title} title={section.title}>
          <ul className="divide-y divide-gray-200 bg-gray-50 rounded shadow">
            {section.items.map((item, index) => (
              <li key={index} className="flex justify-between px-4 py-3">
                <span>{item.name}</span>
                <span className="font-medium">{item.price}</span>
              </li>
            ))}
          </ul>
        </AccordionSection>
      ))}
      <CenikDetailButtons />
    </main>
  );
}
