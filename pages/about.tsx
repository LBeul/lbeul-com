import {
  Card,
  CardBody,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Link from 'next/link';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const About: NextPage = () => {
  return (
    <VStack my={10} spacing={5}>
      <Card
        direction={{ base: 'column', md: 'row' }}
        maxW={{ md: '100%', base: '300px' }}
        overflow='hidden'
        variant='outline'
        border='none'
      >
        <Image
          src='memoji.jpg'
          alt='Memoji of myself, Louis'
          maxW={{ base: '100%', sm: '300px' }}
          maxH={{ base: '300px' }}
          objectFit='cover'
          borderRadius='lg'
        />
        <CardBody>
          <Text fontSize='xl' fontWeight='semibold'>
            Hey there,
          </Text>
          <Text fontSize='xl' fontWeight='light'>
            My name is Louis!
          </Text>
          <Text>
            I am a computer science student and web enthusiast from Berlin,
            Germany. Besides my studies, I am working as a software engineer --
            mostly writing JavaScript and TypeScript. On this website, I am
            sharing my thoughts, work and ideas. I even included my favourite
            books in here!
            <br /> <em>Feel free to reach out to me:</em>
          </Text>
          <HStack mt={3}>
            <a
              href='https://www.linkedin.com/in/louis-beul/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon as={FaLinkedin} h={30} w={30} />
            </a>
            <a
              href='https://github.com/LBeul'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon as={FaGithubSquare} h={30} w={30} />
            </a>
            <a
              href='https://twitter.com/lbeul_'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon as={FaTwitterSquare} h={30} w={30} />
            </a>
          </HStack>
        </CardBody>
      </Card>
    </VStack>
  );
};

export default About;
