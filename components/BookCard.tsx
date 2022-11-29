import {
  Box,
  Card,
  CardBody,
  GridItem,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import { Book } from '../interfaces';
import TagSet from './TagSet';

const BookCard = ({ book }: { book: Book }): JSX.Element => {
  const { isbn, author, title, review, tags } = book;
  return (
    <GridItem>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          src={`https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`}
          alt='thumbnail'
          objectFit='cover'
          maxW={{ base: '100%', sm: '100px' }}
          maxH={{ base: '150px' }}
        />
        <CardBody>
          <Text
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
          >
            {author}
          </Text>
          <Text fontSize='xl' fontWeight='semibold'>
            {title}
          </Text>
          <Text>{review}</Text>
          <HStack mt={2}>
            <TagSet tags={tags} />
          </HStack>
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default BookCard;
