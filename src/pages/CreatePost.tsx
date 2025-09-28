import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { PostForm, PostFormValues } from "@/components/PostForm";
import { posts } from "@/data/posts";
import { showSuccess } from "@/utils/toast";
import { Author } from "@/types";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleCreatePost = (values: PostFormValues) => {
    const newId = Math.max(...posts.map((p) => p.id), 0) + 1;

    let imageUrl: string | undefined = undefined;
    if (values.image && values.image.length > 0) {
      const imageFile = values.image[0];
      imageUrl = URL.createObjectURL(imageFile);
    }

    // For now, we'll create a default author profile for new posts.
    const newAuthor: Author = {
      name: values.author,
      avatarUrl: `https://i.pravatar.cc/150?u=${values.author}`,
      bio: "A passionate writer sharing their thoughts with the world.",
    };

    const newPost = {
      id: newId,
      title: values.title,
      author: newAuthor,
      content: values.content,
      date: new Date().toISOString().split("T")[0],
      imageUrl,
      category: "General", // Default category for new posts
    };
    posts.unshift(newPost);
    showSuccess("Post created successfully!");
    navigate(`/post/${newPost.id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-foreground">
            Create a New Post
          </h1>
          <PostForm onSubmit={handleCreatePost} />
        </div>
      </main>
    </div>
  );
};

export default CreatePost;