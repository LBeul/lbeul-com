import {
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
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
      <HStack>
        <Image
          src='louis.jpg'
          boxSize='200px'
          objectFit='cover'
          borderRadius='lg'
          marginRight='20px'
        />
        <Box border='2px solid red'>
          <Text fontSize='xl' fontWeight='semibold'>
            Hey there,
          </Text>
          <Text fontSize='xl' fontWeight='light'>
            My name is Louis!
          </Text>
          <Text>
            I'm a computer science student and web enthusiast from Berlin,
            Germany. Besides my studies, I am working as a software engineer --
            mostly writing JavaScript and TypeScript. On this website, I'm
            sharing my thoughts, work and ideas. Wanna share some of yours too?
            Feel free to contact me!
          </Text>
          <HStack mt={3}>
            <Link href='https://www.linkedin.com/in/louis-beul/'>
              <Icon as={FaLinkedin} h={30} w={30} />
            </Link>
            <Link href='https://github.com/LBeul'>
              <Icon as={FaGithubSquare} h={30} w={30} />
            </Link>
            <Link href='https://twitter.com/lbeul_'>
              <Icon as={FaTwitterSquare} h={30} w={30} />
            </Link>
          </HStack>
        </Box>
      </HStack>
    </VStack>
  );
};

export default About;
