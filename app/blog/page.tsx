import fs from "fs";
import path from "path";
import Link from "next/link";

export const metadata = {
  title: "Blog | Aaron Beschorner",
};

type BlogPost = {
  slug: string;
  title: string;
  description?: string;
  date: string;
};

export default function BlogIndex() {
  const blogDir = path.join(process.cwd(), "app/blog");

  const posts: BlogPost[] = fs
    .readdirSync(blogDir)
    .filter((folder) =>
      fs.statSync(path.join(blogDir, folder)).isDirectory()
    )
    .map((folder) => {
      const mod = require(`./${folder}/page.mdx`);

      return {
        slug: folder,
        title: mod.metadata?.title ?? "Untitled post",
        description: mod.metadata?.description ?? "",
        date: mod.metadata?.date ?? "1970-01-01",
      };
    })
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border border-zinc-900 rounded-lg px-4 py-4 sm:px-5 sm:py-5 bg-black/40 hover:bg-zinc-950/80 transition-colors"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="block space-y-1"
            >
              <h2 className="text-sm text-zinc-50">
                {post.title}
              </h2>
              <p className="text-xs text-zinc-500">
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              {post.description && (
                <p className="text-sm text-zinc-400 mt-2">
                  {post.description}
                </p>
              )}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
