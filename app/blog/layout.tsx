export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-8">
      <div className="max-w-2xl">
        <article className="text-sm sm:text-base text-zinc-300 leading-relaxed">
          {children}
        </article>
      </div>
    </section>
  );
}
