import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      <p>Opensource project maintained by rk-dev</p>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  min-width: 860px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: var(--chakra-colors-gray-100);
`;
