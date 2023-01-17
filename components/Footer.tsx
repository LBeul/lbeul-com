import { Flex, Spacer, Text } from '@chakra-ui/react';
import Link from 'next/link';
const Footer = (): JSX.Element => {
  return (
    <Flex align={'center'} width='75%' mx='auto' justify='center' pb={5}>
      <Link href='/'>Datenschutz</Link>
      <Spacer />
      <Link href='/'>Impressum</Link>
    </Flex>
  );
};

export default Footer;
