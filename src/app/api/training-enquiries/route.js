import { NextResponse } from "next/server";
import { getAdminSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = getAdminSupabase();
    const { data, error } = await supabase
      .from("training_enquiries")
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
      organization,
      designation,
      course,
      trainingMode,
      participantType,
      notes,
      dpdpaConsent,
      newsletter,
    } = body;

    if (!fullName || !email || !course) {
      return NextResponse.json(
        { error: "Full name, email, and course selection are required." },
        { status: 400 }
      );
    }

    const today = new Date().toISOString().split("T")[0];
    const generatedId = `TRN-${Math.floor(2000 + Math.random() * 8000)}`;

    const newRecord = {
      id: generatedId,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : "",
      organization: organization ? organization.trim() : "",
      designation: designation ? designation.trim() : "",
      course: course.trim(),
      trainingMode: trainingMode || "Live Online (Instructor-Led)",
      participantType: participantType || "Individual Professional",
      notes: notes ? notes.trim() : "",
      dpdpaConsent: Boolean(dpdpaConsent),
      newsletter: Boolean(newsletter),
      status: "New",
      date: today,
    };

    const supabase = getAdminSupabase();
    const { data, error } = await supabase
      .from("training_enquiries")
      .insert([newRecord])
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
        { error: "Array of training enquiry IDs is required." },
        { status: 400 }
      );
    }

    const supabase = getAdminSupabase();
    const { error } = await supabase
      .from("training_enquiries")
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
