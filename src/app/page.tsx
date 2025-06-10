// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import {  Linkedin, Twitter, Instagram, Mail, Download } from 'lucide-react';

type Blog = {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  createdAt: string;
};
type Project = {
  id: string;
  title: string;
  description: string;
};

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((r) => r.json())
      .then((data: Blog[]) => setBlogs(data.slice(0, 3)));
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data: Project[]) => setProjects(data.slice(0, 3)));
  }, []);

  return (
    <>
      <Head>
        <title>Aaron Beschorner</title>
        <meta
          name="description"
          content="Full-Stack Engineer | Open-Source Enthusiast"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ─── Navbar ───────────────────────────────────────────── */}
      <header className="sticky top-0 z-20 bg-transparent transition-colors duration-300 backdrop-blur-sm border-b border-transparent hover:bg-[var(--background)] hover:border-gray-200 dark:hover:border-zinc-700">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold">
            Aaron Beschorner
          </Link>
          <nav className="space-x-6 font-medium uppercase text-sm">
            <Link href="/blog" className="hover:text-primary transition">
              Blog
            </Link>
            <Link href="/projects" className="hover:text-primary transition">
              Projects
            </Link>
          </nav>
        </div>
      </header>

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="container mx-auto px-6 pt-16 pb-8 text-center">
        <div className="mx-auto w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-primary ring-offset-4 ring-offset-[var(--background)]">
          <img
            src="/profile.jpeg"
            alt="Aaron Beschorner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-16 flex justify-center space-x-8 text-3xl">
          {[
            {
              href: "https://linkedin.com/in/aaron-beschorner",
              icon: <Linkedin />,
            },
            { href: "https://twitter.com/yourhandle", icon: <Twitter /> },
            { href: "https://instagram.com/yourhandle", icon: <Instagram /> },
            {
              href: "mailto:aaronbeschorner@gmail.com",
              icon: <Mail />,
            },
            { href: "/resume.pdf", icon: <Download /> },
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

      {/* ─── About ───────────────────────────────────────────── */}
      <section className="container mx-auto px-6 pt-8 pb-16 space-y-8">
        <p className="max-w-2xl text-lg leading-relaxed mx-auto">
          I’m Aaron, a computer science major specializing in full-stack
          development, open-source contributor, and lifelong learner.
          Passionate about building scalable applications, improving user
          experiences, and exploring new technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "C++",
            "Next.js",
            "Tailwind CSS",
            "React",
            "Docker",
            "Python",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 border border-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ─── Content Sections ──────────────────────────────────── */}
      <main className="container mx-auto space-y-20 pb-16 px-6">
        {/* Blog */}
        <section>
          <h2 className="inline-block border-primary pb-1 text-3xl md:text-4xl font-semibold">
            Blog
          </h2>
          <div className="mt-6 grid gap-8 grid-cols-1 md:grid-cols-3">
            {blogs.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="card">
                <h3 className="text-xl font-medium group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                {post.subtitle && (
                  <p className="mt-3 line-clamp-2 text-gray-700 dark:text-gray-300">
                    {post.subtitle}
                  </p>
                )}
              </Link>
            ))}
          </div>
          <div className="mt-4 text-right">
            <Link href="/blog" className="text-primary hover:underline">
              See more
            </Link>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="inline-block border-primary pb-1 text-3xl md:text-4xl font-semibold">
            Projects
          </h2>
          <div className="mt-6 grid gap-8 grid-cols-1 md:grid-cols-3">
            {projects.map((proj) => (
              <Link key={proj.id} href={`/projects/${proj.id}`} className="card">
                <h3 className="text-xl font-medium group-hover:text-primary">
                  {proj.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-gray-700 dark:text-gray-300">
                  {proj.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-4 text-right">
            <Link href="/projects" className="text-primary hover:underline">
              See more
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
