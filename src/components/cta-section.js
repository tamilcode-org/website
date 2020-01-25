import React from 'react';
import { Flex, Box, Button, Heading, Text } from '@chakra-ui/core';

export const CTASection = props => {
  const { title, description } = props;

  return (
    <Flex
      p={6}
      borderRadius="5px"
      flexDirection="row"
      alignItems="center"
      bg="teal.50"
      my={6}
    >
      <Box ml={3} mr="auto">
        <Heading as="h4" fontSize="lg" color="gray.900" mb={2}>
          {title}
        </Heading>
        <Text as="p" color="gray.600">
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default CTASection;
