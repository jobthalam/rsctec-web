import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Admin from "@/components/screens/Admin/Admin";

export const metadata = {
  title: "Admin Dashboard | RS Consulting",
  description:
    "RS Consulting administrative console for managing enquiries, training registrations, DPDPA grievances, and website catalog content.",
};

export default async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token) {
    redirect("/admin/login");
  }

  return <Admin />;
}
