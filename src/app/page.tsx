"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import SocialButtons from "@/components/ui/socialbuttons";

type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  collaborators: string;
  githubLink: string;
  technologies: string[];
};

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <>
      {/* Set the page title */}
      <Head>
        <title>Aaron Beschorner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Full-width Wave Background */}
      <div className="bg-zinc-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 175">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,96L60,80C120,64,240,32,360,48C480,64,600,128,720,138.7C840,149,960,107,1080,85.3C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto p-6">
        {/* Header Section */}
        <header className="mb-10">
          <p className="text-zinc-900 libre-baskerville-regular tracking-tighter text-5xl">
            My name is Aaron Beschorner
          </p>
          <p className="text-zinc-900 libre-baskerville-regular text-5xl mt-3 tracking-tighters">
            and I&apos;m an <span className="libre-baskerville-regular">aspiring SWE</span>.
          </p>
          <div className="flex mt-10 space-x-1 justify-center">
            <SocialButtons />
          </div>
          <p className="flex space-x-1 justify-center mt-5 p-3">
            After countless —and completely unnecessary— hours on Pinterest, battling my toughest critic (me, myself, and I) over which font to use, 
            I am thrilled to announce the launch of the very first version (v0.1.0) of my personal website! YAY! *crickets*.
            Here you will find my coding projects, blog posts, and socials. I am currently looking for internship opportunities for Summer 2025 or Fall 2025. 
            Feel free to connect or shoot me a message!
          </p>
        </header>

        {/* Projects Section */}
        <section>
          {/* Responsive grid: 2 columns on small screens and 4 columns on large screens */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <div key={project.id} className="border border-black p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl">.0{index + 1}</span>
                  <a href={project.githubLink}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                </div>

                <span className="text-xs px-2 py-1 text-white bg-zinc-900 rounded-full">
                  {project.category}
                </span>

                <h2 className="text-2xl mt-1 urbanist-font">{project.title}</h2>

                <p className="text-sm text-gray-500">{project.description}</p>

                <p className="text-gray-700 text-sm mt-10">
                  <span className="font-semibold">Collaborators:</span> {project.collaborators}
                </p>

                <div className="flex flex-wrap gap-2 mt-2 justify-center">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded-md border border-black text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Contact Section and Footer below */}
      </div>

      <section className="text-center mt-10 p-6 border rounded-lg shadow-md">
        <h2 className="text-3xl font-bold">Do you want to work with me?</h2>
        <p className="text-gray-600 mt-2">
          Feel free to reach out for collaboration or project inquiries.
        </p>
        <Button className="mt-4" asChild>
          <a href="mailto:aaronbeschorner@gmail.com">Contact Me</a>
        </Button>
      </section>

      <div className="bg-zinc-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,96L48,101.3C96,107,192,117,288,128C384,139,480,149,576,149.3C672,149,768,139,864,122.7C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <footer className="bg-zinc-900 text-center text-white p-6 flex items-center justify-center space-x-2">
        <span>with</span>
        <span className="text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="inline-block"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </span>
        <span>from</span>
        <span className="text-white">Aaron Beschorner</span>
      </footer>
    </>
  );
}
