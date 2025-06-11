"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const references = [
  {
    text:
      "Kamilovi Pohankovi chodím na kosmetiku již 13 let. Pravidelně každý měsíc se setkáváme. Je vždy zdvořilý, milý a přátelský. Mám vyzkoušeno řadu služeb. Pravidelně si nechávám upravovat obočí, obarvit řasy a čas od času využiji i trvalou. Během let jsem získala důvěru a nechala si od něj vytetovat obočí. Musím říci, že jsem s výsledkem byla velmi spokojená. Má výborný cit pro jemnost a přirozenou krásu. Výsledek byl perfektní. S věkem mi přibývají vrásky a tak jsem využila i fotoomlazení. Výsledky jsou nejvíce viditelné čtvrtý den od zákroku a vydrží asi 3 měsíce. Zprvu jsem se jako každá žena před mužem styděla, ale jsem věrná zákaznice už 13 let. Za sebe mohu pana Pohanku všem doporučit.",
    author: "Bc. Kateřina Černá - Žatec",
  },
  {
    text:
      "Top péče pro vaši pokožku. Tak definuji svoji zkušenost se službami pana Pohanky. Přišla jsem s rozsáhlým akné po celém obličeji, zvláště na tvářích. Pan Pohanka mi nejenže dal naději, že ošetření pomocí IPL zmírní mé obtíže, ale nakonec je úplně odstranilo. Pestrá nabídka služeb, kvalita na nejvyšší úrovni, příjemné prostředí. O tom nemůžete jen číst, to musíte zažít.",
    author: "Hana Eichelmannová - Žatec",
  },
  {
    text:
      "Jsem jednou z prvních Kamilových zákaznic. Dodnes ho pravidelně navštěvuji a jsem velmi spokojená. Hezké prostředí, vřelý a milý přístup, kvalitní služby a poradenství. Rozhodně návštěvu doporučuji.",
    author: "Jitka Nelibová - Žatec",
  },
  {
    text:
      "Několikrát jsem navštívil kosmetický salon Kamila Pohanky v Žatci. Toto pracoviště přináší ne jenom odbornou péči o pleť a vzhled, ale také skvělou relaxační atmosféru. Kamil je kosmetický specialista, zároveň však též špičkový vizážista a maskér. Ve spolupráci se svojí maminkou Evou Pohankovou, tvoří velmi sofistikovaný tým. Odborné profesionální služby se speciálními produkty, moderními přístroji a příjemné prostředí, mohu vřele doporučit. Cesta do Žatce za osobním přístupem Kamila Pohanky a jeho maminky Evy, se zcela určitě vyplatí...",
    author: "Bobo Sobotka... filmový maskér a výtvarník - Praha",
  },
  {
    text:
      "Salon jsme navštívili s dcerou na doporučení. Chodíme pravidelně na IPL ošetření. A jsme velice spokojeni. Pomohlo nám to vyřešit problémy s hormonálním akné na bradě a s rozšířenými žilkami v oblasti nosu. Velmi příjemné prostředí a profesionální přístup p. Pohanky. Pro dokonalé výsledky je třeba vytrvat a chodit pravidelně.",
    author: "Vacinková - Žatec",
  },
];

function AutoplayPlugin(slider: any) {
  let timeout: any;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 15000);
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

export default function ReferenceCarousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
    },
    [AutoplayPlugin]
  );

  return (
    <div
      ref={sliderRef}
      className="keen-slider max-w-5xl mx-auto h-[300px]" // pevná výška celé oblasti
    >
      {references.map((ref, i) => (
        <div key={i} className="keen-slider__slide h-full flex flex-col justify-between p-6 bg-gray-100 rounded-md shadow">
          <p className="text-gray-700 italic mb-6 leading-relaxed overflow-y-auto">„{ref.text}“</p>
          <p className="text-gray-500 text-sm font-medium text-right mt-auto">{ref.author}</p>
        </div>
      ))}
    </div>
  );
}
