import React from 'react';
import styled from '@emotion/styled';
import { Box, Heading, Text } from '@chakra-ui/core';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Hero, { HeroWithImage } from '../components/hero';
import FeatureItem from '../components/feature-item';
import {
  MentorNonYellowImage,
  PortfolioImage,
  MentorImage,
  SayHiImage,
} from '../components/images';

const Container = styled(Box)`
  max-width: 960px;
  margin: 0 auto;
`;

const WhatWeDo = [
  {
    FeatureImage: MentorNonYellowImage,
    type: 'image',
    title: 'Programming Workshops and Webinars',
    description:
      'Free remote workshops on web and mobile development to help tamil programmers community. Help tamil coders to learn building real world projects',
  },
  {
    FeatureImage: PortfolioImage,
    type: 'image',
    title: 'A platform for you to grow',
    description:
      'A platform to get out of your comfort zone and help others while learning yourself. Create quality content by tamil programmers for tamil programmers',
  },
];

const Page = props => {
  return (
    <Layout location={props.location}>
      <SEO
        title="Home"
        keywords={[
          'Tamil programmers community',
          'Tamil coders',
          'Coding in Tamil',
        ]}
      />
      <Box bg="green.50">
        <Container py="50px">
          <HeroWithImage
            title="Join the community of tamil coders"
            description="We help tamil people to learn programming in their own language and understood the concepts better. We help each other grow through community events"
            HeroImage={MentorImage}
            buttonLink="https://discord.gg/NPXQqeX"
            buttonText="Join the community"
            hasButton={true}
            isExternalLink={true}
          />
        </Container>
      </Box>
      <Box>
        <Container
          py={{ base: '50px', md: '100px' }}
          px={{ base: '20px', md: 0 }}
        >
          <Heading
            fontSize={{ base: '3xl', md: '4xl' }}
            textAlign="center"
            maxW="520px"
            mb={3}
            mx="auto"
          >
            What we do
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            as="p"
            color="gray.700"
            mb={6}
            maxWidth="620px"
            mx="auto"
            textAlign="center"
          >
            We help each other to grow as programmers through community
            activities in tamil language
          </Text>
          {WhatWeDo.map((item, index) => {
            return <FeatureItem key={item.title} index={index} {...item} />;
          })}
        </Container>
      </Box>
      <Box bg="gray.50">
        <Container pt="100px" px="20px">
          <Hero
            title="Don't be shy, say hi!"
            description="If you have ideas to help the community, pls share with us. We will get back to you as soon as possible within a weeks time"
            hasButton={true}
            buttonText="Get in touch"
            buttonLink="mailto:paramanantham@live.com"
            HeroImage={SayHiImage}
          />
        </Container>
      </Box>
    </Layout>
  );
};

export default Page;
