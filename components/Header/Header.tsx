import Image from 'next/image';
import React from 'react';
import {
  AiOutlineFileText,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineSlack,
} from 'react-icons/ai';
import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <LogoWrap>
        <Image src="/images/rk-icon.png" height={40} width={40} alt="RK-BOOT" />
        <p>RK-Boot</p>
      </LogoWrap>
      <IntroWrap>
        Experience modulized golang microservice with rk-boot!
      </IntroWrap>
      <IconsContainer>
        <IconWrap
          href="https://github.com/rookie-ninja/rk-boot"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub size="26px" />
        </IconWrap>
        <IconWrap
          href="https://docs.rkdev.info/docs"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineFileText size="26px" />
        </IconWrap>
        <IconWrap href="mailto:lark@pointgoal.io">
          <AiOutlineMail size="26px" />
        </IconWrap>
        <IconWrap
          href="https://join.slack.com/t/rk-syz1767/shared_invite/zt-186tn9o8k-Bn4apE6nhoFnC61h180I8w"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineSlack size="26px" />
        </IconWrap>
      </IconsContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 2rem;
  max-width: 100vw;
  width: 100vw;
  min-width: 860px;
  display: grid;
  grid-template-columns: 150px auto 150px;
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

const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  height: 60px;
  align-items: center;
`;

const IconWrap = styled.a`
  :hover {
    transform: scale(1.2);
  }
`;
