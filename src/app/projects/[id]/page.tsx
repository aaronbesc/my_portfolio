// src/app/projects/[id]/page.tsx
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Head from "next/head";
import Link from "next/link";

export async function generateStaticParams() {
  const all = await prisma.project.findMany({ select: { id: true } });
  return all.map((p) => ({ id: p.id }));
}

export default async function ProjectPage({ params }: { params: Record<string, string> }) {
  // await params before destructuring
  const { id } = await params;
  const project = await prisma.project.findUnique({ where: { id } });
  if (!project) return notFound();

  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
      </Head>
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4">{project.description}</p>
        {project.githubLink && (
          <Link
            href={project.githubLink}
            target="_blank"
            className="mt-6 inline-block px-4 py-2 bg-indigo-600 text-white rounded"
          >
            View on GitHub
          </Link>
        )}
      </div>
    </>
  );
}
