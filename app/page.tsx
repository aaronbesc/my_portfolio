import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        {/*<h1 className="text-4xl sm:text-5xl font-semibold text-zinc-50 leading-tight">
          Aaron Beschorner
        </h1>*/}
        <div className="border border-zinc-900 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-zinc-400 space-y-2 bg-zinc-950/40">
        <p>
          Currently working as a Data Engineering Intern at Intempo, a Colombian company that builds data platforms for government and private clients. I am part of a team improving the vehicle tax system for the Cundinamarca regional government. My work includes developing a machine learning model that predicts a vehicle’s assessed value based on official rules, and creating SQL and PySpark data pipelines that merge national vehicle records with regional data to produce real-time Power BI dashboards.
        </p>
      </div>
        <ul className="text-xs sm:text-sm sm:text-base text-zinc-400 max-w-xl">
          <li>Education:</li>
          <li>BS in Computer Science from the University of Florida</li>
        </ul>
        <ul className="text-xs sm:text-sm sm:text-base text-zinc-400 max-w-xl">
          <li>Social:</li>
          <li>
  <a 
    href="https://x.com/aaronbeschorner" 
    target="_blank" 
    rel="noopener noreferrer"
    className="underline"
  >
    X (@aaronbeschorner)
  </a>
</li>

<li>
  <a 
    href="https://instagram.com/aaronbesc" 
    target="_blank" 
    rel="noopener noreferrer"
    className="underline"
  >
    Instagram (@aaronbesc)
  </a>
</li>
        </ul>
<ul className="text-xs sm:text-sm sm:text-base text-zinc-400 max-w-xl space-y-1">
  <li>Contact:</li>
  <li>
    <a
      href="mailto:aaronbeschorner@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      Email (aaronbeschorner@gmail.com)
    </a>
  </li>

  <li>
    <a
      href="https://github.com/aaronbesc"
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      GitHub (aaronbesc)
    </a>
  </li>

  <li>
    <a
      href="https://www.linkedin.com/in/aaron-beschorner/"
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      LinkedIn (aaron-beschorner)
    </a>
  </li>
</ul>


  <div className="flex flex-wrap gap-4 pt-2">
  <Link
    href="/"
    className="text-xs sm:text-sm border border-zinc-700 px-4 py-2 rounded-full hover:border-zinc-300 hover:text-zinc-100 transition-colors"
  >
    View Projects
  </Link>
    <Link
    href="/"
    className="text-xs sm:text-sm border border-zinc-700 px-4 py-2 rounded-full hover:border-zinc-300 hover:text-zinc-100 transition-colors"
  >
    Download Resume
  </Link>
  <div className="text-xs sm:text-sm text-zinc-400 space-y-2 bg-zinc-950/40">
          <p>
          Outside of school and work, I like to keep things creative. I run, I DJ on my FLX4 and occasionally play sets at local clubs, and I’m always exploring new music. I also love fashion and work as a stylist for Strike, the student-run fashion magazine at UF.
        </p>
      </div>
  </div>
      </div>
      {/*<div className="border border-zinc-900 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-zinc-400 space-y-2 bg-zinc-950/40">
        <p className="text-zinc-300">
          Currently exploring: research pipelines, education data, and how aesthetics,
          music, and fashion intersect with engineering.
        </p>
        <p>
          I care about honest systems, clear communication, and tools that respect both
          data and people.
        </p>
      </div>*/}
    </section>
  );
}
