import { Author } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthorBioProps {
  author: Author;
}

const AuthorBio = ({ author }: AuthorBioProps) => {
  const fallback = author.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card>
      <CardHeader>
        <CardTitle>About the Author</CardTitle>
      </CardHeader>
      <CardContent className="flex items-start gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={author.avatarUrl} alt={author.name} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">{author.name}</h3>
          <p className="text-muted-foreground">{author.bio}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthorBio;