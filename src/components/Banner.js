import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';

const Header = styled.header`
  background-color: #000;
  padding: 1rem;
  display: flex;
  justify-content: start;
  align-items: start;
`;

const Logo = styled.img`
  max-width: 80px;
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 900;
  line-height: 0.8;
  text-transform: uppercase;
  margin: 15px;
`;

class Banner extends React.Component {
  render() {
    return (
      <Header>
        <Logo src={logo} alt="" />
        <Heading>
          Top Three<br />Moments
        </Heading>
      </Header>
    );
  }
}

export default Banner;
