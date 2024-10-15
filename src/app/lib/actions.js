'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function updateCount({ increment }) {
    try {
        const count = await sql`SELECT value FROM counter WHERE name = 'WeCount'`;
    
        const newValue = count.rows[0].value + increment;
    
        await sql`UPDATE counter SET value = ${newValue} WHERE name = 'WeCount'`;
    } catch (error) {
        throw new Error('Failed to fetch count data.');
    }
    revalidatePath('/counter');
}