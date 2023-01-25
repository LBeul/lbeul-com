import { VStack } from '@chakra-ui/react';
import { PostCardListProps } from '../interfaces';
import PostCard from './PostCard';

const PostCardList = ({ cards }: PostCardListProps): JSX.Element => {
  return (
    <VStack my={5} spacing={5}>
      {cards.map((post: any, index: number) => (
        <PostCard post={post} key={index} />
      ))}
    </VStack>
  );
};

export default PostCardList;
