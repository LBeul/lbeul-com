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

export type PostTileProps = {
  post: Post;
};

export type PostTileListProps = {
  posts: Post[];
};

export type PostPageProps = {
  frontMatter: { title: string };
  mdxSource: any;
};

export type TagSetProps = {
  tags: string[];
};
