import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Link from "next/link";
import { Box, HStack, VStack, Image, Text } from "@chakra-ui/react";
import TagSet from "../components/TagSet";

export default function Home({ posts }) {
  return (
    <VStack>
      {posts.map((post, index) => (
        <Link href={"/blog/" + post.slug} passHref key={index}>
          <HStack width="90%" borderRadius="lg" borderWidth="1px">
            <Image
              src={post.frontMatter.thumbnailUrl}
              alt="thumbnail"
              boxSize="175px"
              objectFit="cover"
              borderLeftRadius="lg"
            />
            <Box paddingLeft={5}>
              <Text
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
              >
                {post.frontMatter.date}
              </Text>
              <Text fontSize="xl" fontWeight="semibold">
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
