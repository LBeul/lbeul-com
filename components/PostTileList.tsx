import { VStack } from '@chakra-ui/react';
import { PostTileListProps } from '../interfaces';
import PostTile from './PostTile';

const PostTileList = ({ posts }: PostTileListProps): JSX.Element => {
  return (
    <VStack my={10} spacing={5}>
      {posts.map((post: any, index: number) => (
        <PostTile post={post} key={index} />
      ))}
    </VStack>
  );
};

export default PostTileList;
