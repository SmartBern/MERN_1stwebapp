import { Box, Button, Container, Flex, HStack, IconButton, Stack, Text, 
    useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { CiSquarePlus } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
    const { colorMode, toggleColorMode} = useColorMode();
    const bg = useColorModeValue("white", "gray.800");
    const { isOpen, onToggle } = useDisclosure();

  return (
    <Container maxW={"1140px"}  position='fixed' top={0}
    left={0} right={0} zIndex={1} bg={bg} 
    > 
        {/* -------- Desktop Nav -------- */}
        <Flex
            as='nav'
            align='center'
            justify='space-between'
            wrap='wrap'
            padding='0.7rem'
            display={{ base: 'none', md: 'flex'}}
             shadow={'md'}
        >
            <Text
            bgGradient={"linear(to-l, #7928CA, #FF0080)"}
            bgClip={"text"}
            fontSize={{ md: "22", lg: "23"}}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            >
            <Link to={"/"} style={{display: "flex", alignItems: "center", gap: "8px", color: ""}}> Phone Store <FaShoppingCart fontSize="26" color='#7928CA' /> </Link> 
        </Text>

        <Box display={{ base: 'block', md: 'none'}}>
            <IconButton 
            onClick={onToggle} 
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} /> } 
            variant={'ghost'}
            aria-label='Toggle Navigation' 
            />

        </Box>

        <HStack display={{ base: 'none', md: 'flex'}} >
            <Button variant='ghost'>New Phones</Button>
            <Button variant='ghost'>Used Phones</Button>

            <Link to={"/create"}>
                <Button>
                    Add Phone<CiSquarePlus fontSize={22} />
                </Button>
            </Link>

            <Button onClick={toggleColorMode}> {colorMode === "light" ? <IoMoon /> :
                <LuSun size={22} /> }
            </Button>
        </HStack>

        </Flex>


        {/* -------- Mobile Nav -------- */}
        <Box display={{ md: 'none'}}>
            <Flex as='nav'
            justify='space-between'
            alignItems={'center'} 
             shadow={'md'}
            >
                <Text
                bgGradient={"linear(to-l, #7928CA, #FF0080)"}
                bgClip={"text"}
                fontSize={'16px'}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                >
                    <Link to={"/"} style={{display: "flex", alignItems: "center", gap: "8px", color: ""}}> Phone Store <FaShoppingCart fontSize="18" color='#7928CA' /> </Link> 
                </Text>

                <HStack as='nav' spacing={4} p={2}>
                    <Link to={"/create"}>
                        <Button>
                            <CiSquarePlus fontSize={22} />
                        </Button>
                    </Link>

                    <Button onClick={toggleColorMode}> {colorMode === "light" ? <IoMoon /> :
                        <LuSun size={18} /> }
                    </Button>
                </HStack>

                <Box display={{ base: 'block', md: 'none'}}>
                    <IconButton 
                    onClick={onToggle} 
                    icon={isOpen ? <CloseIcon w={4} h={5} /> : <HamburgerIcon w={6} h={6} /> } 
                    variant={'ghost'}
                    aria-label='Toggle Navigation' 
                    />
                </Box>
            </Flex>
            

            {isOpen && (
            <Box
            p={0} 
            display={{ md: 'none' }} 
            bg={'purple.600'} 
            spacing={2}
            h="60vh" 
            transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <Stack as='nav' spacing={4} p={4}>
                    <Button variant='ghost'>
                        <Text color={'white'}>
                            New Phones
                        </Text>
                    </Button>
                    <Button variant='ghost'>
                        <Text color={'white'}>
                            Used Phones
                        </Text>
                    </Button>
                    <Button variant='ghost'>
                        <Text color={'white'}>
                            Contact Us
                        </Text>
                    </Button>
                </Stack>

            </Box>
        
        )}
        </Box>

    </Container>

  );
};

export default Navbar;