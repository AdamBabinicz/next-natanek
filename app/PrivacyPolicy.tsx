import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-4">Polityka prywatności</h2>
      <p className="text-lg leading-relaxed">
        Niniejsza Polityka prywatności określa zasady przetwarzania i ochrony
        danych osobowych przekazanych przez Użytkowników w związku z
        korzystaniem przez nich z usług dostępnych w serwisie internetowym oraz
        wyjaśnia sposób, w jaki są wykorzystywane i chronione informacje
        osobiste. Polityka prywatności ma zastosowanie do wszystkich danych
        osobowych przetwarzanych przez administratora, z wyjątkiem sytuacji, w
        których stosowane są inne zasady ochrony danych osobowych, przedstawiane
        np. w umowie zawartej z Użytkownikiem.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        Polityka prywatności opiera się na zasadach określonych w Rozporządzeniu
        Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r.
        w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
        osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia
        dyrektywy 95/46/WE (określane jako "RODO" lub "Ogólne Rozporządzenie o
        Ochronie Danych").
      </p>
      <Link href="/" passHref>
        <a className="block mt-8 text-custom_blue hover:underline">
          Powrót do strony głównej
        </a>
      </Link>
    </div>
  );
};

export default PrivacyPolicy;
