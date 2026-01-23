import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="space-y-4">
        <div className="border border-zinc-900 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-zinc-400 bg-zinc-950/40">
          <p>
            Currently working as a <strong>Data Engineer @ Intempo</strong>, a
            Colombia-based technology and data science firm. I design, maintain,
            and optimize large-scale data processing and cleaning pipelines in{" "}
            <strong>Microsoft Fabric</strong>, which power <strong>Power BI</strong>{" "}
            dashboards used by the government to analyze groups of registered
            vehicles under their jurisdiction. In parallel, I am developing a
            machine learning pricing model in <strong>Azure Machine Learning</strong>{" "}
            that estimates a vehicle’s assessed value based on regulatory rules,
            registration data, and import documentation, supporting accurate and
            auditable tax assessments.
          </p>
        </div>

        <ul className="text-xs sm:text-sm text-zinc-400">
          <li className="text-zinc-300">Education:</li>
          <li>BS in Computer Science from the University of Florida</li>
        </ul>

        {/* Coursework */}
        <div className="border border-zinc-900 rounded-xl p-4 sm:p-5 bg-zinc-950/40">
          <div className="flex items-center justify-between">
            <p className="text-xs sm:text-sm text-zinc-300">Coursework</p>
            <p className="text-[10px] sm:text-xs text-zinc-500">CS + EE minor</p>
          </div>

          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-wide text-zinc-500">
                Currently taking
              </p>
              <ul className="mt-2 space-y-1 text-xs sm:text-sm text-zinc-400">
                <li>Senior Project</li>
                <li>Distributed Machine Learning</li>
                <li>Natural Language Processing</li>
                <li>Real-time Digital Signal Processing Applications</li>
              </ul>
            </div>

            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-wide text-zinc-500">
                Previously took
              </p>
              <ul className="mt-2 space-y-1 text-xs sm:text-sm text-zinc-400">
                <li>Machine Learning Engineering</li>
                <li>Data Science for Electrical and Computer Engineers</li>
                <li>Digital Logic and Computer Systems</li>
                <li>Algorithms and Data Structures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Currently reading (minimal library card) */}
        <div className="border border-zinc-900 rounded-xl p-4 sm:p-5 bg-zinc-950/40">
          <div className="flex items-center justify-between">
            <p className="text-xs sm:text-sm text-zinc-300">Reading</p>
          </div>

          <div className="mt-3 space-y-2">
            {/* Book 1 */}
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-zinc-200 truncate">
                  <span className="italic">The Decadent Society: How We Became the Victims of Our Own Success</span>
                </p>
                <p className="text-[10px] sm:text-xs text-zinc-500">
                  Ross Douthat — technology, culture, stagnation
                </p>
              </div>
              <span className="shrink-0 text-[10px] sm:text-xs text-zinc-500 border border-zinc-800 rounded-full px-2 py-0.5">
                in progress
              </span>
            </div>

            {/* Book 2
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-zinc-200 truncate">
                  <span className="italic">Machine Learning Engineering</span>
                </p>
                <p className="text-[10px] sm:text-xs text-zinc-500">
                  Andriy Burkov • practical ML, shipping models
                </p>
              </div>
              <span className="shrink-0 text-[10px] sm:text-xs text-zinc-500 border border-zinc-800 rounded-full px-2 py-0.5">
                current
              </span>
            </div> */}
          </div>
        </div>

        <ul className="text-xs sm:text-sm text-zinc-400 space-y-1">
          <li className="text-zinc-300">Social:</li>
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

        <ul className="text-xs sm:text-sm text-zinc-400 space-y-1">
          <li className="text-zinc-300">Contact:</li>
          <li>
            <a href="mailto:aaronbeschorner@gmail.com" className="underline">
              Email
            </a>
          </li>
          <li>
            <a
              href="https://github.com/aaronbesc"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aaron-beschorner/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/resume.pdf"
            className="text-xs sm:text-sm border border-zinc-700 px-4 py-2 rounded-full hover:border-zinc-300 hover:text-zinc-100 transition-colors"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
