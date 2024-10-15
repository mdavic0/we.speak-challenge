import { sql } from '@vercel/postgres';

export async function fetchCount() {
    try {
        const data = await sql`SELECT value FROM counter WHERE name = 'WeCount'`;
        return data.rows[0].value;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch count data.');
    }
}

