import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Header from "@/components/Header";
import { PostForm, PostFormValues } from "@/components/PostForm";
import { supabase } from "@/integrations/supabase/client";
import { showSuccess, showError } from "@/utils/toast";

const createPostInDb = async (values: PostFormValues) => {
  const newAuthor = {
    name: values.author,
    avatarUrl: `https://i.pravatar.cc/150?u=${encodeURIComponent(values.author)}`,
    bio: "A passionate writer sharing their thoughts with the world.",
  };

  const { data, error } = await supabase
    .from("posts")
    .insert([
      {
        title: values.title,
        content: values.content,
        author_name: newAuthor.name,
        author_avatar_url: newAuthor.avatarUrl,
        author_bio: newAuthor.bio,
        category: "General",
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

const CreatePost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPostInDb,
    onSuccess: (data) => {
      showSuccess("Post created successfully!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate(`/post/${data.id}`);
    },
    onError: (error) => {
      showError(`Failed to create post: ${error.message}`);
    },
  });

  const handleCreatePost = (values: PostFormValues) => {
    mutation.mutate(values);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-foreground">
            Create a New Post
          </h1>
          <PostForm
            onSubmit={handleCreatePost}
            isSubmitting={mutation.isPending}
          />
        </div>
      </main>
    </div>
  );
};

export default CreatePost;