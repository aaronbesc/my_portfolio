'use client';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';

// 1) Define your project‐list item
interface ProjectItem {
  id: string;
  title: string;
}

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function ProjectList() {
  // 2) Apply the type to SWR
  const { data: projects, error } = useSWR<ProjectItem[]>('/api/projects', fetcher);
  const router = useRouter();

  if (error) return <p>Error loading projects.</p>;
  if (!projects) return <p>Loading…</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Projects</h2>
      <button
        onClick={() => router.push('/admin/projects/new')}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        + New Project
      </button>
      <ul className="space-y-2">
        {projects.map(p => (
          <li
            key={p.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>{p.title}</span>
            <div className="space-x-2">
              <button onClick={() => router.push(`/admin/projects/${p.id}/edit`)}>
                Edit
              </button>
              <button
                onClick={async () => {
                  await fetch('/api/projects', {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: p.id }),
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
