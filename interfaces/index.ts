/* GENERAL TYPES */

export type TagSetProps = {
  tags: string[];
  color?: string;
};

export type ListProps = {
  children: JSX.Element | JSX.Element[];
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

/* PROJECT RELATED */

export type Project = {
  name: string;
  link: string;
  description: string;
  tags: string[];
  imgUrl: string;
};

export type ProjectsGridProps = {
  projects: Project[];
};
