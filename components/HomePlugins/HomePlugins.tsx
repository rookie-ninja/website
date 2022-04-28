import { Heading } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

export default function HomePlugins() {
  return (
    <Container>
      <Heading>Supported plugins</Heading>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f6f9fc;
  padding: 2rem;
  display: grid;
  width: 100vw;
  text-align: center;
`;
