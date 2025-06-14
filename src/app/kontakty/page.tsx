"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function KontaktyPage() {
  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=100057688155180",
      icon: <FaFacebookF className="text-white text-sm" />,
      alt: "Facebook",
      bg: "bg-[#1877F2]",
    },
    {
      href: "https://www.instagram.com/kamilpohanka?igsh=Z29sY2FrbWZyNG5t",
      icon: <FaInstagram className="text-white text-sm" />,
      alt: "Instagram",
      bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    },
  ];
  const kontakty = [
    {
      name: "Kamil Pohanka – kosmetické studio",
      address: "Otokara Březiny 2895, Žatec 43801",
      phone: "+420 776 784 666",
      email: "kamilp@centrum.cz",
      ico: "86827464",
      map: "https://mapy.cz/zakladni?q=Otokara%20B%C5%99eziny%202895%2C%20%C5%BDatec%2043801&source=addr&id=9966994&ds=1&x=13.5418714&y=50.3197408&z=17",
    },
    {
      name: "Eva Pohanková – kosmetické studio",
      address: "Otokara Březiny 2895, Žatec 43801",
      phone: "+420 606 837 095",
      email: "pohankovaevicka@gmail.com",
      ico: "68453434",
      map: "https://mapy.cz/zakladni?q=Otokara%20B%C5%99eziny%202895%2C%20%C5%BDatec%2043801&source=addr&id=9966994&ds=1&x=13.5418714&y=50.3197408&z=17",
    },
    {
      name: "MUDr. Marta Pohanková – Dermatovenerologie – kožní",
      address: "Poliklinika Žatec – Husova 2796, Žatec 43801",
      phone: "414110673",
      email: null,
      ico: null,
      map: "https://mapy.cz/zakladni?q=Husova%202796%2C%20%C5%BDatec%2043801&source=addr&id=9966923&ds=1&x=13.5379822&y=50.3195439&z=17",
    },
  ];

  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-left mb-10 text-gray-800">Kontakty</h1>
        <div className="flex justify-start gap-4 mt-6 mb-8">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.bg} rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition`}
              aria-label={link.alt}
            >
              {link.icon}
            </Link>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {kontakty.map((k, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
              <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-800">{k.name}</h2>
                <div className="flex items-start gap-2 mb-2 text-gray-700">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>{k.address}</span>
                </div>
                <div className="flex items-start gap-2 mb-2 text-blue-600">
                  <Phone className="w-4 h-4 mt-1" />
                  <a href={`tel:${k.phone}`} className="underline">
                    {k.phone}
                  </a>
                </div>
                {k.email && (
                  <div className="flex items-start gap-2 mb-2 text-blue-600">
                    <Mail className="w-4 h-4 mt-1" />
                    <a href={`mailto:${k.email}`} className="underline">
                      {k.email}
                    </a>
                  </div>
                )}
                {k.ico && <p className="text-sm text-gray-500 mb-2">IČO: {k.ico}</p>}
              </div>
              <div>
                <a href={k.map} target="_blank" className="text-blue-600 underline text-sm inline-flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Mapa
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
