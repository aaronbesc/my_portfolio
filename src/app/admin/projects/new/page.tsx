'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewProject() {
  const [form, setForm] = useState({ title: '', description: '', githubLink: '', tags: '' });
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: form.title,
        description: form.description,
        githubLink: form.githubLink || null,
        tags: form.tags.split(',').map(t => t.trim()),
      }),
    });
    router.push('/admin/projects');
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-lg">
      <h2 className="text-xl font-semibold">New Project</h2>
      <input
        required
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
        className="w-full border p-2 rounded"
      />
      <textarea
        required
        placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
        className="w-full border p-2 rounded h-24"
      />
      <input
        placeholder="GitHub Link"
        value={form.githubLink}
        onChange={e => setForm({ ...form, githubLink: e.target.value })}
        className="w-full border p-2 rounded"
      />
      <input
        placeholder="Tags (comma separated)"
        value={form.tags}
        onChange={e => setForm({ ...form, tags: e.target.value })}
        className="w-full border p-2 rounded"
      />
      <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
        Create
      </button>
    </form>
  );
}