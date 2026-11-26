import Services from "@/components/screens/Services/Services";
import { SERVICES_SEO } from "@/constants/servicesData";

export const metadata = {
  title: SERVICES_SEO.title,
  description: SERVICES_SEO.description,
};

export default function ServicesPage() {
  return <Services />;
}
