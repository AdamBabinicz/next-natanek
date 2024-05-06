import { Inter } from "next/font/google";
import "./globals.css";
// import StarsCanvas from "@/components/main/StarBackground";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });

interface Metadata {
  title: {
    default: string;
    template: string;
  };
  description: string;
  keywords: string[];
  twitter: {
    card: string;
    description: string;
    siteId: string;
    images: string[];
    imageAlt?: string; // dodajemy opcjonalne pole
  };
  openGraph: {
    title: string;
    description: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
    siteName: string;
  };
  additionalMetaTags?: {
    // dodajemy opcjonalne pole
    property: string;
    content: string;
  }[];
  metadataBase?: string;
  icons: {
    icon: string[];
    apple: string[];
  };
}

export const metadata: Metadata = {
  title: {
    default: "Natanielek",
    template: "%s - Strona o Natanielku",
  },
  description:
    "Dzieci są nadzieją, która rozkwita wciąż na nowo, projektem, który nieustannie się urzeczywistnia, przyszłością, która pozostaje zawsze otwarta. (Jan Paweł II)",
  keywords: ["Natan", "Nat", "Natanek"],
  icons: {
    icon: ["/7.png?v=4"],
    apple: ["/favicon.png?v=4"],
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Istnieją dwa rodzaje dotyku, które pamięta się przez całe życie: pierwszy raz, kiedy ukochana osoba muśnie twoją dłoń, i ten, kiedy twoje nowo narodzone dziecko chwyci cię za palec. W obu przypadkach jesteście ze sobą związani już na wieczność",
    siteId: "",
    images: ["/assets/1.jpg"],
  },
  openGraph: {
    title: "Dziecko to nie zbiór komórek – to zbiór naszych uczuć",
    description:
      "Człowieka, który patrzy w oczy dziecka, uderza przede wszystkim ich niewinność: owa przejmująca niezdolność do kłamstwa, do zakładania maski, czy chęci bycia kimś innym, niż jest. (Anthony de Mello)",
    images: [
      {
        url: "/assets/4.webp",
        width: 800,
        height: 600,
        alt: "...",
      },
    ],
    siteName: "Nazwa strony",
  },
  additionalMetaTags: [
    { property: "fb:app_id", content: "1951716098397474" },
    {
      property: "business:contact_data:street_address",
      content: "26-600 Radom",
    },
    { property: "business:contact_data:locality", content: "Radom" },
    { property: "business:contact_data:region", content: "Mazovia" },
    { property: "business:contact_data:postal_code", content: "26-600" },
    {
      property: "business:contact_data:country_name",
      content: "Poland",
    },
  ],
  metadataBase: "https://your-production-url.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="pl">
        <body
          className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        >
          {/* <StarsCanvas /> */}
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
