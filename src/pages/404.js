import React from 'react';
import { Link } from 'gatsby';
import { Flex, Box, Heading, Text, Link as ChakraLink } from '@chakra-ui/core';

import SEO from '../components/seo';
import Layout from '../components/layout';

const Index = props => {
  return (
    <Layout location={props.location}>
      <SEO title="404" keywords={['gatsby', 'application', 'react']} />
      <Flex
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        h="60vh"
      >
        <Box>
          <Heading as="h3" mb={3} fontSize="2xl">
            404, Page Not found
          </Heading>
          <Text as="p">
            You can go to{' '}
            <ChakraLink as={Link} color="purple.500" to="/">
              home page
            </ChakraLink>
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Index;
