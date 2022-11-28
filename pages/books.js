import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import TagSet from '../components/TagSet';
import bookList from '../bookList';

const Books = () => {
  return (
    <VStack my={10} spacing={5}>
      {bookList.map((book) => (
        <HStack width='75%' key={book.isbn}>
          <Image
            src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
            alt='thumbnail'
            height='225px'
            width='150px'
            objectFit='cover'
            borderLeftRadius='lg'
          />
          <Box p={5}>
            <Text
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
            >
              {book.author}
            </Text>
            <Text fontSize='xl' fontWeight='semibold'>
              {book.title}
            </Text>
            <Text>{book.review}</Text>
            <TagSet tags={book.tags} />
          </Box>
        </HStack>
      ))}
    </VStack>
  );
};

export default Books;
