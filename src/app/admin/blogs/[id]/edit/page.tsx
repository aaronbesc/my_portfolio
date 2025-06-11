'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

// 1) Define the shapes instead of using `any`
interface BlogData {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  tags: string[];
  slug: string;
  ogImage?: string | null;
}

interface BlogForm {
  title: string;
  subtitle: string;
  content: string;
  tags: string;
  slug: string;
  ogImage: string;
}

export default function EditBlog() {
  const { id } = useParams();
  const [form, setForm] = useState<BlogForm | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then((data: BlogData[]) => {
        const blog = data.find(b => b.id === id);
        if (blog) {
          setForm({
            title: blog.title,
            subtitle: blog.subtitle || '',
            content: blog.content,
            tags: blog.tags.join(','),
            slug: blog.slug,
            ogImage: blog.ogImage || '',
          });
        }
      });
  }, [id]);

  if (!form) return <p>Loading…</p>;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // ---- NULL-GUARD ----
    if (!form) return;
    // --------------------

    await fetch('/api/blogs', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        title: form.title,
        subtitle: form.subtitle,
        content: form.content,
        tags: form.tags.split(',').map(t => t.trim()),
        slug: form.slug,
        ogImage: form.ogImage || null,
      }),
    });

    router.push('/admin/blogs');
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-lg">
      <h2 className="text-xl font-semibold">Edit Blog Post</h2>
      {/* …your inputs (same as NewBlog) */}
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Save Changes
      </button>
    </form>
  );
}
