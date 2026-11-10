import "../styles/globals.scss";
import "../styles/fontawesome.css";
import "../styles/caseicon.css";
import "aos/dist/aos.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import AOSProvider from "@/components/layout/AOSProvider/AOSProvider";
import { AppProvider } from "@/context/AppContext";
import { FONT_VARIABLES } from "@/styles/fonts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
  (process.env.NODE_ENV === "production"
    ? "https://www.rsctec.com"
    : "http://localhost:3000");

export const metadata = {
  title: "RS Consulting | Information Security, Cyber Risk & DPDPA Compliance",
  description:
    "Pure play Information Security, Cyber Risk Management consulting & DPDPA compliance company delivering ingenious perspectives to enterprise cyber resilience.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "RS Consulting | Cybersecurity & DPDPA Compliance",
    description:
      "Security-led DPDP Act, 2023 compliance, vulnerability management, cloud security, and managed security services.",
    url: siteUrl,
    siteName: "RS Consulting",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://rsctec.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "RS Consulting - Information Security, Risk Management & Cloud Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RS Consulting | Cybersecurity & DPDPA Compliance",
    description:
      "Security-led DPDP Act, 2023 compliance, vulnerability management, cloud security, and managed security services.",
    images: ["https://rsctec.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={FONT_VARIABLES}>
      <body>
        <AppProvider>
          <AOSProvider>
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
          </AOSProvider>
        </AppProvider>
      </body>
    </html>
  );
}
