import { Text, Card, CardBody, Heading, Link } from '@chakra-ui/react';
import TagSet from '../TagSet';
import { ResourceCardProps } from '../../interfaces';

const ResourceCard = ({ resource }: ResourceCardProps): JSX.Element => {
  const { name, tags, link, description } = resource;
  return (
    <Card
      direction='column'
      overflow='hidden'
      variant='filled'
      cursor='pointer'
      width='100%'
    >
      <CardBody>
        <Link href={link} target='_blank' rel='noopener noreferrer'>
          <Heading size='md'>{name}</Heading>
          <Text py='2'>{description}</Text>
        </Link>
        <TagSet tags={tags} color='cyan' />
      </CardBody>
    </Card>
  );
};

export default ResourceCard;
