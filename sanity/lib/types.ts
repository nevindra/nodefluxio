export interface SanityPostMeta {
  _id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
  coverImage?: string;
  readingTime: string;
}

export interface SanityPost extends SanityPostMeta {
  body: any[];
}
