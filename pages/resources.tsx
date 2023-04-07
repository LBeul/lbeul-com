import { NextPage } from 'next';
import resources from '../data/resources';
import CardsList from '../components/CardsList';
import ResourceCard from '../components/cards/ResourceCard';

const Resources: NextPage = () => {
  return (
    <CardsList>
      {resources.map((resource: any, index: number) => (
        <ResourceCard resource={resource} key={index} />
      ))}
    </CardsList>
  );
};

export default Resources;
