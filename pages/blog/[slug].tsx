import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { Heading, VStack, Image, Text } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { PostPageProps } from '../../interfaces';

const PostPage = ({ frontMatter: { title }, mdxSource }: PostPageProps) => {
  return (
    <VStack align='stretch' mx='auto' w='80%' spacing='20px' mb='20px'>
      <MDXProvider components={blogStyles}>
        <Heading fontSize='7xl' as='h1'>
          {title}
        </Heading>
        <MDXRemote {...mdxSource} />
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

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
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

const blogStyles = {
  h4: (props: any) => (
    <Heading {...props} fontSize='lg' color='gray.500' lineHeight={1.75} />
  ),
  h2: (props: any) => (
    <Heading {...props} fontSize='2xl' as='h2' lineHeight={2} />
  ),
  h3: (props: any) => <Heading {...props} fontSize='lg' as='h3' />,
  p: (props: any) => <Text {...props} fontSize='lg' lineHeight={1.75} />,
  img: (props: any) => (
    <Image
      {...props}
      src={`../blog-images/${props.src}`}
      objectFit='cover'
      borderRadius='xl'
      width='100%'
      mx='auto'
      alt={props.alt}
    />
  ),
};

export default PostPage;
