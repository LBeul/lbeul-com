import { VStack } from '@chakra-ui/react';
import { PostCardListProps } from '../interfaces';
import PostCard from './PostCard';

const PostCardList = ({ posts }: PostCardListProps): JSX.Element => {
  return (
    <VStack my={5} spacing={5}>
      {posts.map((post: any, index: number) => (
        <PostCard post={post} key={index} />
      ))}
    </VStack>
  );
};

export default PostCardList;
