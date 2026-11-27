import { notFound } from "next/navigation";
import TrainingDetails from "@/components/screens/TrainingDetails/TrainingDetails";
import { getAdminSupabase } from "@/lib/supabase";
import {
  DPDPA_COURSES,
  CATALOG_COURSES,
  getCourseBySlug,
} from "@/constants/trainingsData";

export const revalidate = 0;

export async function generateStaticParams() {
  const slugs = new Set([
    ...DPDPA_COURSES.map((c) => c.slug),
    ...CATALOG_COURSES.map((c) => c.slug),
  ]);

  try {
    const supabase = getAdminSupabase();
    const { data } = await supabase.from("trainings").select("slug");
    if (data) {
      data.forEach((item) => {
        if (item.slug) slugs.add(item.slug);
      });
    }
  } catch (err) {
    console.error("Static params fallback to constants:", err);
  }

  return Array.from(slugs).map((slug) => ({ slug }));
}

async function fetchCourse(slug) {
  try {
    const supabase = getAdminSupabase();
    const { data } = await supabase
      .from("trainings")
      .select("*")
      .eq("slug", slug)
      .single();

    if (data) return data;
  } catch (err) {
    console.error("Failed to fetch course from DB, checking static:", err);
  }

  return getCourseBySlug(slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = await fetchCourse(slug);
  if (!course) {
    return { title: "Training Not Found | RS Consulting" };
  }
  return {
    title: `${course.title} | Trainings & Certifications | RS Consulting`,
    description: course.outcome || course.desc,
  };
}

export default async function TrainingDetailPage({ params }) {
  const { slug } = await params;
  const course = await fetchCourse(slug);

  if (!course) {
    notFound();
  }

  return <TrainingDetails course={course} />;
}
