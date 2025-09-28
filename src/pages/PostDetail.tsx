import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { posts } from "@/data/posts";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import AuthorBio from "@/components/AuthorBio";
import SocialShare from "@/components/SocialShare";
import BlogPostCard from "@/components/BlogPostCard";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === Number(id));

  const relatedPosts = post
    ? posts
        .filter(
          (p) => p.category === post.category && p.id !== post.id,
        )
        .slice(0, 3)
    : [];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-12 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the post you're looking for.
          </p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Button asChild variant="outline" className="mb-8">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Posts
            </Link>
          </Button>

          {post.imageUrl && (
            <div className="mb-8 overflow-hidden rounded-lg">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          )}

          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              By {post.author.name} on {post.date}
            </p>
            <div className="mt-8 text-foreground/80 whitespace-pre-wrap">
              {post.content}
            </div>
          </article>

          <SocialShare url={window.location.href} title={post.title} />

          <AuthorBio author={post.author} />

          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <BlogPostCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default PostDetail;