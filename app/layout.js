import "./globals.css";
import { Inter, Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";
import { localBusinessSchema, jsonLd } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Persianas en Guatemala | Instalación a Medida | Persianas Maperco",
    template: "%s",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "persianas en Guatemala",
    "persianas a medida Guatemala",
    "instalación de persianas Guatemala",
    "persianas blackout Guatemala",
    "cortinas blackout Guatemala",
    "persianas enrollables Guatemala",
    "persianas screen Guatemala",
    "persianas día y noche Guatemala",
    "cortinas romanas Guatemala",
    "mosquiteros Guatemala",
    "puertas plegables Guatemala",
    "reparación de persianas Guatemala",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_GT",
    siteName: site.name,
    url: site.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport = {
  themeColor: "#14110E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(localBusinessSchema())}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
