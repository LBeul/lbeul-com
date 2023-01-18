import { SimpleGrid, Skeleton } from '@chakra-ui/react';
import { BookCardsGridProps } from '../interfaces';
import BookCard from './BookCard';

const BookCardsGrid = ({ bookList }: BookCardsGridProps) => {
  return (
    <SimpleGrid minChildWidth='275px' spacing='10px' w='100%'>
      {bookList?.map((book) => (
        <BookCard book={book} key={book.isbn} />
      ))}
    </SimpleGrid>
  );
};

export default BookCardsGrid;
