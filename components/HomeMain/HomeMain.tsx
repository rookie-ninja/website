import { Button, Heading, Radio, RadioGroup, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import styled from 'styled-components';

const demoUrlMap = new Map<string, string>([
  [
    'gin',
    'https://raw.githubusercontent.com/rookie-ninja/rk-demo/master/packed/gin/rk-demo.zip',
  ],
  [
    'grpc',
    'https://raw.githubusercontent.com/rookie-ninja/rk-demo/master/packed/grpc/rk-demo.zip',
  ],
  [
    'echo',
    'https://raw.githubusercontent.com/rookie-ninja/rk-demo/master/packed/echo/rk-demo.zip',
  ],
  [
    'gf',
    'https://raw.githubusercontent.com/rookie-ninja/rk-demo/master/packed/gf/rk-demo.zip',
  ],
  [
    'fiber',
    'https://raw.githubusercontent.com/rookie-ninja/rk-demo/master/packed/fiber/rk-demo.zip',
  ],
  [
    'mux',
    'https://raw.githubusercontent.com/rookie-ninja/rk-demo/master/packed/mux/rk-demo.zip',
  ],
  [
    'zero',
    'https://raw.githubusercontent.com/rookie-ninja/rk-demo/master/packed/zero/rk-demo.zip',
  ],
]);

export default function HomeMain() {
  const [framework, setFramework] = useState('gin');
  const yamlTemplate = `# boot.yaml
${framework}:
  - name: rk-demo
    port: 8080
    enabled: true
    commonService:
      enabled: true
    sw:
      enabled: true
    docs:
      enabled: true
    prom:
      enabled: true
    middleware:
      logging:
        enabled: true
      prom:
        enabled: true`;

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
            Please visit documentation for various plugins
          </Text>
          <RadioGroupContainer defaultValue="gin" onChange={handleOnChange}>
            <Radio value="gin">gin-gonic/gin</Radio>
            <Radio value="grpc">gRPC</Radio>
            <Radio value="echo">labstack/echo</Radio>
            <Radio value="gf">gogf/gf</Radio>
            <Radio value="fiber">gofiber/fiber</Radio>
            <Radio value="mux">gorilla/mux</Radio>
            <Radio value="zero">zeromicro/go-zero</Radio>
          </RadioGroupContainer>
          <a download href={demoUrlMap.get(framework)}>
            <Button colorScheme="blue" width="120px" size="sm">
              Create
            </Button>
          </a>
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
