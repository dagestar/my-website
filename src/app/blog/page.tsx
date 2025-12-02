"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">
        Guides & Playbooks
      </h1>
      <p className="mt-3 text-base text-slate-600">
        Each guide answers a specific question we hear from Amazon/Shopify
        sellers, gift shop owners, and jewelry brands. Every article links back
        to the relevant Services so you can take the next step when ready.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              {post.intent}
            </p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900">
              {post.title}
            </h2>
            <p className="mt-3 text-sm text-slate-600">{post.summary}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex text-sm font-semibold text-sky-600"
            >
              Read guide →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}


