import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <LogoWrap>
        <Image
          src="/images/rk-icon.png" // Route of the image file
          height={40} // Desired size with correct aspect ratio
          width={40} // Desired size with correct aspect ratio
          alt="RK-BOOT"
        />
        <p>RK-Boot</p>
      </LogoWrap>
      <IntroWrap>Experience modulized golang microservice rk-boot!</IntroWrap>
      <div>Github</div>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 2rem;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
  height: 60px;
  gap: 2rem;
`;

const LogoWrap = styled.div`
  width: 120px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: center;
  font-weight: bold;
`;

const IntroWrap = styled.div`
  color: #2b8c8a;
  font-weight: 600;
  line-height: 60px;
`;
