import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import AuthorBio from "@/components/AuthorBio";
import SocialShare from "@/components/SocialShare";
import BlogPostCard from "@/components/BlogPostCard";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Post } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

const fetchPostById = async (id: string): Promise<Post> => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return {
    id: data.id,
    title: data.title,
    content: data.content,
    author: {
      name: data.author_name,
      avatarUrl: data.author_avatar_url,
      bio: data.author_bio,
    },
    date: format(new Date(data.created_at), "yyyy-MM-dd"),
    imageUrl: data.image_url,
    category: data.category,
  };
};

const fetchRelatedPosts = async (category: string, currentPostId: string): Promise<Post[]> => {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('category', category)
        .neq('id', currentPostId)
        .limit(3);

    if (error) {
        throw new Error(error.message);
    }

    return data.map((post) => ({
        id: post.id,
        title: post.title,
        content: post.content,
        author: {
            name: post.author_name,
            avatarUrl: post.author_avatar_url,
            bio: post.author_bio,
        },
        date: format(new Date(post.created_at), "yyyy-MM-dd"),
        imageUrl: post.image_url,
        category: post.category,
    }));
};

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: post, isLoading, isError } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id!),
    enabled: !!id,
  });

  const { data: relatedPosts } = useQuery({
    queryKey: ["relatedPosts", post?.category, id],
    queryFn: () => fetchRelatedPosts(post!.category, id!),
    enabled: !!post,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-[400px] w-full" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (isError || !post) {
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
            <motion.div
              className="mb-8 overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AspectRatio ratio={16 / 9}>
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </motion.div>
          )}

          <motion.article
            className="prose prose-invert max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              By {post.author.name} on {post.date}
            </p>
            <div className="mt-8 text-foreground/80 whitespace-pre-wrap">
              {post.content}
            </div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SocialShare url={window.location.href} title={post.title} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <AuthorBio author={post.author} />
          </motion.div>

          {relatedPosts && relatedPosts.length > 0 && (
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <BlogPostCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default PostDetail;