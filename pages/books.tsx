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
    review: 'Emphasizes the "Sci" in SciFi',
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
    review: 'Underestimated masterpiece',
    tags: ['fantasy', 'fiction'],
  },
  {
    isbn: '9780547517650',
    title: 'The Joy of X',
    author: 'Steven Strogatz',
    review: 'Complex math explained',
    tags: ['non-fiction', 'science'],
  },
  {
    isbn: '9781449389550',
    title: 'Hackers & Painters',
    author: 'Paul Graham',
    review: "Essays of YC's founder",
    tags: ['non-fiction', 'essays'],
  },
  {
    isbn: '9781665190565',
    title: 'The Furthest Station',
    author: 'Ben Aaronovitch',
    review: 'Policing meets Magic',
    tags: ['fiction', 'fantasy'],
  },
];

export default Books;
