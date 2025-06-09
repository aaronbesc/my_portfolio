// src/app/blog/page.tsx
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function BlogIndex() {
  const posts = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-8 font-sans">
      <h1 className="text-4xl text-center mb-8">Blog</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block p-6 border rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
            <p className="mt-2 line-clamp-2">{post.subtitle}</p>
            <div className="mt-3 text-indigo-600 font-medium">Continue reading &rarr;</div>
          </Link>
        ))}
      </div>
    </div>
  );
}