import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

export async function GET() {
  try {
    const counter = await prisma.counter.findFirst({
      where: { name: 'WeCount' }
    });
    return NextResponse.json(counter || { value: 0 });
  } catch (error) {
    console.error('Error fetching counter:', error);
    return NextResponse.json({ error: 'Failed to fetch counter value' }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    const { increment } = await request.json(); // Recibe si es incremento o decremento
    const counter = await prisma.counter.findFirst();

    const updatedCounter = await prisma.counter.update({
      where: { id: counter.id },
      data: { value: counter.value + increment },
    });

    return new Response(JSON.stringify(updatedCounter), { status: 200 });
  } catch (error) {
    return new Response(`Error updating counter: ${error.message}`, { status: 500 });
  }
}