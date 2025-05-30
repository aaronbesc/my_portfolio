// src/app/blog/[slug]/page.tsx
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import MDXClient from "@/components/MDXClient";

export async function generateStaticParams() {
  const all = await prisma.blog.findMany({ select: { slug: true } });
  return all.map((b) => ({ slug: b.slug }));
}

export default async function BlogPost({ params }: { params: Record<string, string> }) {
  // await params before using it
  const { slug } = await params;
  const post = await prisma.blog.findUnique({ where: { slug } });
  if (!post) return notFound();

  const mdxSource = await serialize(post.content);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.subtitle ?? ""} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.subtitle ?? ""} />
        {post.ogImage && <meta property="og:image" content={post.ogImage} />}
      </Head>

      <article className="prose dark:prose-invert mx-auto py-12 px-4 max-w-3xl">
        <h1>{post.title}</h1>
        {post.subtitle && <p className="text-gray-600 dark:text-gray-400">{post.subtitle}</p>}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <MDXClient source={mdxSource} />
      </article>
    </>
  );
}
