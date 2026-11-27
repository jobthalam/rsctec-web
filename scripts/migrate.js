const { Client } = require("pg");

let conn = process.env.POSTGRES_URL_NON_POOLING || process.env.POSTGRES_URL;
if (!conn) {
  console.error("Missing POSTGRES_URL / POSTGRES_URL_NON_POOLING in env");
  process.exit(1);
}

// Remove sslmode query param so pg respects rejectUnauthorized: false for Supabase pooler
conn = conn.replace("?sslmode=require", "").replace("&sslmode=require", "");

const client = new Client({
  connectionString: conn,
  ssl: { rejectUnauthorized: false },
});

const schemaSql = `
  CREATE TABLE IF NOT EXISTS enquiries (
    id TEXT PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT NOT NULL,
    industry TEXT,
    interest TEXT,
    message TEXT,
    "dpdpaConsent" BOOLEAN DEFAULT FALSE,
    newsletter BOOLEAN DEFAULT FALSE,
    status TEXT DEFAULT 'New',
    date TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );

  CREATE TABLE IF NOT EXISTS training_enquiries (
    id TEXT PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    organization TEXT,
    designation TEXT,
    course TEXT NOT NULL,
    "trainingMode" TEXT,
    "participantType" TEXT,
    notes TEXT,
    "dpdpaConsent" BOOLEAN DEFAULT FALSE,
    newsletter BOOLEAN DEFAULT FALSE,
    status TEXT DEFAULT 'New',
    date TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );

  CREATE TABLE IF NOT EXISTS trainings (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    badge TEXT,
    status TEXT DEFAULT 'Draft',
    audience TEXT,
    duration TEXT,
    instructor TEXT,
    image TEXT,
    avatar TEXT,
    "desc" TEXT,
    outcome TEXT,
    featured BOOLEAN DEFAULT FALSE,
    order_index INT DEFAULT 0,
    tabs JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
  );

  -- Enable RLS and create public insert policy or allow full access for service role
  ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
  ALTER TABLE training_enquiries ENABLE ROW LEVEL SECURITY;
  ALTER TABLE trainings ENABLE ROW LEVEL SECURITY;

  -- Allow anonymous inserts for enquiries and training_enquiries so public forms can submit directly or via API
  DO $$
  BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'enquiries' AND policyname = 'Allow public insert') THEN
      CREATE POLICY "Allow public insert" ON enquiries FOR INSERT WITH CHECK (true);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'enquiries' AND policyname = 'Allow service role all') THEN
      CREATE POLICY "Allow service role all" ON enquiries FOR ALL USING (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'training_enquiries' AND policyname = 'Allow public insert') THEN
      CREATE POLICY "Allow public insert" ON training_enquiries FOR INSERT WITH CHECK (true);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'training_enquiries' AND policyname = 'Allow service role all') THEN
      CREATE POLICY "Allow service role all" ON training_enquiries FOR ALL USING (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'trainings' AND policyname = 'Allow public read') THEN
      CREATE POLICY "Allow public read" ON trainings FOR SELECT USING (true);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'trainings' AND policyname = 'Allow service role all') THEN
      CREATE POLICY "Allow service role all" ON trainings FOR ALL USING (true);
    END IF;
  END
  $$;
`;

async function run() {
  console.log("Connecting to PostgreSQL...");
  await client.connect();
  console.log("Connected. Executing schema migration...");
  await client.query(schemaSql);
  console.log("Schema migration completed successfully!");
  await client.end();
}

run().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
