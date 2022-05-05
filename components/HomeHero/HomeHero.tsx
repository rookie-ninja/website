import { Button, ButtonGroup, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

export default function HomeHero() {
  return (
    <Container>
      <Heading>
        Create golang microservice <GreenSpan>from YAML</GreenSpan>
      </Heading>
      <Text>
        rk-boot is a simple, modular bootstrapper library that gives you the
        ability to start golang microservice with popular opensource client from
        YAML.
      </Text>
      <ButtonGroup spacing="5">
        <a href="https://rkdev.info/">
          <Button width="200px" colorScheme="teal">
            Get Started
          </Button>
        </a>
        <a href="https://github.com/rookie-ninja/rk-boot">
          <Button width="200px" leftIcon={<FaGithub />}>
            GitHub
          </Button>
        </a>
      </ButtonGroup>
    </Container>
  );
}

const Container = styled.div`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  justify-items: center;
  width: 500px;
  text-align: center;
  border-bottom: 1px solid var(--chakra-colors-gray-200);
`;

const GreenSpan = styled.span`
  color: #2b8c8a;
`;
