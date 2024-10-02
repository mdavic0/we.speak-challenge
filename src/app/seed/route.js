import { db } from '@vercel/postgres';

const client = await db.connect();
const counter = { name: 'WeCount', value: 0 };


async function seedCounter() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS counter (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        value INTEGER NOT NULL DEFAULT 0,
        UNIQUE(name)
    );
  `;

  await client.sql`
    INSERT INTO counter (name, value)
    VALUES (${counter.name}, ${counter.value})
    ON CONFLICT (name) DO NOTHING;
  `;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedCounter();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}