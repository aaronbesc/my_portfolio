// src/app/blog/[slug]/page.tsx
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { compileMDX } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

const mdxComponents = {};

export async function generateStaticParams() {
  const posts = await prisma.blog.findMany({ select: { slug: true } });
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await prisma.blog.findUnique({ where: { slug: params.slug } });

  return {
    title: post?.title ?? "Blog Post",
    description: post?.subtitle ?? "",
    openGraph: {
      title: post?.title,
      description: post?.subtitle,
      images: post?.ogImage ? [{ url: post.ogImage }] : [],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await prisma.blog.findUnique({ where: { slug: params.slug } });
  if (!post) return notFound();

  const { content, frontmatter } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: true },
  });

  return (
    <article className="prose mx-auto py-12 px-4 max-w-3xl">
      <h1>{frontmatter.title || post.title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {new Date(post.createdAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <MDXRemote source={content} components={mdxComponents} />
    </article>
  );
}
