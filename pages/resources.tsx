import { NextPage } from 'next';
import ResourceCardList from '../components/ResourceCardList';
import resources from './data/resources';

import { getLinkPreview } from 'link-preview-js';
import { PopulatedResource, RawResource } from '../interfaces';

const Resources: NextPage = ({ populatedResources }: any) => {
  return <ResourceCardList cards={populatedResources} />;
};

export const getStaticProps = async () => {
  const populatedResources: PopulatedResource[] = await Promise.all(
    resources.map(async (resource: RawResource) => {
      let metaData = await getLinkPreview(resource.link);
      let imgLink: string = metaData.images[0];
      return { ...resource, imgLink };
    })
  );
  return { props: { populatedResources } };
};

export default Resources;
