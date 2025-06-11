"use client";

import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ReferenceCarousel from "@/components/ReferenceCarousel";

// Autoplay plugin – opravené typy
function AutoplayPlugin(slider: KeenSliderInstance) {
  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 4000);
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });

  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}

export default function ReferencePage() {
  // ✅ Pokud sliderRef nepoužíváš, napiš jen: `useKeenSlider(...)`
  useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
      },
    },
    [AutoplayPlugin]
  );

  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <section className="py-12 px-4 bg-white text-left">
        <h2 className="text-4xl font-bold text-left mb-8 text-gray-800">Reference</h2>
        <ReferenceCarousel />
      </section>
    </main>
  );
}
