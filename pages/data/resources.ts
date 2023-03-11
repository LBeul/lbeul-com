import { Resource } from '../../interfaces';

const resources: Resource[] = [
  {
    name: 'plover',
    link: 'https://github.com/LBeul/plover-web',
    description:
      'Web Application to generate playlist covers using the unsplash images api and a dom2html library. Uses styled-componets and testing-library',
    tags: ['react', 'typescript', 'web', 'styled-components'],
  },
  {
    name: 'lbeul.com',
    link: 'https://github.com/LBeul/lbeul-com',
    description:
      'Personal website & portfolio. Includes a markdown-driven blog. The project was built using NextJS, TypeScript and ChakraUI.',
    tags: ['react', 'next', 'typescript', 'chakra', 'web'],
  },
  {
    name: 'twimo',
    link: 'https://github.com/BartoszBurgiel/twimo',
    description:
      'Prototyped cross-platform mobile app to check for nearby cafés and coworkjing spaces. School project with deprecated API.',
    tags: ['react-native', 'javascript', 'mobile'],
  },
  {
    name: 'digitZ',
    link: 'https://github.com/LBeul/solid-digitz',
    description:
      'Web GUI for esp32 microcontroller, used as an IoT gardening sensor hub. Super small bundle size (<50kb, unzipped). Uses solidJS and tailwind',
    tags: ['solid', 'javascript', 'tailwind', 'web'],
  },
];

export default resources;
