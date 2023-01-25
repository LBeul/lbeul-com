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

type Project = {
  name: string;
  tags: string[];
  link: string;
  imgUrl: string;
  description: string;
};

export type ProjectCardProps = {
  project: Project;
};

export type PostCardListProps = {
  cards: Post[];
};

export type ProjectCardListProps = {
  cards: Project[];
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
