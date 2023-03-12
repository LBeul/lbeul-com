import { NextPage } from 'next';
import BookCardsGrid from '../components/BookCardsGrid';
import books from './data/books';

const Books: NextPage = () => {
  return <BookCardsGrid bookList={books} />;
};

// FIXME: Transform into Projects Page using /data/projects.ts

export default Books;
