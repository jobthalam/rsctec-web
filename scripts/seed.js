const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Import constants
// Let's read adminData and trainingsData
const adminDataPath = path.join(__dirname, "../src/constants/adminData.js");
const trainingsDataPath = path.join(__dirname, "../src/constants/trainingsData.js");

// We can evaluate or extract INITIAL_CONSULTATION_ENQUIRIES and INITIAL_TRAINING_ENQUIRIES
const {
  INITIAL_CONSULTATION_ENQUIRIES,
  INITIAL_TRAINING_ENQUIRIES,
  buildAdminTrainings,
} = require("../src/constants/adminData.js");

const {
  DPDPA_COURSES,
  CATALOG_COURSES,
  getCourseBySlug,
} = require("../src/constants/trainingsData.js");

async function seed() {
  console.log("Seeding consultation enquiries...");
  const { data: existingEnq } = await supabase.from("enquiries").select("id");
  const existingEnqIds = new Set((existingEnq || []).map((e) => e.id));

  const enqsToInsert = INITIAL_CONSULTATION_ENQUIRIES.filter((e) => !existingEnqIds.has(e.id));
  if (enqsToInsert.length > 0) {
    const { error } = await supabase.from("enquiries").insert(enqsToInsert);
    if (error) console.error("Error inserting enquiries:", error);
    else console.log(`Inserted ${enqsToInsert.length} consultation enquiries.`);
  } else {
    console.log("Consultation enquiries already seeded.");
  }

  console.log("Seeding training enquiries...");
  const { data: existingTrnEnq } = await supabase.from("training_enquiries").select("id");
  const existingTrnEnqIds = new Set((existingTrnEnq || []).map((e) => e.id));

  const trnEnqsToInsert = INITIAL_TRAINING_ENQUIRIES.filter((e) => !existingTrnEnqIds.has(e.id));
  if (trnEnqsToInsert.length > 0) {
    const { error } = await supabase.from("training_enquiries").insert(trnEnqsToInsert);
    if (error) console.error("Error inserting training enquiries:", error);
    else console.log(`Inserted ${trnEnqsToInsert.length} training enquiries.`);
  } else {
    console.log("Training enquiries already seeded.");
  }

  console.log("Seeding trainings catalog...");
  const initialTrainings = buildAdminTrainings(DPDPA_COURSES, CATALOG_COURSES, getCourseBySlug);
  const { data: existingTrainings } = await supabase.from("trainings").select("id");
  const existingTrainingIds = new Set((existingTrainings || []).map((t) => t.id));

  const trainingsToInsert = initialTrainings
    .filter((t) => !existingTrainingIds.has(t.id))
    .map((t) => ({
      id: t.id,
      slug: t.slug,
      title: t.title,
      category: t.category,
      badge: t.badge || null,
      status: t.status || "Published",
      audience: t.audience || null,
      duration: t.duration || null,
      instructor: t.instructor || null,
      image: t.image || null,
      avatar: t.avatar || null,
      desc: t.desc || null,
      outcome: t.outcome || null,
      featured: Boolean(t.featured),
      tabs: t.tabs || [],
    }));

  if (trainingsToInsert.length > 0) {
    const { error } = await supabase.from("trainings").insert(trainingsToInsert);
    if (error) console.error("Error inserting trainings:", error);
    else console.log(`Inserted ${trainingsToInsert.length} trainings.`);
  } else {
    console.log("Trainings catalog already seeded.");
  }

  console.log("Seeding finished!");
}

seed().catch((err) => {
  console.error("Seeding error:", err);
  process.exit(1);
});
