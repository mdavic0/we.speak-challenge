'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function updateCount({ increment }) {
    console.log('Increment:', increment);

    try {
        const count = await sql`SELECT value FROM counter WHERE name = 'WeCount'`;
        console.log('Count:', count.rows[0].value);

        const newValue = count.rows[0].value + increment;
        console.log('New Value:', newValue);
        await sql`UPDATE counter SET value = ${newValue} WHERE name = 'WeCount'`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch count data.');
    }
    revalidatePath('/counter');
}