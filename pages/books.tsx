import { SimpleGrid } from '@chakra-ui/react';
import bookList from '../bookList';
import { NextPage } from 'next';
import BookCard from '../components/BookCard';

const Books: NextPage = () => {
  return (
    <SimpleGrid minChildWidth='275px' spacing='10px' w='100%'>
      {bookList.map((book) => (
        <BookCard book={book} key={book.isbn} />
      ))}
    </SimpleGrid>
  );
};

export default Books;
