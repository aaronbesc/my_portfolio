// src/app/blog/[slug]/page.tsx
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "../../../../mdx-components"; // adjust path

export async function generateStaticParams() {
  const posts = await prisma.blog.findMany({ select: { slug: true } });
  return posts.map(({ slug }) => ({ slug }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await prisma.blog.findUnique({ where: { slug: params.slug } });
  if (!post) return notFound();

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.subtitle || ""} />
        {post.ogImage && <meta property="og:image" content={post.ogImage} />}
      </Head>

      <article className="prose mx-auto py-12 px-4 max-w-3xl">
        <h1>{post.title}</h1>
        {/* ... date, subtitle ... */}
        <MDXRemote source={post.content} components={useMDXComponents()} />
      </article>
    </>
  );
}
