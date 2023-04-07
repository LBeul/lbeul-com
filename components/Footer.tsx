import { Flex, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
const Footer = (): JSX.Element => {
  return (
    <Flex
      align='center'
      width='75%'
      mx='auto'
      justify='center'
      pb={5}
      color='gray.500'
    >
      <Link href='/'>Data Protection</Link>
      <Spacer />
      <Link href='/'>Imprint</Link>
    </Flex>
  );
};

export default Footer;
