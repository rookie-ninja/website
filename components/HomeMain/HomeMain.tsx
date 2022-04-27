import { Button, Heading, Radio, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

export default function HomeMain() {
  return (
    <Container>
      <TitleContainer>
        <Heading>Less code, more speed</Heading>
        <Text>
          Spend less time writing code of initializing component and more time
          building great experience for your customers.
        </Text>
      </TitleContainer>
      <ContentContainer>
        <LeftContent>
          <Heading size="sm" mb="5px">
            Choose a web framework to start with
          </Heading>
          <Text fontSize="12px" color="gray.500">
            Please visite documentation for various plugins
          </Text>
          <RadioButtonContainer>
            <Radio value="1">gin-gonic/gin</Radio>
            <Radio value="2">gRpc</Radio>
            <Radio value="3">labstack/echo</Radio>
            <Radio value="4">gogf/gf</Radio>
            <Radio value="5">gofiber/fiber</Radio>
            <Radio value="6">gorilla/mux</Radio>
            <Radio value="7">zeromicro/go-zero</Radio>
          </RadioButtonContainer>
          <Button colorScheme="blue" width="100px">
            Create
          </Button>
        </LeftContent>
        <RightContent></RightContent>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  padding: 40px 0;
  text-align: center;
`;

const TitleContainer = styled.div`
  display: grid;
  gap: 2rem;
  width: 500px;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const LeftContent = styled.section`
  text-align: left;
`;

const RightContent = styled.section`
  border: 1px solid black;
`;

const RadioButtonContainer = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
