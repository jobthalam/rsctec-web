import TrainingsCertifications from "@/components/screens/TrainingsCertifications/TrainingsCertifications";
import { getAdminSupabase } from "@/lib/supabase";
import {
  DPDPA_COURSES,
  CATALOG_COURSES,
  getCourseBySlug,
} from "@/constants/trainingsData";
import { buildAdminTrainings } from "@/constants/adminData";

export const revalidate = 0;

export const metadata = {
  title: "Trainings & Certifications | RS Consulting — Cybersecurity & DPDPA",
  description:
    "Explore accredited corporate cybersecurity bootcamps, VAPT masterclasses, SOC analyst training, ISO 27001 lead auditor prep, and certified DPDPA compliance courses.",
};

async function getTrainingsData() {
  try {
    const supabase = getAdminSupabase();
    const { data, error } = await supabase
      .from("trainings")
      .select("*")
      .eq("status", "Published")
      .order("order_index", { ascending: true })
      .order("created_at", { ascending: true });

    if (!error && Array.isArray(data) && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.error("Failed to fetch trainings from DB, using fallback:", err);
  }

  return buildAdminTrainings(DPDPA_COURSES, CATALOG_COURSES, getCourseBySlug);
}

export default async function Page() {
  const courses = await getTrainingsData();
  return <TrainingsCertifications courses={courses} />;
}
