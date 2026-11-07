import "../styles/globals.scss";
import "../styles/fontawesome.css";
import "../styles/caseicon.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { FONT_VARIABLES } from "@/styles/fonts";

export const metadata = {
  title: "RS Consulting | Information Security, Cyber Risk & DPDPA Compliance",
  description:
    "Pure play Information Security, Cyber Risk Management consulting & DPDPA compliance company delivering ingenious perspectives to enterprise cyber resilience.",
  metadataBase: new URL("https://www.rsctec.com"),
  openGraph: {
    title: "RS Consulting | Cybersecurity & DPDPA Compliance",
    description:
      "Security-led DPDP Act, 2023 compliance, vulnerability management, cloud security, and managed security services.",
    url: "https://www.rsctec.com",
    siteName: "RS Consulting",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={FONT_VARIABLES}>
      <body>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
