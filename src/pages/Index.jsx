import { Box, Container, Flex, Heading, IconButton, Text, VStack } from "@chakra-ui/react";
import { FaArrowUp, FaHome, FaPlus, FaSignInAlt } from "react-icons/fa";

const products = [
  { id: 1, title: "Product One", description: "This is an amazing product that helps you solve problems.", votes: 256 },
  { id: 2, title: "Product Two", description: "An innovative solution for modern needs.", votes: 189 },
  { id: 3, title: "Product Three", description: "A groundbreaking tool for industry professionals.", votes: 342 },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Heading as="h1" size="lg">Product Hunt</Heading>
        <Flex>
          <IconButton icon={<FaHome />} isRound="true" mr={2} aria-label="Home" />
          <IconButton icon={<FaPlus />} isRound="true" mr={2} aria-label="Add New Product" />
          <IconButton icon={<FaSignInAlt />} isRound="true" aria-label="Login" />
        </Flex>
      </Flex>
      <VStack spacing={8}>
        {products.map(product => (
          <Flex key={product.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg" width="full" justifyContent="space-between" alignItems="center">
            <IconButton icon={<FaArrowUp />} aria-label="Upvote" size="lg" />
            <Box>
              <Heading as="h3" size="md">{product.title}</Heading>
              <Text mt={2}>{product.description}</Text>
            </Box>
            <Text fontSize="2xl">{product.votes}</Text>
          </Flex>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;