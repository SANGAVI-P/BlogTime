import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import BlogPostCard from "@/components/BlogPostCard";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Post } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const fetchPosts = async (): Promise<Post[]> => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

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

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const categories = posts
    ? [...new Set(posts.map((post) => post.category).filter(Boolean))]
    : [];

  const filteredPosts = posts?.filter((post) => {
    const matchesCategory = selectedCategory
      ? post.category === selectedCategory
      : true;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-12 px-4">
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search posts..."
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={!selectedCategory ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {isLoading && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-[225px] w-full rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {isError && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-destructive">
              Failed to load posts
            </h2>
            <p className="text-muted-foreground mt-2">
              Please try refreshing the page.
            </p>
          </div>
        )}

        {filteredPosts && filteredPosts.length > 0 ? (
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          !isLoading && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-foreground">
                No posts found
              </h2>
              <p className="text-muted-foreground mt-2">
                Try adjusting your search or category filters, or create the first post!
              </p>
            </div>
          )
        )}
      </main>
    </div>
  );
};

export default Index;