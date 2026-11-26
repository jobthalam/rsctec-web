import { notFound } from "next/navigation";
import TrainingDetails from "@/components/screens/TrainingDetails/TrainingDetails";
import {
  DPDPA_COURSES,
  CATALOG_COURSES,
  getCourseBySlug,
} from "@/constants/trainingsData";

export function generateStaticParams() {
  const slugs = new Set([
    ...DPDPA_COURSES.map((c) => c.slug),
    ...CATALOG_COURSES.map((c) => c.slug),
  ]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
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
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <TrainingDetails course={course} />;
}
