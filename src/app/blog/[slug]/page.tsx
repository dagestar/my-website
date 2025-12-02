import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { blogPosts } from "@/data/blogPosts";

marked.setOptions({ breaks: true });

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((item) => item.slug === resolvedParams.slug);
  if (!post) {
    notFound();
  }

  const filePath = path.join(process.cwd(), post.filePath);
  const rawContent = await fs.readFile(filePath, "utf-8");
  const htmlContent = marked.parse(rawContent) as string;
  const wordCount = rawContent.split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(3, Math.ceil(wordCount / 200));
  const updatedAt = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <article className="mx-auto max-w-4xl space-y-8 px-4 py-16">
      <Link href="/blog" className="text-sm text-slate-500">
        ← Back to guides
      </Link>
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-[1px] shadow-2xl">
        <div className="rounded-[calc(1.5rem-1px)] bg-slate-900/95 px-8 py-10 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            {post.intent}
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-base text-slate-200">{post.summary}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {readingMinutes} min read
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Updated {updatedAt}
            </span>
          </div>
        </div>
      </div>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
        <p className="font-semibold text-slate-900">
          Need help implementing this?
        </p>
        <p className="mt-2">
          Visit the{" "}
          <a href="#services" className="text-sky-600 underline">
            Services
          </a>{" "}
          and{" "}
          <a href="#pricing" className="text-sky-600 underline">
            Pricing
          </a>{" "}
          sections to see how we execute these steps, or{" "}
          <a href="#contact" className="text-sky-600 underline">
            contact us for a 20-min consultation
          </a>
          .
        </p>
      </div>
    </article>
  );
}


