import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Link from 'next/link';
import { Box, HStack, VStack, Image, Text } from '@chakra-ui/react';
import TagSet from '../components/TagSet';

export default function Home({ posts }) {
  return (
    <VStack my={10} spacing={5}>
      {posts.map((post, index) => (
        <Link href={'/blog/' + post.slug} passHref key={index}>
          <HStack
            width='75%'
            borderRadius='lg'
            borderWidth='0.5px'
            boxShadow='lg'
          >
            <Image
              src={post.frontMatter.thumbnailUrl}
              alt='thumbnail'
              boxSize='225px'
              objectFit='cover'
              borderLeftRadius='lg'
            />
            <Box p={5}>
              <Text
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
              >
                {post.frontMatter.date}
              </Text>
              <Text fontSize='xl' fontWeight='semibold'>
                {post.frontMatter.title}
              </Text>
              <Text>{post.frontMatter.description}</Text>
              <TagSet tags={post.frontMatter.tags} />
            </Box>
          </HStack>
        </Link>
      ))}
    </VStack>
  );
}

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
  return {
    props: {
      posts,
    },
  };
};
