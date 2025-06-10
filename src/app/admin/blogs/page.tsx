'use client';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';

// 1) Define a simple type for each blog item
interface BlogItem {
  id: string;
  title: string;
}

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function BlogList() {
  // 2) Tell SWR to type the returned array
  const { data: blogs, error } = useSWR<BlogItem[]>('/api/blogs', fetcher);
  const router = useRouter();

  if (error) return <p>Error loading blogs.</p>;
  if (!blogs) return <p>Loading…</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Blogs</h2>
      <button
        onClick={() => router.push('/admin/blogs/new')}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        + New Blog
      </button>
      <ul className="space-y-2">
        {blogs.map(b => (
          <li
            key={b.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>{b.title}</span>
            <div className="space-x-2">
              <button onClick={() => router.push(`/admin/blogs/${b.id}/edit`)}>
                Edit
              </button>
              <button
                onClick={async () => {
                  await fetch('/api/blogs', {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: b.id }),
                  });
                  router.refresh();
                }}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
