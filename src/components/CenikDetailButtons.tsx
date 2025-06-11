"use client";

import Link from "next/link";

export default function CenikDetailButtons() {
  return (
    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/cenik">
        <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition">← Zpět na rozcestník ceníku</button>
      </Link>
      <Link href="/sluzby">
        <button className="bg-[#9FBEF4]  text-black px-6 py-2 rounded hover:hover:bg-[#7FA9EC] transition">← Zpět na přehled služeb</button>
      </Link>
    </div>
  );
}
