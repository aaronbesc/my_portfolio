// src/app/projects/page.tsx
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function ProjectsIndex() {
  const items = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-8 font-sans">
      <h1 className="text-4xl text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {items.map((p) => (
          <Link
            key={p.id}
            href={`/projects/${p.id}`}
            className="block p-6 border rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold">{p.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
              {p.description}
            </p>
            {p.githubLink && (
              <div className="mt-3 text-indigo-600 font-medium">View on GitHub &rarr;</div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}