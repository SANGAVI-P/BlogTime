import { Author, Post } from "@/types";

const authors: Record<string, Author> = {
  jane: {
    name: "Jane Doe",
    avatarUrl: "https://i.pravatar.cc/150?u=jane",
    bio: "Jane is a full-stack developer with a passion for creating beautiful and functional web applications. She specializes in React and TypeScript.",
  },
  john: {
    name: "John Smith",
    avatarUrl: "https://i.pravatar.cc/150?u=john",
    bio: "John is a design expert who loves crafting intuitive user experiences. He is the creative mind behind the look and feel of this blog.",
  },
  emily: {
    name: "Emily White",
    avatarUrl: "https://i.pravatar.cc/150?u=emily",
    bio: "Emily is a wellness coach and writer who focuses on helping people live healthier, more balanced lives. Her articles are full of practical tips.",
  },
  chris: {
    name: "Chris Green",
    avatarUrl: "https://i.pravatar.cc/150?u=chris",
    bio: "Chris is an avid traveler and photographer. He documents his adventures around the globe, sharing stories and tips for fellow explorers.",
  },
};

export let posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with React",
    content:
      "React is a popular JavaScript library for building user interfaces. This post will guide you through the basics of setting up your first React application and understanding its core concepts like components, state, and props.",
    author: authors.jane,
    date: "2024-07-28",
    imageUrl: "https://picsum.photos/seed/react/800/400",
    category: "Tech",
  },
  {
    id: 2,
    title: "A Guide to Tailwind CSS",
    content:
      "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. We'll explore how to use its powerful features to style your blog app.",
    author: authors.john,
    date: "2024-07-27",
    imageUrl: "https://picsum.photos/seed/tailwind/800/400",
    category: "Tech",
  },
  {
    id: 3,
    title: "Understanding TypeScript",
    content:
      "TypeScript adds static types to JavaScript, which can help you catch errors early and write more robust code. This post covers the fundamental types and how to use them effectively in your projects.",
    author: authors.jane,
    date: "2024-07-26",
    imageUrl: "https://picsum.photos/seed/typescript/800/400",
    category: "Tech",
  },
  {
    id: 4,
    title: "10 Healthy Morning Habits",
    content:
      "Start your day right with these 10 simple habits for a healthier and more productive life. From hydration to mindfulness, we cover it all.",
    author: authors.emily,
    date: "2024-07-25",
    imageUrl: "https://picsum.photos/seed/lifestyle/800/400",
    category: "Lifestyle",
  },
  {
    id: 5,
    title: "Backpacking Through Southeast Asia",
    content:
      "A complete guide to backpacking through the beautiful landscapes of Southeast Asia. Discover hidden gems, budget tips, and must-see destinations.",
    author: authors.chris,
    date: "2024-07-24",
    imageUrl: "https://picsum.photos/seed/travel/800/400",
    category: "Travel",
  },
];