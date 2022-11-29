import { Image, Text, Card, CardBody, Stack, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { PostCardProps } from '../interfaces';

import TagSet from './TagSet';

const PostCard = ({ post }: PostCardProps): JSX.Element => {
  const { slug, frontMatter } = post;
  return (
    <Link href={'/blog/' + slug} passHref>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        width={'100%'}
        cursor='pointer'
      >
        <Image
          src={frontMatter.thumbnailUrl}
          alt='thumbnail'
          objectFit='cover'
          borderLeftRadius='lg'
          maxW={{ base: '100%', sm: '200px' }}
        />
        <Stack>
          <CardBody>
            <Text
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
            >
              {frontMatter.date}
            </Text>
            <Heading size='md'>{frontMatter.title}</Heading>
            <Text py='2'>{frontMatter.description}</Text>
            <TagSet tags={frontMatter.tags} />
          </CardBody>
        </Stack>
      </Card>
    </Link>
  );
};

export default PostCard;
