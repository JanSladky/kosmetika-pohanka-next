"use client";

import Link from "next/link";

interface Props {
  pricelistId: string; // např. "ipl", "makeup", "kosmetika" atd.
}

export default function ServiceDetailButtons({ pricelistId }: Props) {
  return (
    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/sluzby">
        <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600">
          ← Zpět na přehled služeb
        </button>
      </Link>
      <Link href={`/cenik/${pricelistId}`}>
        <button className="bg-[#9FBEF4]  text-black px-6 py-2 rounded hover:bg-[#7FA9EC]">
          Zobrazit ceník služby →
        </button>
      </Link>
    </div>
  );
}