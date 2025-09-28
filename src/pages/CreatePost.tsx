import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { PostForm, PostFormValues } from "@/components/PostForm";
import { posts } from "@/data/posts";
import { showSuccess } from "@/utils/toast";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleCreatePost = (values: PostFormValues) => {
    const newPost = {
      id: posts.length + 1,
      ...values,
      date: new Date().toISOString().split("T")[0],
    };
    posts.unshift(newPost);
    showSuccess("Post created successfully!");
    navigate("/");
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