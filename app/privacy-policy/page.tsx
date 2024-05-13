"use client";

import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div
      className="container mx-auto sm:py-12 py-16 sm:px-40 px-14 text-white bg-black"
      style={{
        position: "absolute",
        zIndex: "9999",
        top: 0,
        left: 0,
        width: "100%",
        minHeight: "100%",
      }}
    >
      <h2 className="text-3xl font-semibold mb-4">Polityka prywatności</h2>
      <p className="sm:text-lg leading-relaxed mb-8">
        Niniejsza Polityka prywatności określa zasady przetwarzania
        i&nbsp;ochrony danych osobowych przekazanych przez Użytkowników
        w&nbsp;związku z&nbsp;korzystaniem przez nich z&nbsp;usług dostępnych
        w&nbsp;serwisie internetowym oraz wyjaśnia sposób, w&nbsp;jaki są
        wykorzystywane i&nbsp;chronione informacje osobiste. Polityka
        prywatności ma zastosowanie do wszystkich danych osobowych
        przetwarzanych przez administratora, z&nbsp;wyjątkiem sytuacji,
        w&nbsp;których stosowane są inne zasady ochrony danych osobowych,
        przedstawiane np. w&nbsp;umowie zawartej z&nbsp;Użytkownikiem.
      </p>
      <p className="text-lg leading-relaxed mb-8">
        Polityka prywatności ma zastosowanie do wszystkich danych osobowych
        przetwarzanych przez nasz zespół administracyjny. Wierzymy
        w&nbsp;znaczenie ochrony prywatności każdego użytkownika, dlatego też
        podejmujemy wszelkie środki ostrożności i&nbsp;działania zgodnie
        z&nbsp;obowiązującymi przepisami prawa dotyczącymi ochrony danych
        osobowych.
      </p>
      <h2 className="text-xl font-semibold mb-4">Podstawa prawna</h2>
      <p className="text-lg leading-relaxed mb-8">
        Polityka prywatności opiera się na zasadach określonych
        w&nbsp;Rozporządzeniu Parlamentu Europejskiego i&nbsp;Rady (UE) 2016/679
        z&nbsp;dnia 27 kwietnia 2016 r., które znane jest również jako RODO
        (Ogólne Rozporządzenie o&nbsp;Ochronie Danych). RODO jest kluczowym
        aktem prawnym dotyczącym ochrony danych osobowych w&nbsp;Unii
        Europejskiej, którego celem jest zapewnienie spójnych standardów ochrony
        danych osobowych dla obywateli UE oraz stworzenie warunków
        umożliwiających swobodny przepływ danych wewnątrz jednolitego rynku
        europejskiego.
      </p>
      <p className="text-lg leading-relaxed mb-8">
        Dokument ten ustanawia szereg przepisów dotyczących zbierania,
        przetwarzania i&nbsp;przechowywania danych osobowych, a&nbsp;także
        określa prawa jednostek, których dane są przetwarzane.
      </p>
      <Link href="/" passHref>
        <span className="py-2 button-primary text-center text-white cursor-pointer rounded-lg px-4 max-w-[200px]">
          Powrót do strony głównej
        </span>
      </Link>
    </div>
  );
};

export default PrivacyPolicy;
