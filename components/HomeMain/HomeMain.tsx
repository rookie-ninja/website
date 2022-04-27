import { Button, Heading, Radio, RadioGroup, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import styled from "styled-components";

let framework = "gin";

export default function HomeMain() {
  const [framework, setFramework] = useState("gin");
  const yamlTemplate = `# boot.yaml
${framework}:
  - name: rk-demo
    port: 8080
    enabled: true
    prom:
      enabled: true
    middleware:
      logging:
        enabled: true
      prom:
        enabled: true
`;

  const handleOnChange = (value: string) => {
    setFramework(value);
  };

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
          <RadioGroupContainer defaultValue="gin" onChange={handleOnChange}>
            <Radio value="gin">gin-gonic/gin</Radio>
            <Radio value="grpc">gRpc</Radio>
            <Radio value="echo">labstack/echo</Radio>
            <Radio value="gf">gogf/gf</Radio>
            <Radio value="fiber">gofiber/fiber</Radio>
            <Radio value="mux">gorilla/mux</Radio>
            <Radio value="zero">zeromicro/go-zero</Radio>
          </RadioGroupContainer>
          <Button colorScheme="blue" width="120px" size="sm">
            Create
          </Button>
        </LeftContent>
        <RightContent>
          <SyntaxHighlighter language="yaml" showLineNumbers style={atomDark}>
            {yamlTemplate}
          </SyntaxHighlighter>
        </RightContent>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  padding: 40px 0;
`;

const TitleContainer = styled.div`
  display: grid;
  gap: 2rem;
  width: 500px;
  text-align: center;
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
  font-size: 14px;
`;

const RadioGroupContainer = styled(RadioGroup)`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
