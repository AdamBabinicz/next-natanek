import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "../GoogleAnalitics";
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
    "Dzieci są obrazem niewinności, radości i nieograniczonego potencjału, który ożywia nasze życie i kształtuje naszą przyszłość.",
  keywords: [
    "Natan",
    "Nat",
    "Natanek",
    "Natanielcio",
    "Natanieluś",
    "Nati",
    "Natek",
    "Natko",
    "Nateczek",
    "Natkuś",
  ],
  icons: {
    icon: ["/7.png?v=4"],
    apple: ["/favicon.png?v=4"],
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Nic nie jest bardziej poruszającego niż chwila, gdy spojrzysz w oczy swojego nowo narodzonego dziecka i poczujesz, że jesteś już kochany bezgranicznie i na zawsze.",
    siteId: "",
    images: ["https://natek.netlify.app/assets/1.jpg"],
  },
  openGraph: {
    title:
      "Dziecko to nie tylko istota biologiczna, to również zbiór naszych marzeń, nadziei i miłości, które dają mu prawdziwą wartość i znaczenie.",
    description:
      "Kiedy spojrzymy w oczy dziecka, widzimy w nich nie tylko niewinność, ale także autentyczność i czystość serca, która jest dla nas inspiracją i wzruszającym przypomnieniem o prostocie życia.",
    images: [
      {
        url: "https://natek.netlify.app/assets/4.webp",
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
  metadataBase: "https://natek.netlify.app",
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
          <GoogleAnalytics measurementId="G-STN2FB1TNF" />;
        </body>
      </html>
    </>
  );
}
