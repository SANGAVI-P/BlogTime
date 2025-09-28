import { Post } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface BlogPostCardProps {
  post: Post;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <Card className="flex flex-col h-full">
        <div className="relative">
          {post.imageUrl && (
            <AspectRatio ratio={16 / 9}>
              <img
                src={post.imageUrl}
                alt={post.title}
                className="rounded-t-lg object-cover w-full h-full"
              />
            </AspectRatio>
          )}
          <Badge className="absolute top-2 right-2">{post.category}</Badge>
          {post.isNew && (
            <Badge variant="destructive" className="absolute top-2 left-2">
              New!
            </Badge>
          )}
        </div>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>
            By {post.author.name} on {post.date}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">
            {post.content.substring(0, 120)}...
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link to={`/post/${post.id}`}>Read More</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogPostCard;