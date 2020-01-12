import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';

const Wave = styled(Box)`
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 54%;
    height: 70px;
    background-color: white;
    right: -5px;
    top: 40px;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 50%;
    height: 70px;
    background-color: ${props => props.bgColor};
    left: 0;
    top: 27px;
  }
`;

const WaveComponent = () => {
  return <Wave bg="purple.50" w="100%" h="70px" bgColor="#faf5ff" />;
};

export default WaveComponent;
