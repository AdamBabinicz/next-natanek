"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "../GoogleAnalitics";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import CookiesConsent from "./CookiesConsent";
import { metadata } from "../metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="pl">
        <head>
          <>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>{metadata.title.default}</title>
            <link
              rel="canonical"
              href="https://natek.netlify.app"
              key="canonical"
            />
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keywords.join(", ")} />
            <meta name="twitter:card" content={metadata.twitter.card} />
            <meta
              name="twitter:description"
              content={metadata.twitter.description}
            />
            {/* Dodaj odnośnik do głównego obrazka Twittera */}
            <meta name="twitter:image" content={metadata.twitter.images[0]} />
            {/* Dodaj odnośnik do głównego obrazka Open Graph */}
            <meta
              property="og:image"
              content={metadata.openGraph.images[0].url}
            />
            {/* inne metadane */}
            {metadata.additionalMetaTags &&
              metadata.additionalMetaTags.map((meta, index) => (
                <meta
                  key={index}
                  property={meta.property}
                  content={meta.content}
                />
              ))}
          </>
        </head>
        <body
          className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        >
          {/* <StarsCanvas /> */}
          <Navbar />
          {children}
          <Footer />
          <CookiesConsent />
          <GoogleAnalytics measurementId="G-STN2FB1TNF" />;
        </body>
      </html>
    </>
  );
}
