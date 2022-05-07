import React from 'react'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'

import NextLink from 'next/link'

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import Logo from './Logo'
import { NavItem, NAV_ITEMS } from '../NavItems'

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box style={{ textTransform: 'capitalize' }}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          alignItems={'center'}
          justify={{ base: 'center', md: 'start' }}
        >
          <Box>
            <Logo
              heading={'React Physics'}
              subHeading={'3D Components for the web'}
              logoWidth={130}
            />
          </Box>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {/* login sign in  */}

        {/* <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
                    </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
                    </Button>
        </Stack> */}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          {navItem.children && (
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <>
                <PopoverTrigger>
                  <Link>{navItem.label}</Link>
                </PopoverTrigger>
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={useColorModeValue('white', 'gray.800')}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              </>
            </Popover>
          )}
          {!navItem.children && (
            <NextLink key={navItem.label} href={navItem.href ?? '/ '}>
              {navItem.label}
            </NextLink>
          )}
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <NextLink href={href ?? '/puts'}>
      <Stack
        cursor={'pointer'}
        direction={'row'}
        align={'center'}
        _hover={{ background: '#D3D3D3' }}
      >
        <Box style={{ cursor: 'pointer', padding: '5px' }}>
          <Text
            style={{ marginBottom: 0 }}
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text style={{ marginBottom: 0 }} fontSize={'sm'}>
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </NextLink>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          style={{ marginBottom: 0 }}
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
          color={useColorModeValue('gray.600', 'gray.600')}
        >
          {children &&
            children.map((child) => (
              <NextLink key={child.label} href={child.href ?? '/'}>
                {child.label}
              </NextLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}
