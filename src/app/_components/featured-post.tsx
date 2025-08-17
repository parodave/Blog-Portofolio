import Link from "next/link";
import Image from "next/image";
import { type Post } from "@/interfaces/post";

export default function FeaturedPost({ post }: { post: Post }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-4">À la une</h2>
      <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
        <div className="cursor-pointer">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={1200}
            height={600}
            className="rounded-lg shadow-lg"
          />
          <h3 className="text-xl mt-4 font-semibold">{post.title}</h3>
          <p className="text-gray-600">{post.excerpt}</p>
        </div>
      </Link>
    </section>
  );
}
