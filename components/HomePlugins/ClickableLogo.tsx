import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

type Props = {
  href: string;
  src: string;
  alt: string;
};

export default function ClickableLogo({ href, src, alt }: Props) {
  return (
    <Container href={href} target="_blank" rel="noreferrer">
      <Image
        src={src} // Route of the image file
        alt={alt}
        quality={100}
        width={200}
        height={100}
      />
    </Container>
  );
}

const Container = styled.a`
  :hover {
    transform: scale(1.04);
  }
`;
