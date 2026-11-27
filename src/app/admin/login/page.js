import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminLogin from "@/components/screens/AdminLogin/AdminLogin";

export const metadata = {
  title: "Admin Login | RS Consulting",
  description:
    "Administrator sign-in for managing client enquiries, course registrations, and cybersecurity catalog.",
};

export default async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (token) {
    redirect("/admin");
  }

  return <AdminLogin />;
}
