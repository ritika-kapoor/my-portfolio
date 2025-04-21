export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  tags: string[];
  likes: number;
  comments: Comment[];
};

export type Comment = {
  id: string;
  content: string;
  createdAt: Date;
  authorEmail: string;
  authorName: string | null;
  postId: string;
};

export type BlogPostPreview = Pick<BlogPost, 'id' | 'title' | 'slug' | 'excerpt' | 'createdAt' | 'tags' | 'likes'>; 