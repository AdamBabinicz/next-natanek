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
        <span className="text-dark text-base mr-16">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          fugit nulla architecto, minus veritatis dolorum maxime iusto fugiat
          amet corporis distinctio eligendi tempora totam{" "}
          <Link href="/privacy-policy" className="font-bold text-custom">
            Polityka prywatności
          </Link>{" "}
          harum omnis aut ipsam a repellendus.
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
