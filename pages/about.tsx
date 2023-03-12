import {
  Box,
  Card,
  CardBody,
  Flex,
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
    <VStack my={10} spacing={5} width='100%'>
      <Card
        direction={{ base: 'column', md: 'row' }}
        maxW={{ sm: '100%', base: '300px' }}
        overflow='hidden'
        variant='filled'
      >
        <Flex
          bgColor='white'
          direction={{ base: 'row', md: 'column' }}
          justifyContent='space-around'
        >
          <Image
            src='memoji.jpg'
            alt='Memoji of myself, Louis'
            maxW='310px'
            maxH={{ sm: '100%', base: '310px' }}
            objectFit='cover'
            borderRadius='lg'
          />
        </Flex>
        <CardBody paddingBottom={0}>
          <Text fontSize='2xl' fontWeight='semibold'>
            Hey there,
          </Text>
          <Text fontSize='2xl' fontWeight='light' mb={3}>
            My name is Louis!
          </Text>
          <Text mb={3}>
            I am a computer science student and web enthusiast from Berlin,
            Germany. Besides my studies, I am working as a software engineer -
            mostly writing JavaScript and TypeScript. When I am not behind the
            keyboard, you will probably find me on a bicycle.
          </Text>
          <Text>
            On this website, I am sharing my thoughts, work and ideas. I even
            included some of my favourite books in here!
          </Text>
          <HStack my={3}>
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
