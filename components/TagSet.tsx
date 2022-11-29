import { HStack, Tag } from '@chakra-ui/react';

type TagSetProps = {
  tags: string[];
};

const TagSet = ({ tags }: TagSetProps): JSX.Element => {
  return (
    <HStack mt={3}>
      {tags.map((tagLabel) => (
        <Tag key={tagLabel}>{tagLabel}</Tag>
      ))}
    </HStack>
  );
};

export default TagSet;
