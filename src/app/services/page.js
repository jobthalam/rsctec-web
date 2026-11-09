import DpdpaServices from "@/components/screens/DpdpaServices/DpdpaServices";
import { DPDPA_SEO } from "@/constants/dpdpaData";

export const metadata = {
  title: DPDPA_SEO.title,
  description: DPDPA_SEO.description,
  keywords: DPDPA_SEO.keywords,
};

export default function ServicesPage() {
  return <DpdpaServices />;
}
