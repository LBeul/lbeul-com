import { NextPage } from 'next';
import { Book } from '../interfaces';
import BookCardsGrid from '../components/BookCardsGrid';

const Books: NextPage = () => {
  return <BookCardsGrid bookList={bookList} />;
};

const bookList: Book[] = [
  {
    isbn: '9780593135204',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    review: 'Redefines "Sci" in SciFi',
    tags: ['sci-fi', 'fiction'],
  },
  {
    isbn: '9780553418026',
    title: 'The Martian',
    author: 'Andy Weir',
    review: 'Better than the movie',
    tags: ['sci-fi', 'fiction'],
  },
  {
    isbn: '9781407191188',
    title: 'Northern Lights',
    author: 'Philip Pullman',
    review: 'Fantasy masterpiece',
    tags: ['fantasy', 'fiction'],
  },
  {
    isbn: '9780547517650',
    title: 'The Joy of X',
    author: 'Steven Strogatz',
    review: 'Maths, but fun',
    tags: ['non-fiction', 'science'],
  },
  {
    isbn: '9781449389550',
    title: 'Hackers & Painters',
    author: 'Paul Graham',
    review: "Essays of YC's founder",
    tags: ['non-fiction', 'essays'],
  },
];

// FIXME: Transform into Projects Page using the following props:
// const projects = [
//   {
//     name: 'plover',
//     link: 'https://github.com/LBeul/plover-web',
//     description:
//       'Web Application to generate playlist covers using the unsplash images api and a dom2html library. Uses styled-componets and testing-library',
//     tags: ['react', 'typescript', 'web', 'styled-components'],
//     imgUrl: 'plover.png',
//   },
//   {
//     name: 'lbeul.com',
//     link: 'https://github.com/LBeul/lbeul-com',
//     description:
//       'Personal website & portfolio. Includes a markdown-driven blog. The project was built using NextJS, TypeScript and ChakraUI.',
//     tags: ['react', 'next', 'typescript', 'chakra', 'web'],
//     imgUrl: 'lbeulcom.png',
//   },
//   {
//     name: 'twimo',
//     link: 'https://github.com/BartoszBurgiel/twimo',
//     description:
//       'Prototyped cross-platform mobile app to check for nearby cafés and coworkjing spaces. School project with deprecated API.',
//     tags: ['react-native', 'javascript', 'mobile'],
//     imgUrl: 'twimo.png',
//   },
//   {
//     name: 'digitZ',
//     link: 'https://github.com/LBeul/solid-digitz',
//     description:
//       'Web GUI for esp32 microcontroller, used as an IoT gardening sensor hub. Super small bundle size (<50kb, unzipped). Uses solidJS and tailwind',
//     tags: ['solid', 'javascript', 'tailwind', 'web'],
//     imgUrl: 'digitz.png',
//   },
// ];

export default Books;
