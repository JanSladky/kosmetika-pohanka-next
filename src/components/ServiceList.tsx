"use client";
import Link from "next/link";
import ServiceCard from "./ServiceCard";

const services = [
  { id: "ipl", title: "IPL Mediswiss", image: "/services/ipl.jpg" },
  { id: "makeup", title: "Make-up", image: "/services/makeup.jpg" },
  { id: "kosmetika", title: "Kosmetika", image: "/services/kosmetika.jpg" },
  { id: "pmu", title: "Permanentní make-up", image: "/services/permanentnimakeup.jpg" },
  { id: "elektrokoagulace", title: "Elektrokoagulace", image: "/services/elektrokoagulace.jpg" },
  { id: "radiolifting", title: "Radiofrekvenční lifting", image: "/services/radiolifting.jpg" },
];

export default function ServiceList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
      {services.map((service) => (
        <Link key={service.id} href={`/sluzby/${service.id}`} className="block">
          <ServiceCard title={service.title} imageSrc={service.image} />
        </Link>
      ))}
    </div>
  );
}
