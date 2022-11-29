import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import MyButton from '../../components/MyButton';
import { Heading, VStack } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import blogStyles from './blogStyles';

type PostPageProps = {
  frontMatter: { title: string };
  mdxSource: any;
};

const PostPage = ({ frontMatter: { title }, mdxSource }: PostPageProps) => {
  return (
    <VStack align='stretch' mx='auto' w='60%' spacing='20px' mb='20px'>
      <MDXProvider components={blogStyles}>
        <Heading fontSize='4xl' as='h1'>
          {title}
        </Heading>
        <MDXRemote {...mdxSource} components={{ MyButton }} />
      </MDXProvider>
    </VStack>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

type getStaticPropsParams = {
  params: { slug: string };
};

export const getStaticProps = async ({
  params: { slug },
}: getStaticPropsParams) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: { frontMatter, slug, mdxSource },
  };
};

export default PostPage;