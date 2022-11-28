import { HStack, Tag } from '@chakra-ui/react';

const TagSet = ({ tags }) => {
  return (
    <HStack mt={3}>
      {tags.map((tagLabel) => (
        <Tag key={tagLabel}>{tagLabel}</Tag>
      ))}
    </HStack>
  );
};

export default TagSet;
