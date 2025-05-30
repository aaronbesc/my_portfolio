// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Linkedin, Twitter, Instagram, Mail, Download } from "lucide-react";

type Blog = { id: string; title: string; subtitle?: string; slug: string; createdAt: string };
type Project = { id: string; title: string; description: string };

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then(r => r.json())
      .then((data: Blog[]) => setBlogs(data.slice(0, 3)));
    fetch("/api/projects")
      .then(r => r.json())
      .then((data: Project[]) => setProjects(data.slice(0, 3)));
  }, []);

  return (
    <>
      <Head>
        <title>Aaron Beschorner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ─── Sticky Navbar ───────────────────────────────────────────── */}
      <header className="sticky top-0 bg-[var(--background)] z-20 border-b border-gray-300 dark:border-zinc-700">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl">
            Aaron Beschorner
          </Link>
          <nav className="space-x-6">
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
          </nav>
        </div>
      </header>

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="mx-auto w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-[var(--accent)] ring-offset-4 ring-offset-[var(--background)]">
          <img src="/profile.jpeg" alt="Aaron Beschorner" className="w-full h-full object-cover" />
        </div>
        <div className="mt-20 flex justify-center space-x-6 text-1xl text-[var(--accent)]">
          {[
            { href: "https://linkedin.com/in/aaron-beschorner", icon: <Linkedin /> },
            { href: "https://twitter.com/yourhandle",          icon: <Twitter /> },
            { href: "https://instagram.com/yourhandle",        icon: <Instagram /> },
            { href: "mailto:aaronbeschorner@gmail.com",         icon: <Mail /> },
            { href: "/resume.pdf",                              icon: <Download /> },
          ].map((btn, i) => (
            <Link
              key={i}
              href={btn.href}
              target={btn.href.startsWith("http") ? "_blank" : undefined}
              className="hover:opacity-80 transition"
              aria-label={btn.href.includes("mailto") ? "Email" : undefined}
            >
              {btn.icon}
            </Link>
          ))}
        </div>
      </section>

      {/* ─── Content Sections ────────────────────────────────────────── */}
      <main className="container mx-auto space-y-20 pb-16">
        {/* Blog */}
        <section>
          <h2 className="inline-block border-[var(--accent)] pb-1 text-3xl md:text-4xl font-semibold">
            Blog
          </h2>
          <div className="mt-6 grid gap-8 grid-cols-1 md:grid-cols-3">
            {blogs.map(post => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block border border-gray-300 dark:border-gray-700 rounded-2xl p-6 bg-[var(--background)] hover:shadow-xl transition"
              >
                <h3 className="text-xl font-medium group-hover:text-[var(--accent)]">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
                {post.subtitle && (
                  <p className="mt-3 text-gray-700 dark:text-gray-300 line-clamp-2">
                    {post.subtitle}
                  </p>
                )}
              </Link>
            ))}
          </div>
          <div className="mt-4 text-right">
            <Link href="/blog" className="text-[var(--accent)] hover:underline">
              See more
            </Link>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="inline-block border-[var(--accent)] pb-1 text-3xl md:text-4xl font-semibold">
            Projects
          </h2>
          <div className="mt-6 grid gap-8 grid-cols-1 md:grid-cols-3">
            {projects.map(proj => (
              <Link
                key={proj.id}
                href={`/projects/${proj.id}`}
                className="group block border border-gray-300 dark:border-gray-700 rounded-2xl p-6 bg-[var(--background)] hover:shadow-xl transition"
              >
                <h3 className="text-xl font-medium group-hover:text-[var(--accent)]">
                  {proj.title}
                </h3>
                <p className="mt-3 text-gray-700 dark:text-gray-300 line-clamp-3">
                  {proj.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-4 text-right">
            <Link href="/projects" className="text-[var(--accent)] hover:underline">
              See more
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
