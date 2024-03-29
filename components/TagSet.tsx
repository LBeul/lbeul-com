import { Flex, Tag } from '@chakra-ui/react';
import { TagSetProps } from '../interfaces';

const TagSet = ({ tags, color }: TagSetProps): JSX.Element => {
  return (
    <Flex wrap='wrap' direction='row'>
      {tags.map((tagLabel) => (
        <Tag colorScheme={color} key={tagLabel} mr={2} my={1}>
          {tagLabel}
        </Tag>
      ))}
    </Flex>
  );
};

export default TagSet;
