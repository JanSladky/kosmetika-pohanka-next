"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    id: "ipl",
    title: "IPL Mediswiss",
    image: "/services/ipl.jpg",
  },
  {
    id: "makeup",
    title: "Make-up / Maskérství",
    image: "/services/makeup.jpg",
  },
  {
    id: "kosmetika",
    title: "Kosmetika",
    image: "/services/kosmetika.jpg",
  },
  {
    id: "pmu",
    title: "Permanentní make-up",
    image: "/services/permanentnimakeup.jpg",
  },
  {
    id: "elektrok",
    title: "Elektrokoagulace",
    image: "/services/elektrokoagulace.jpg",
  },
  {
    id: "radiolifting",
    title: "Radiofrekvenční lifting",
    image: "/services/radiolifting.jpg",
  },
];

export default function PricelistPage() {
  return (
    <main className="px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Ceník</h1>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        Vyberte si konkrétní oblast služby pro zobrazení detailního cenníku. Každá sekce obsahuje rozpis kategorií a cen dle typu ošetření.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/cenik/${cat.id}`}
            className="group block rounded shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.title}
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center py-3 bg-white">
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                {cat.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}