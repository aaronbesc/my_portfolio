import Link from 'next/link';

export default function AdminNav() {
  return (
    <nav className="bg-white dark:bg-gray-900 p-4 border-b dark:border-gray-700">
      <Link href="/admin" className="mr-4 font-semibold">Dashboard</Link>
      <Link href="/admin/blogs" className="mr-4">Blogs</Link>
      <Link href="/admin/projects">Projects</Link>
    </nav>
  );
}
