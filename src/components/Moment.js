import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #000;
  padding: 4rem 1rem 8rem;
  display: block;
`;

const Position = styled.h2`
  color: #fff;
  font-weight: 900;
  font-size: 3rem;
  text-transform: uppercase;
  margin: 0;
`;

const Artist = styled.h2`
  color: #fff;
  font-weight: 900;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 0;
`;

const Location = styled.h3`
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  margin-top: 0;
`;

const Description = styled.p`
  color: #fff;
`;

const Video = {
  background: 'red',
};

class Moment extends React.Component {
  render() {
    const {
      id,
      start,
      artists,
      location,
      description,
      position,
    } = this.props.moment;
    const url = `https://www.youtube.com/embed/${id}?start=${start}`;
    return (
      <Section>
        <Position>#{position}</Position>
        <Artist>{artists}</Artist>
        <Location>@ {location}</Location>
        <ResponsiveEmbed src={url} style={Video} />
        <Description>{description}</Description>
      </Section>
    );
  }
}

export default Moment;
