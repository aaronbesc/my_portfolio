import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Aaron Beschorner",
};

type Project = {
  title: string;
  role: string;
  tags: string[];
  summary: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Transfer Shock GPA Trajectory Modeling",
    role: "Data Analyst / Researcher",
    tags: ["Python", "Pandas", "R", "Data Visualization"],
    summary:
      "Analyzed multi-year academic records to understand GPA changes over time among transfer students.",
  },
  {
    title: "RUNT Vehicle Data Quality Pipeline",
    role: "Data Engineer",
    tags: ["Azure", "Power BI", "PySpark", "SQL"],
    summary:
      "Designed a scalable data validation pipeline for vehicle records used by government clients.",
  },
  {
    title: "Parkinson’s Tremor Detection Pipeline",
    role: "ML Engineer",
    tags: ["Python", "Computer Vision", "Time Series"],
    summary:
      "Built a multi-camera pipeline for capturing and analyzing tremors in real time.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">Projects</h1>

      <div className="grid gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
          >
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-xs uppercase tracking-wide text-slate-400 mt-1">
              {p.role}
            </p>
            <p className="text-slate-300 mt-4">{p.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
