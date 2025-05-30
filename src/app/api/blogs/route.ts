// src/app/api/blogs/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(blogs);
}

export async function POST(req: Request) {
  const data = await req.json();
  // expected shape: { title, subtitle, content, tags: string[], slug, ogImage? }
  const created = await prisma.blog.create({ data });
  return NextResponse.json(created, { status: 201 });
}

export async function PUT(req: Request) {
  const { id, ...rest } = await req.json();
  const updated = await prisma.blog.update({
    where: { id },
    data: rest,
  });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.blog.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
