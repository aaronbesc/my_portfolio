export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">Contact</h1>

      <p className="max-w-xl text-slate-300">
        Feel free to reach out for collaboration, opportunities, or just to say hi.
      </p>

      <ul className="space-y-2 text-slate-300">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:your-email@example.com"
            className="text-sky-400 hover:underline"
          >
            your-email@example.com
          </a>
        </li>

        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/aaron-beschorner/"
            target="_blank"
            className="text-sky-400 hover:underline"
          >
            linkedin.com/in/aaron-beschorner
          </a>
        </li>

        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/aaronbesc"
            target="_blank"
            className="text-sky-400 hover:underline"
          >
            github.com/aaronbesc
          </a>
        </li>
      </ul>
    </section>
  );
}
