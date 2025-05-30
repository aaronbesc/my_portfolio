// src/app/api/projects/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const data = await req.json();
  // expected: { title, description, githubLink?, tags: string[] }
  const created = await prisma.project.create({ data });
  return NextResponse.json(created, { status: 201 });
}

export async function PUT(req: Request) {
  const { id, ...rest } = await req.json();
  const updated = await prisma.project.update({
    where: { id },
    data: rest,
  });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.project.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
