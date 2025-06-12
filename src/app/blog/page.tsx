// src/app/blog/[slug]/page.tsx
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote/rsc";
import { compileMDX } from "next-mdx-remote/rsc";

// Optional MDX components override:
const mdxComponents = {};

export async function generateStaticParams() {
  const posts = await prisma.blog.findMany({ select: { slug: true } });
  return posts.map(({ slug }) => ({ slug }));
}

export default async function BlogPost({ params: { slug } }: { params: { slug: string } }) {
  const post = await prisma.blog.findUnique({ where: { slug } });
  if (!post) return notFound();

  const { content, frontmatter } = await compileMDX({
    source: post.content,
    parseFrontmatter: true,
  });

  return (
    <>
      <Head>
        <title>{frontmatter.title || post.title}</title>
        <meta name="description" content={post.subtitle ?? ""} />
        {post.ogImage && <meta property="og:image" content={post.ogImage} />}
      </Head>
      <article className="prose mx-auto py-12 px-4 max-w-3xl">
        <h1>{frontmatter.title || post.title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          {new Date(post.createdAt).toLocaleDateString("en-US", {
            month: "short", day: "numeric", year: "numeric",
          })}
        </p>
        <MDXRemote source={content} components={mdxComponents} />
      </article>
    </>
  );
}
