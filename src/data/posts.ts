import { Post } from "@/types";

export let posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with React",
    content:
      "React is a popular JavaScript library for building user interfaces. This post will guide you through the basics of setting up your first React application and understanding its core concepts like components, state, and props.",
    author: "Jane Doe",
    date: "2024-07-28",
    imageUrl: "https://picsum.photos/seed/react/800/400",
  },
  {
    id: 2,
    title: "A Guide to Tailwind CSS",
    content:
      "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. We'll explore how to use its powerful features to style your blog app.",
    author: "John Smith",
    date: "2024-07-27",
    imageUrl: "https://picsum.photos/seed/tailwind/800/400",
  },
  {
    id: 3,
    title: "Understanding TypeScript",
    content:
      "TypeScript adds static types to JavaScript, which can help you catch errors early and write more robust code. This post covers the fundamental types and how to use them effectively in your projects.",
    author: "Jane Doe",
    date: "2024-07-26",
    imageUrl: "https://picsum.photos/seed/typescript/800/400",
  },
];