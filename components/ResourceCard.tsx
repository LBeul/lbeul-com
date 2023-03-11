import { Image, Text, Card, CardBody, Stack, Heading } from '@chakra-ui/react';
import TagSet from './TagSet';
import { ResourceCardProps } from '../interfaces';

const ResourceCard = ({ resource }: ResourceCardProps): JSX.Element => {
  const { name, tags, link, description } = resource;

  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        width={'100%'}
        cursor='pointer'
      >
        <Image
          src={`project-images/twimo.png`}
          alt='thumbnail'
          objectFit='cover'
          borderLeftRadius='lg'
          maxW={{ base: '100%', sm: '150px' }}
        />
        <Stack>
          <CardBody>
            <Heading size='md'>{name}</Heading>
            <Text py='2'>{description}</Text>
            <TagSet tags={tags} />
          </CardBody>
        </Stack>
      </Card>
    </a>
  );
};

export default ResourceCard;
