import Container from "@/app/_components/container";
import FeaturedPost from "@/app/_components/featured-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const featured = allPosts.find((p) => p.slug === "dao-the-hand");
  const others = allPosts.filter((p) => p.slug !== "dao-the-hand");

  return (
    <main>
      <Container>
        <Intro />
        {featured && <FeaturedPost post={featured} />}
        {others.length > 0 && <MoreStories posts={others} />}
      </Container>
    </main>
  );
}
