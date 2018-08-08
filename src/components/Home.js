import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import MomentsList from './MomentsList';

const Main = styled.section`
  background: #000;
`;

const Container = styled.section`
  max-width: 800px;
  margin: auto;
  display: block;
`;

class Home extends React.Component {
  render() {
    return (
      <Main>
        <Container>
          <Banner />
          <MomentsList />
        </Container>
      </Main>
    );
  }
}

export default Home;
