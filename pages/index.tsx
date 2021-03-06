import Footer from 'components/Footer';
import Header from 'components/Header';
import HomeHero from 'components/HomeHero';
import { HomeInvitation } from 'components/HomeInvitation';
import HomeMain from 'components/HomeMain';
import HomePlugins from 'components/HomePlugins';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>RK-Boot</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <HomeHero />
      <HomeMain />
      <HomePlugins />
      <HomeInvitation />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  max-width: 100vw;
  width: 100%;
  min-width: 860px;
`;
