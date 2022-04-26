import Footer from "components/Footer";
import Header from "components/Header";
import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <div>Hello World.</div>
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;
