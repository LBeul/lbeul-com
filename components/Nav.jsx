import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";

const Nav = () => {
  return (
    <Flex borderWidth="1px" borderRadius="lg" margin={2}>
      <Box padding={5}>
        <Link href="/" passHref>
          <Heading>bert</Heading>
        </Link>
      </Box>
      <Spacer />
      <Center padding={5}>
        <Link href="/about" passHref>
          <Heading as="h4" size="sm">
            about
          </Heading>
        </Link>
      </Center>
    </Flex>
  );
};

export default Nav;
