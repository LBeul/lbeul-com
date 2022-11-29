import { SimpleGrid, Skeleton } from '@chakra-ui/react';
import { BookCardsGridProps } from '../interfaces';
import BookCard from './BookCard';

const BookCardsGrid = ({ bookList, isLoaded }: BookCardsGridProps) => {
  return isLoaded ? (
    <SimpleGrid minChildWidth='275px' spacing='10px' w='100%'>
      {bookList?.map((book) => (
        <BookCard book={book} key={book.isbn} />
      ))}
    </SimpleGrid>
  ) : (
    <SkeletonGrid />
  );
};

const SkeletonGrid = (): JSX.Element => {
  return (
    <SimpleGrid minChildWidth='275px' spacing='10px' w='100%'>
      <Skeleton height='150px' />
      <Skeleton height='150px' />
      <Skeleton height='150px' />
      <Skeleton height='150px' />
      <Skeleton height='150px' />
      <Skeleton height='150px' />
    </SimpleGrid>
  );
};

export default BookCardsGrid;
