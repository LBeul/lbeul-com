import { NextPage } from 'next';
import ResourceCardList from '../components/ResourceCardList';
import resources from './data/resources';

const Resources: NextPage = () => {
  return <ResourceCardList cards={resources} />;
};

export default Resources;
