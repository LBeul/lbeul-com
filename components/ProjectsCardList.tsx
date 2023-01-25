import { VStack } from '@chakra-ui/react';
import { ProjectCardListProps } from '../interfaces';
import ProjectCard from './ProjectCard';

const ProjectCardList = ({ cards }: ProjectCardListProps): JSX.Element => {
  return (
    <VStack my={5} spacing={5}>
      {cards.map((project: any, index: number) => (
        <ProjectCard project={project} key={index} />
      ))}
    </VStack>
  );
};

export default ProjectCardList;
