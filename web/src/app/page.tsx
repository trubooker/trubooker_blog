import Link from "next/link";
import { cacheLife } from "next/cache";
import { client, urlFor } from "@/sanity/client";
import HeroCarousel from "@/components/HeroCarousel";
import Browse from "@/components/Browse";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]
  | order(publishedAt desc){
    _id, title, slug, publishedAt, mainImage,
    "excerpt": pt::text(body)
  }`;

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt?: string;
  mainImage?: any;
  excerpt?: string;
};

async function getPosts(): Promise<Post[]> {
  "use cache";
  cacheLife("minutes");
  return client.fetch(POSTS_QUERY);
}

function formatDate(date?: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function shorten(text?: string | null, length = 140) {
  if (!text) return "";
  return text.length > length ? text.slice(0, length).trim() + "…" : text;
}

export default async function Home() {
  const posts = await getPosts();

  // Up to 5 latest posts that have an image become carousel slides
  

  return (
    <main>
      <HeroCarousel  />
      <Browse/>

      {/* ---------- ALL POSTS ---------- */}
      <div id="latest" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-16">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-blue-600">
          Latest Posts
        </h2>

        {posts.length === 0 && (
          <p className="py-20 text-center text-gray-500">
            No posts yet. Publish one in the Studio and it will show up here.
          </p>
        )}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/posts/${post.slug.current}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                {post.mainImage && (
                  <img
                    src={urlFor(post.mainImage).width(600).height(400).url()}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs text-gray-500">{formatDate(post.publishedAt)}</p>
                <h3 className="mt-2 text-lg font-bold group-hover:text-blue-600">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {shorten(post.excerpt)}
                </p>
                <span className="mt-4 text-sm font-semibold text-blue-600">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ---------- CTA BANNER ---------- */}
      <section className="mx-auto mt-20 max-w-6xl px-4">
        <div className="rounded-3xl bg-blue-50 px-8 py-12 text-center md:py-16">
          <h2 className="text-3xl font-bold">Ready for your next trip?</h2>
          <p className="mx-auto mt-3 max-w-md text-gray-600">
            Compare routes, pick your seat and book in minutes with TruBooker.
          </p>
          <a
            href="https://trubooker.com"
            className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Book Now
          </a>
        </div>
      </section>
    </main>
  );
}