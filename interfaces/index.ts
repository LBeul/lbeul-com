/* GENERAL TYPES */

export type TagSetProps = {
  tags: string[];
};

/* BLOG RELATED */

type Post = {
  slug: string;
  frontMatter: {
    thumbnailUrl: string;
    date: any;
    title: string;
    description: string;
    tags: string[];
  };
};

export type PostCardProps = {
  post: Post;
};

export type PostPageProps = {
  frontMatter: { title: string };
  mdxSource: any;
};

export type PostCardListProps = {
  cards: Post[];
};

/* RESOURCE RELATED */

export type Resource = {
  name: string;
  tags: string[];
  link: string;
  description: string;
};

export type ResourceCardProps = {
  resource: Resource;
};

export type ResourceCardListProps = {
  cards: Resource[];
};

/* BOOK RELATED */

export type Book = {
  isbn: string;
  title: string;
  author: string;
  review: string;
  tags: string[];
};

export type BookCardsGridProps = {
  bookList: Book[];
};
