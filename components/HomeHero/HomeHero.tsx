import { Button, ButtonGroup, Heading, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

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
        <Button width="200px" colorScheme="teal">
          Get Started
        </Button>
        <Button width="200px">GitHub</Button>
      </ButtonGroup>
    </Container>
  );
}

const Container = styled.div`
  padding: 100px 0 50px 0;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  height: 500px;
  width: 500px;
  text-align: center;
  border-bottom: 1px solid var(--chakra-colors-gray-200);
`;

const GreenSpan = styled.span`
  color: #2b8c8a;
`;
