// src/components/MDXClient.tsx
"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface MDXClientProps {
  source: MDXRemoteSerializeResult;
}

export default function MDXClient({ source }: MDXClientProps) {
  return <MDXRemote {...source} />;
}
