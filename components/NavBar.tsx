import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function NavBar(): JSX.Element {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex minH={'60px'} align={'center'} width='75%' mx='auto' my={5}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Heading
            size='md'
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          >
            <Link href='/'>lbeul</Link>
          </Heading>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'}>
          <IconButton
            onClick={toggleColorMode}
            borderRadius='full'
            aria-label='toggle-theme'
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </IconButton>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = (): JSX.Element => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link href={navItem.href}>{navItem.label}</Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = (): JSX.Element => {
  return (
    <Flex align={'center'} width='75%' mx='auto'>
      <Stack
        w='100%'
        display={{ md: 'none' }}
        borderBottom='1px solid lightgrey'
      >
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    </Flex>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href}
        justify={'space-between'}
        align={'center'}
      >
        <Text fontWeight={600}>{label}</Text>
      </Flex>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  href: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Books',
    href: '/books',
  },
];
