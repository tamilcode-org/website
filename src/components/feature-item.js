import React from 'react';
import { Link } from 'gatsby';
import {
  Flex,
  Box,
  List,
  ListItem,
  ListIcon,
  Heading,
  Text,
  Button,
} from '@chakra-ui/core';

export const FeatureItem = props => {
  const {
    section = {},
    title,
    description,
    type,
    lists = [],
    FeatureImage,
    index = -1,
    buttonLink,
  } = props;

  return (
    <Flex
      w="100%"
      py={{ base: 2, md: '50px' }}
      alignItems="center"
      flexDirection={{
        base: 'column',
        md: type === 'image' ? ['row', 'row-reverse'][index % 2] : 'row',
      }}
    >
      <Box
        w={{
          base: '100%',
          md: type === 'image' ? '50%' : '40%',
        }}
        py={{ base: 6, md: 2 }}
        mx={6}
      >
        {type === 'image' ? (
          <FeatureImage />
        ) : (
          <>
            <Heading
              as="h3"
              mb={4}
              color="gray.900"
              fontSize={{ base: 'xl', md: '2xl' }}
            >
              {section.title}
            </Heading>
            <Text
              as="p"
              color="gray.700"
              mb={6}
              maxWidth="420px"
              fontSize={{ base: 'md', md: 'lg' }}
            >
              {section.description}
            </Text>
          </>
        )}
      </Box>
      <Box
        w={{
          base: '100%',
          md: type === 'image' ? '50%' : '60%',
        }}
        mx={6}
      >
        <Heading
          as="h3"
          mb={4}
          color="gray.900"
          fontSize={{ base: '2xl', md: '3xl' }}
        >
          {title}
        </Heading>
        <Text
          as="p"
          color="gray.700"
          mb={6}
          maxWidth="520px"
          fontSize={{ base: 'lg', md: 'xl' }}
        >
          {description}
        </Text>
        <List>
          {lists.map(list => {
            return (
              <ListItem key={list.value} mb={2}>
                <ListIcon icon="check-circle" color="green.500" />
                {list.value}
              </ListItem>
            );
          })}
        </List>
        {buttonLink && (
          <Box mt={6}>
            <Link to={buttonLink}>
              <Button
                variantColor="teal"
                fontSize="0.8rem"
                lineHeight="1"
                textTransform="uppercase"
                size="sm"
              >
                Read more
              </Button>
            </Link>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export const FeatureNuggets = props => {
  const { title, description, Icon } = props;

  return (
    <Box flex="1 1 45%" py={3} mr={6}>
      <Flex
        textAlign="center"
        border="2px solid #48BB78"
        borderRadius="50%"
        justifyContent="center"
        alignItems="center"
        w="72px"
        h="72px"
        mb={6}
        bg="gray.50"
      >
        <Box as={Icon} size="36px" color="green.400" />
      </Flex>
      <Heading as="h3" mb={3} fontSize="xl" color="gray.900">
        {title}
      </Heading>
      <Text as="p" color="gray.700" mb={6} maxWidth="420px">
        {description}
      </Text>
    </Box>
  );
};

export default FeatureItem;
