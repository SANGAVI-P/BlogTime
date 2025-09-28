export interface Author {
  name: string;
  avatarUrl: string;
  bio: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  author: Author;
  date: string;
  imageUrl?: string;
  category: string;
}