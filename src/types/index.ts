export interface Author {
  name: string;
  avatarUrl: string;
  bio: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: Author;
  date: string;
  imageUrl?: string;
  category: string;
  isNew?: boolean;
}