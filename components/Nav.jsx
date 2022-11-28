import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex width='75%' mx='auto' my={5}>
      <Box>
        <Link href='/' passHref>
          <Heading>lbeul</Heading>
        </Link>
      </Box>
      <Spacer />
      <HStack>
        <Link href='/about' passHref>
          <Heading as='h4' size='sm'>
            about
          </Heading>
        </Link>
        <Link href='/' passHref>
          <Heading as='h4' size='sm'>
            blog
          </Heading>
        </Link>
        <Link href='/projects' passHref>
          <Heading as='h4' size='sm'>
            projects
          </Heading>
        </Link>
        <Link href='/books' passHref>
          <Heading as='h4' size='sm'>
            books
          </Heading>
        </Link>
        <IconButton onClick={toggleColorMode} borderRadius='full'>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </HStack>
    </Flex>
  );
};

export default Nav;
