import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Link from "next/link";
import Image from "next/image";

export default function Home({ posts }) {
  return (
    <div className="container">
      {posts.map((post, index) => (
        <Link href={"/blog/" + post.slug} passHref key={index}>
          <div
            className="container flex flex-row rounded-lg border border-gray-200 shadow-lg my-5"
            style={{ maxWidth: "540px" }}
          >
            <img
              src={post.frontMatter.thumbnailUrl}
              className="aspect-square object-cover rounded-l-lg h-48 w-48"
              alt="thumbnail"
              objectFit="cover"
            />
            <div className="container py-5 px-5">
              <h5 className="text-xl font-">{post.frontMatter.title}</h5>
              <p className="text-base">{post.frontMatter.description}</p>
              <p className="text-sm text-gray-500">{post.frontMatter.date}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};
