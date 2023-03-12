import { VStack } from '@chakra-ui/react';
import { ResourceCardListProps } from '../interfaces';
import ResourceCard from './ResourceCard';

const ResourceCardList = ({ cards }: ResourceCardListProps): JSX.Element => {
  return (
    <VStack my={5} spacing={5} width='100%'>
      {cards.map((resource: any, index: number) => (
        <ResourceCard resource={resource} key={index} />
      ))}
    </VStack>
  );
};

export default ResourceCardList;
