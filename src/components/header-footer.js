import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import {
  Flex,
  Box,
  Button,
  Heading,
  Link as ChakraLink,
} from '@chakra-ui/core';
import { SocialIcon } from 'react-social-icons';

const StyledHeader = styled('header')`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`;

const StyledFooter = styled('footer')`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`;

const NavList = styled(Flex)`
  list-style: none;
  margin: 0;
  align-items: center;
  height: 80px;
`;

const NavItem = styled(Box)`
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0;
  &:hover {
    color: #2d3748;
  }
`;

const StyledChakraLink = styled(ChakraLink)`
  &:hover {
    text-decoration: none;
  }
`;

const LogoContainer = styled(Box)``;

const socialIconStyle = {
  width: `30px`,
  height: `30px`,
};

const links = [
  {
    href: 'https://discord.gg/NPXQqeX',
    value: 'Join the community',
    isExternal: true,
  },
];

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <NavList as="ul">
          <LogoContainer m={0} as="li" mr="auto">
            <Link to="/">
              <Heading as="h4" fontSize="1.6rem">
                <Box as="span" color="pink.500">
                  tamil
                </Box>
                <Box as="span" color="purple.600">
                  code.org
                </Box>
              </Heading>
            </Link>
          </LogoContainer>
          {links.map(link => {
            return (
              <NavItem
                display={{ base: 'none', md: 'block' }}
                as="li"
                key={link.value}
                color="gray.500"
                ml="32px"
              >
                {link.type === 'button' ? (
                  <>
                    {link.isExternal ? (
                      <StyledChakraLink href={link.href} isExternal>
                        <Button
                          variantColor="purple"
                          fontSize="0.8rem"
                          lineHeight="1"
                          textTransform="uppercase"
                          size="sm"
                        >
                          {link.value}
                        </Button>
                      </StyledChakraLink>
                    ) : (
                      <Link to={link.href}>
                        <Button
                          variantColor="purple"
                          fontSize="0.8rem"
                          lineHeight="1"
                          textTransform="uppercase"
                          size="sm"
                        >
                          {link.value}
                        </Button>
                      </Link>
                    )}
                  </>
                ) : (
                  <>
                    {link.isExternal ? (
                      <StyledChakraLink href={link.href} isExternal>
                        {link.value}
                      </StyledChakraLink>
                    ) : (
                      <Link to={link.href}>{link.value}</Link>
                    )}
                  </>
                )}
              </NavItem>
            );
          })}
          <NavItem as="li" ml="3">
            <SocialIcon
              title="Follow me on twitter"
              alt="Twitter follow intent"
              style={socialIconStyle}
              target="_blank"
              rel="noopener noreferrer"
              url="https://twitter.com/intent/follow?screen_name=learnwithparam"
            />
          </NavItem>
          <NavItem as="li" ml="3">
            <SocialIcon
              network="youtube"
              title="Subscribe to Youtube"
              alt="Youtube channel"
              style={socialIconStyle}
              target="_blank"
              rel="noopener noreferrer"
              url="https://www.youtube.com/channel/UC1HCEHLm656aFa0dAO4NSBQ"
            />
          </NavItem>
        </NavList>
      </nav>
    </StyledHeader>
  );
};

export const Footer = props => {
  return (
    <Box py={6}>
      <StyledFooter>
        <Flex alignItems="center">
          <Box>
            <Box as="p" lineHeight="1.2">
              Made with ❤️ for Tamil Coders
            </Box>
            <Box as="p" color="gray.400" fontSize="0.9rem">
              All rights reserved to <i>tamilcode.org</i>
            </Box>
          </Box>
          <Box ml="auto">
            <NavList as="ul" display={{ base: 'none', md: 'flex' }}>
              {links.map(link => {
                return (
                  <NavItem as="li" key={link.value} color="gray.500" ml="32px">
                    <Link to={link.href}>{link.value}</Link>
                  </NavItem>
                );
              })}
            </NavList>
          </Box>
        </Flex>
      </StyledFooter>
    </Box>
  );
};

export default Header;
