// src/app/admin/layout.tsx
import { ReactNode } from "react";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import AdminNav from "@/components/AdminNav";
import { authOptions } from "@/lib/auth";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <p className="p-6">
        You must{" "}
        <Link href="/api/auth/signin" className="underline">
          sign in
        </Link>{" "}
        to access the admin panel.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <AdminNav />
      <main className="p-6">{children}</main>
    </div>
  );
}
