import { HStack, Image, Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { PostTileProps } from '../interfaces';

import TagSet from './TagSet';

const PostTile = ({ post }: PostTileProps): JSX.Element => {
  const { slug, frontMatter } = post;
  return (
    <Link href={'/blog/' + slug} passHref>
      <HStack width='75%' borderRadius='lg' borderWidth='0.5px' boxShadow='lg'>
        <Image
          src={frontMatter.thumbnailUrl}
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
            {frontMatter.date}
          </Text>
          <Text fontSize='xl' fontWeight='semibold'>
            {frontMatter.title}
          </Text>
          <Text>{frontMatter.description}</Text>
          <TagSet tags={frontMatter.tags} />
        </Box>
      </HStack>
    </Link>
  );
};

export default PostTile;
