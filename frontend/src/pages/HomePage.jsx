import { Box, Button, Container, Heading, SimpleGrid, Text, 
    useColorModeValue, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useProductStore } from "../store/product";
import { ProductCard} from "../componentss/ProductCard.jsx";


const Homepage = () => {
    const { fetchProducts, products } = useProductStore();
    const bg = useColorModeValue("white", "gray.800");
    const textColor = useColorModeValue("gray.600", "gray.200");

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    console.log("products", products);


  return (
    <Container maxW="container.xl" py={12}>

        <Box 
            as="section" py={{ base: 12, md: 24}} bg={bg} mb={12} rounded={'lg'}
            shadow={'lg'}
            >
                <Container maxW={"container.xl"} >
                    <VStack
                    spacing={6} textAlign={"center"} align={"center"} 
                    >
                        <Heading as={'h1'} size={{ base: '2xl', md: '3xl'}}
                            color={textColor}
                        >
                            Welcome, esteemed visitor😊
        
                        </Heading>
        
                        <Text
                        fontSize={{ base: 'lg', md: 'xl'}} color={textColor} maxW={'2xl'}>
        
                            Get the phone you need at affordable prices. 
                            A trial will convince you.
        
                        </Text>
        
                        <Button colorScheme="purple" size={'lg'} px={8} 
                        href="#"  >
        
                            Explore phones
                            
                        </Button>
        
                    </VStack>
        
                </Container>
        
            </Box>

        <VStack spacing={8}>
            <Text
            fontSize="30"
            fontWeight="bold"
            bgGradient={"linear(to-l, #7928CA,#7928CA)"}
            bgClip={"text"}
            textAlign="center"
            >
                Current Products {'\u{1F680}'}
            </Text>

            <SimpleGrid 
            columns={{
                base: 1,
                md: 2,
                lg: 3
            }}
                spacing={10}
                w={"full"}
            >
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </SimpleGrid>

            {products.length === 0 && (
                <Text fontSize="xl" textAlign={"center"} fontWeight="bold" color="gray.500">
                No products found!{'\u{1F61E}'}

                <Link to={"/create"}>
                    <Text  color="blue.500" _hover={{ textDecoration: "underline"}}>
                        Create a product
                    </Text>
                </Link>

            </Text>
            )}            

        </VStack>

    </Container>
  );
};

export default Homepage;