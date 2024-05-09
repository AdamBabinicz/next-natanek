import React, { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

export default function CookiesConsent() {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70 z-[5000]">
      <div className="fixed bottom-0 left-0 flex flex-col items-center sm:flex-row sm:justify-between px-4 py-8 bg-custom_gold text-custom_white">
        <span className="text-dark text-base sm:mr-16 w-auto">
          W ramach naszej witryny stosujemy pliki cookies w&nbsp;celu
          świadczenia Państwu usług na najwyższym poziomie, w&nbsp;tym
          w&nbsp;sposób dostosowany do indywidualnych potrzeb. Korzystanie
          z&nbsp;witryny bez zmiany ustawień dotyczących cookies oznacza, że
          będą one zamieszczane w Państwa urządzeniu końcowym. Możecie Państwo
          dokonać w&nbsp;każdym czasie zmiany ustawień dotyczących cookies.
          <Link href="/privacy-policy" className="font-bold text-custom">
            Polityka prywatności
          </Link>{" "}
        </span>
        <button
          className="bg-custom_blue sm:mt-0 mt-6 py-2 px-10 rounded text-white"
          onClick={() => acceptCookie()}
        >
          Zgadzam&nbsp;się
        </button>
      </div>
    </div>
  );
}
