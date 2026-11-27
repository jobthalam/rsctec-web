import { NextResponse } from "next/server";
import { getAdminSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = getAdminSupabase();
    const { data, error } = await supabase
      .from("trainings")
      .select("*")
      .order("order_index", { ascending: true })
      .order("created_at", { ascending: true });

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
      id,
      slug,
      title,
      category,
      badge,
      status,
      audience,
      duration,
      instructor,
      image,
      avatar,
      desc,
      outcome,
      featured,
      order_index,
      tabs,
    } = body;

    if (!title || !slug || !category) {
      return NextResponse.json(
        { error: "Title, slug, and category are required." },
        { status: 400 }
      );
    }

    const trainingId = id || slug;
    const newRecord = {
      id: trainingId,
      slug,
      title,
      category,
      badge: badge || null,
      status: status || "Draft",
      audience: audience || null,
      duration: duration || null,
      instructor: instructor || null,
      image: image || null,
      avatar: avatar || null,
      desc: desc || null,
      outcome: outcome || null,
      featured: Boolean(featured),
      order_index: typeof order_index === "number" ? order_index : 0,
      tabs: tabs || [],
      updated_at: new Date().toISOString(),
    };

    const supabase = getAdminSupabase();
    const { data, error } = await supabase
      .from("trainings")
      .upsert([newRecord])
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

export async function PATCH(request) {
  try {
    const body = await request.json();
    const { ids } = body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { error: "Array of training IDs is required." },
        { status: 400 }
      );
    }

    const supabase = getAdminSupabase();
    const updates = ids.map((id, index) =>
      supabase
        .from("trainings")
        .update({ order_index: index, updated_at: new Date().toISOString() })
        .eq("id", id)
    );

    await Promise.all(updates);

    return NextResponse.json({ success: true, count: ids.length });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
