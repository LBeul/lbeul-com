import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextPage } from 'next';
import CardsList from '../components/CardsList';
import PostCard from '../components/cards/PostCard';

const Home: NextPage = ({ posts }: any) => {
  // return <PostCardList cards={posts} />;
  return (
    <CardsList>
      {posts.map((post: any, index: number) => (
        <PostCard post={post} key={index} />
      ))}
    </CardsList>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split('.')[0],
    };
  });
  return { props: { posts } };
};

export default Home;
