import { Button, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
export default function HomeInvitation() {
  return (
    <Container>
      <Image
        src="/images/micphone.svg" // Route of the image file
        alt="Micphone"
        quality={100}
        width={70}
        height={70}
      />
      <Heading size="lg">Invite us to speak at your next event</Heading>
      <Text width={500} textColor="12px">
        Want a rk-boot core team member to speak at your next event? Invite us
        to create a memorable and engaging experience for your attendees.
      </Text>
      <a href="mailto:lark@pointgoal.com">
        <Button colorScheme="teal">Invite us to speak</Button>
      </a>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-items: center;
  text-align: center;
`;
