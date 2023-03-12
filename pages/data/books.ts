import { Book } from '../../interfaces';

const books: Book[] = [
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

export default books;
