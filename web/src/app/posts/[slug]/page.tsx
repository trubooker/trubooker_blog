import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cacheLife } from "next/cache";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "@/sanity/client";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title, publishedAt, mainImage, body
}`;

async function getPost(slug: string) {
  "use cache";
  cacheLife("minutes");
  return client.fetch(POST_QUERY, { slug });
}

async function PostContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <>
      <h1 className="mt-4 mb-2 text-4xl font-bold">{post.title}</h1>
      {post.publishedAt && (
        <p className="mb-8 text-sm text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      )}
      {post.mainImage && (
        <img
          src={urlFor(post.mainImage).width(1000).url()}
          alt={post.title}
          className="mb-8 w-full rounded-xl"
        />
      )}
      <article className="prose prose-lg max-w-none">
        <PortableText value={post.body} />
      </article>
    </>
  );
}

export default function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <Link href="/" className="text-sm text-gray-500 hover:underline">← All posts</Link>
      <Suspense fallback={<p className="mt-8 text-gray-500">Loading post…</p>}>
        <PostContent params={params} />
      </Suspense>
    </main>
  );
}