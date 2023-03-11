export type Book = {
  isbn: string;
  title: string;
  author: string;
  review: string;
  tags: string[];
};

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

export type Resource = {
  name: string;
  tags: string[];
  link: string;
  description: string;
};

export type ResourceCardProps = {
  resource: Resource;
};

export type PostCardListProps = {
  cards: Post[];
};

export type ResourceCardListProps = {
  cards: Resource[];
};

export type PostPageProps = {
  frontMatter: { title: string };
  mdxSource: any;
};

export type TagSetProps = {
  tags: string[];
};

export type BookCardsGridProps = {
  bookList: Book[];
};
