import React from 'react';
import { Container } from './Container'
import { Header } from './Header'


export const PageCenterContent = (props) => {
  const style = props.threadOpen ? styles.backgroundOpen : styles.backgroundClosed;
  console.log(style);
  return (
    <div style={style}>
      <Header />
      <Container>
          Channels
        </Container>
        <Container>
          #  adventure
        </Container>
        <Container>
          #  amendment
        </Container>
        <Container>
          #  announcements
        </Container>
        <Container>
          #  app-committee
        </Container>
        <Container>
          #  classes
        </Container>
        <Container>
          #  coffee-dates
        </Container>
        <Container>
          #  costco
        </Container>
        <Container>
          #  dev
        </Container>
        <Container>
          #  dog-spotting
        </Container>
        <Container>
          #  gaming
        </Container>
        <Container>
          #  green
        </Container>
        <Container>
          #  immigrant_parents
        </Container>
        <Container>
          #  inclusivity
        </Container>
        <Container>
          #  jpmorgan-hackathon
        </Container>
        <Container>
          #  marketing
        </Container>
        <Container>
          #  membership
        </Container>
        <Container>
          #  mental_healthh
        </Container>
        <Container>
          #  movies
        </Container>
        <Container>
          #  music
        </Container>
        <Container>
          #  opportunities
        </Container>
        <Container>
          #  overheard
        </Container>
        <Container>
          #  politics
        </Container>
        <Container>
          #  queer
        </Container>
        <Container>
          #  random
        </Container>
        <Container>
          #  recruiting
        </Container>
        <Container>
          #  robotics
        </Container>
        <Container>
          #  rush_w19
        </Container>
        <Container>
          #  shoutouts
        </Container>
        <Container>
          #  signature_event
        </Container>
        <Container>
          #  summer
        </Container>
        <Container>
          #  trader_joes
        </Container>
        <Container>
          #  website_committee
        </Container>
        <Container>
          Channels
        </Container>
        <Container>
          #  adventure
        </Container>
        <Container>
          #  amendment
        </Container>
        <Container>
          #  announcements
        </Container>
        <Container>
          #  app-committee
        </Container>
        <Container>
          #  classes
        </Container>
        <Container>
          #  coffee-dates
        </Container>
        <Container>
          #  costco
        </Container>
        <Container>
          #  dev
        </Container>
        <Container>
          #  dog-spotting
        </Container>
        <Container>
          #  gaming
        </Container>
        <Container>
          #  green
        </Container>
        <Container>
          #  immigrant_parents
        </Container>
        <Container>
          #  inclusivity
        </Container>
        <Container>
          #  jpmorgan-hackathon
        </Container>
        <Container>
          #  marketing
        </Container>
        <Container>
          #  membership
        </Container>
        <Container>
          #  mental_healthh
        </Container>
        <Container>
          #  movies
        </Container>
        <Container>
          #  music
        </Container>
        <Container>
          #  opportunities
        </Container>
        <Container>
          #  overheard
        </Container>
        <Container>
          #  politics
        </Container>
        <Container>
          #  queer
        </Container>
        <Container>
          #  random
        </Container>
        <Container>
          #  recruiting
        </Container>
        <Container>
          #  robotics
        </Container>
        <Container>
          #  rush_w19
        </Container>
        <Container>
          #  shoutouts
        </Container>
        <Container>
          #  signature_event
        </Container>
        <Container>
          #  summer
        </Container>
        <Container>
          #  trader_joes
        </Container>
        <Container>
          #  website_committee
        </Container>
    </div>
  );
};

const styles = {
  backgroundClosed: {
    background: '#FFFFFF',
    height: 'auto',
    width: '100%-435px',
    minWidth: 235,
    position: 'absolute',
    left: 220,
    right: 0,
    top: 0,
    display: 'block',
    overflow: 'scroll',
    zIndex: 9,
  },
  backgroundOpen: {
    background: '#FFFFFF',
    height: 'auto',
    width: '100%-400px',
    minWidth: 235,
    position: 'absolute',
    left: 220,
    right: 366,
    top: 0,
    display: 'block',
    overflow: 'scroll',
    zIndex: 9,
  },
};
