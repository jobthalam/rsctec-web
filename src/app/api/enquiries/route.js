import { NextResponse } from "next/server";
import { getAdminSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = getAdminSupabase();
    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: data || [] });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      company,
      industry,
      interest,
      message,
      dpdpaConsent,
      newsletter,
    } = body;

    if (!fullName || !email || !company) {
      return NextResponse.json(
        { error: "Full name, business email, and company name are required." },
        { status: 400 }
      );
    }

    const today = new Date().toISOString().split("T")[0];
    const generatedId = `ENQ-${Math.floor(1000 + Math.random() * 9000)}`;

    const newEnquiry = {
      id: generatedId,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : "",
      company: company.trim(),
      industry: industry || "Other",
      interest: interest || "Advisory & Technical Services",
      message: message ? message.trim() : "",
      dpdpaConsent: Boolean(dpdpaConsent),
      newsletter: Boolean(newsletter),
      status: "New",
      date: today,
    };

    const supabase = getAdminSupabase();
    const { data, error } = await supabase
      .from("enquiries")
      .insert([newEnquiry])
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const body = await request.json();
    const { ids } = body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { error: "Array of enquiry IDs is required." },
        { status: 400 }
      );
    }

    const supabase = getAdminSupabase();
    const { error } = await supabase
      .from("enquiries")
      .delete()
      .in("id", ids);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, count: ids.length });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
