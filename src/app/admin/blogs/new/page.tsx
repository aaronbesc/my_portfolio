'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewBlog() {
  const [form, setForm] = useState({
    title: '',
    subtitle: '',
    content: '',
    tags: '',
    slug: '',
    ogImage: '',
  });
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: form.title,
        subtitle: form.subtitle,
        content: form.content,
        tags: form.tags.split(',').map(t => t.trim()),
        slug: form.slug || form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        ogImage: form.ogImage || null,
      }),
    });
    router.push('/admin/blogs');
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-lg">
      <h2 className="text-xl font-semibold">New Blog Post</h2>
      <input
        required
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
        className="w-full border p-2 rounded"
      />
      <input
        placeholder="Subtitle"
        value={form.subtitle}
        onChange={e => setForm({ ...form, subtitle: e.target.value })}
        className="w-full border p-2 rounded"
      />
      <textarea
        required
        placeholder="Content (Markdown)"
        value={form.content}
        onChange={e => setForm({ ...form, content: e.target.value })}
        className="w-full border p-2 rounded h-40"
      />
      <input
        placeholder="Tags (comma separated)"
        value={form.tags}
        onChange={e => setForm({ ...form, tags: e.target.value })}
        className="w-full border p-2 rounded"
      />
      <input
        placeholder="Slug (optional)"
        value={form.slug}
        onChange={e => setForm({ ...form, slug: e.target.value })}
        className="w-full border p-2 rounded"
      />
      <input
        placeholder="OG Image URL (optional)"
        value={form.ogImage}
        onChange={e => setForm({ ...form, ogImage: e.target.value })}
        className="w-full border p-2 rounded"
      />
      <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
        Create
      </button>
    </form>
  );
}
