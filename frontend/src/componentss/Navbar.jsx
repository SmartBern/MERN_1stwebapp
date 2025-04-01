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

        <Flex
            as='nav'
            align='center'
            justify='space-between'
            wrap='wrap'
            padding='0.7rem'
            
        >
            

        <Text
            bgGradient={"linear(to-l, #7928CA, #FF0080)"}
            bgClip={"text"}
            fontSize={{ base: "20", sm: "26"}}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            >
            <Link to={"/"} style={{display: "flex", alignItems: "center", gap: "8px", color: ""}}> Phone Store <FaShoppingCart fontSize="30" color='#7928CA' /> </Link> 
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
            <Button variant='ghost'>About</Button>
            <Button variant='ghost'>Portfolio</Button>
            <Button variant='ghost'>Contact</Button>

            <Link to={"/create"}>
                <Button>
                    <CiSquarePlus fontSize={20} />
                </Button>
            </Link>

            <Button onClick={toggleColorMode}> {colorMode === "light" ? <IoMoon /> :
                <LuSun size={20} /> }
            </Button>
        </HStack>

        </Flex>


        {isOpen && (
            <Box
            pb={4} display={{ md: 'none' }} bg={bg} spacing={2} 
            >
                <HStack as='nav' spacing={4} p={4}>
                <Link to={"/create"}>
                    <Button>
                        <CiSquarePlus fontSize={20} />
                    </Button>
                </Link>

                <Button onClick={toggleColorMode}> {colorMode === "light" ? <IoMoon /> :
                    <LuSun size={20} /> }
                </Button>
                </HStack>
                

                <Stack as='nav' spacing={4} p={4}>
                    <Button variant='ghost'>About</Button>
                    <Button variant='ghost'>Portfolio</Button>
                    <Button variant='ghost'>Contact</Button>
                </Stack>

            </Box>
        
        )}

    </Container>

  );
};

export default Navbar;