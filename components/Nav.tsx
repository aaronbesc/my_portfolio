import Link from "next/link";

const links = [
  { href: "/", label: "About" },
  { href: "/blog", label: "Blog" }
];

export default function Nav() {
  return (
    <nav className="flex items-center justify-between gap-6">
      <Link href="/" className="text-sm tracking-[0.18em] uppercase text-zinc-400">
        aaron&nbsp;beschorner
      </Link>

      <div className="flex items-center gap-5 text-sm text-zinc-400">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-zinc-100 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

