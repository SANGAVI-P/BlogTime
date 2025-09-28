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

interface BlogPostCardProps {
  post: Post;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Card className="flex flex-col">
      {post.imageUrl && (
        <AspectRatio ratio={16 / 9}>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="rounded-t-lg object-cover w-full h-full"
          />
        </AspectRatio>
      )}
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>
          By {post.author} on {post.date}
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
  );
};

export default BlogPostCard;