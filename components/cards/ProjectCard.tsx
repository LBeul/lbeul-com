import {
  Card,
  CardBody,
  GridItem,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import { Project } from '../../interfaces';
import TagSet from '../TagSet';
import Link from 'next/link';

const ProjectCard = ({ project }: { project: Project }): JSX.Element => {
  const { name, link, description, tags, imgUrl } = project;
  return (
    <Link passHref href={link}>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          src={`/project-images/${imgUrl}`}
          alt='thumbnail'
          objectFit='cover'
          maxW={{ base: '100%', sm: '150px' }}
          height='100%'
        />
        <CardBody>
          <Text fontSize='xl' fontWeight='semibold'>
            {name}
          </Text>
          <Text>{description}</Text>
          <HStack mt={2}>
            <TagSet tags={tags} />
          </HStack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProjectCard;
