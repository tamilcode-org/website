import React from 'react';
import styled from '@emotion/styled';
import { Box, Heading, Text } from '@chakra-ui/core';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Hero, { HeroWithImage } from '../components/hero';
import FeatureItem from '../components/feature-item';
import {
  WinImage,
  PortfolioImage,
  ProgrammingImage,
  MentorImage,
  SayHiImage,
} from '../components/images';

const Container = styled(Box)`
  max-width: 960px;
  margin: 0 auto;
`;

const WhatWeDo = [
  {
    FeatureImage: ProgrammingImage,
    type: 'image',
    title: 'Tamil programming courses',
    description:
      'We create high quality real world programming courses on cutting-edge web and mobile technologies',
  },
  {
    FeatureImage: PortfolioImage,
    type: 'image',
    title: 'A platform for you to grow',
    description:
      'A platform to get out of your comfort zone and help others while learning yourself. Create quality content by tamil programmers for tamil programmers',
  },
  {
    FeatureImage: WinImage,
    type: 'image',
    title: 'Programming Workshops and Webinars',
    description:
      'Remote workshops on web and mobile development to help tamil programmers community. Help tamil coders to learn building real world projects',
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
      <Box bg="gray.50">
        <Container py="50px">
          <HeroWithImage
            title="Become a better web & mobile developer"
            description="Level up your skills by learning through highly focussed, cutting-edge video courses in tamil language."
            HeroImage={MentorImage}
            hasButton={true}
            buttonText="Go Pro"
            buttonLink="/"
            hasSecondaryButton={true}
            secondaryButtonText="Courses"
            secondaryButtonLink="/"
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
            We help tamil programmers to master the coding skills to become an
            engineer companies love to hire
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
            description="If you have ideas to help the community or new courses, please share with us. We will get back to you in 5 business days."
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
