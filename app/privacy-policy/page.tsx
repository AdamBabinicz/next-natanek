import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div
      className="container mx-auto sm:py-12 py-16 sm:px-40 px-14 text-white bg-black"
      style={{ position: "relative", zIndex: "9999" }}
    >
      <h2 className="text-3xl font-semibold mb-4">Polityka prywatności</h2>
      <p className="text-lg leading-relaxed mb-8">
        Niniejsza Polityka prywatności określa zasady przetwarzania i ochrony
        danych osobowych przekazanych przez Użytkowników w związku z
        korzystaniem przez nich z usług dostępnych w serwisie internetowym oraz
        wyjaśnia sposób, w jaki są wykorzystywane i chronione informacje
        osobiste. Polityka prywatności ma zastosowanie do wszystkich danych
        osobowych przetwarzanych przez administratora, z wyjątkiem sytuacji, w
        których stosowane są inne zasady ochrony danych osobowych, przedstawiane
        np. w umowie zawartej z Użytkownikiem.
      </p>
      <p className="text-lg leading-relaxed mb-8">
        Polityka prywatności opiera się na zasadach określonych w Rozporządzeniu
        Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r.
        w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
        osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia
        dyrektywy 95/46/WE (określane jako &quot;RODO&quot; lub &quot;Ogólne
        Rozporządzenie o Ochronie Danych&quot;).
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
