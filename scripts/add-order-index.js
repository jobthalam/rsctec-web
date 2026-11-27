const { Client } = require("pg");

let conn = process.env.POSTGRES_URL_NON_POOLING || process.env.POSTGRES_URL;
if (!conn) {
  console.error("Missing POSTGRES_URL / POSTGRES_URL_NON_POOLING in env");
  process.exit(1);
}

conn = conn.replace("?sslmode=require", "").replace("&sslmode=require", "");

const client = new Client({
  connectionString: conn,
  ssl: { rejectUnauthorized: false },
});

async function run() {
  await client.connect();
  await client.query("ALTER TABLE trainings ADD COLUMN IF NOT EXISTS order_index INT DEFAULT 0;");
  console.log("Column order_index verified/added.");
  const res = await client.query("SELECT id FROM trainings ORDER BY created_at ASC;");
  for (let i = 0; i < res.rows.length; i++) {
    await client.query("UPDATE trainings SET order_index = $1 WHERE id = $2;", [i, res.rows[i].id]);
  }
  console.log(`Updated order_index for ${res.rows.length} trainings.`);
  await client.end();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
