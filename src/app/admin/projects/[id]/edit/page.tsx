'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function EditProject() {
  const { id } = useParams();
  const [form, setForm] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then((data) => {
        const project = data.find((p: any) => p.id === id);
        if (project) {
          setForm({
            title: project.title,
            description: project.description,
            githubLink: project.githubLink || '',
            tags: project.tags.join(','),
          });
        }
      });
  }, [id]);

  if (!form) return <p>Loading…</p>;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/projects', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        title: form.title,
        description: form.description,
        githubLink: form.githubLink || null,
        tags: form.tags.split(',').map((t: string) => t.trim()),
      }),
    });
    router.push('/admin/projects');
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-lg">
      <h2 className="text-xl font-semibold">Edit Project</h2>
      {/* same inputs as NewProject, populated from form */}
      {/* … */}
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Save Changes
      </button>
    </form>
  );
}