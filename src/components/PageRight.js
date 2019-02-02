import React from 'react';
import { Container } from './Container'


export const PageRight = (props) => {
  return (
    <div style={styles.backgroundStyle}>
      <div style={styles.scrollbarStyle}>
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

        <Container/>

        <Container>
          Direct Messages
        </Container>
        <Container>
          o  Slackbot
        </Container>
        <Container>
          o  Christopher Knebel
        </Container>
        <Container>
          o  Jack Zeligson
        </Container>
        <Container>
          o  Fee
        </Container>
        <Container>
          o  Kristen Basgall
        </Container>
        <Container>
          o  Chaniel Dandross
        </Container>
        <Container>
          o  Nathan Brown
        </Container>

        <Container/>

        <Container>
          Apps
        </Container>
        <Container>
          o  Polly
        </Container>

        <Container/>
        <Container/>
        <Container/>
      </div>
    </div>
  );
};

const styles = {
  backgroundStyle: {
    background: 'orange',
    height: 'auto',
    width: 366,
    position: 'absolute',
    marginRight: 0,
    display: 'block',
    top: 0,
    right: 0,
    float: 'right',
    overflow: 'auto',
    zIndex: 8,
  },
  leftDivStyle: {
    margin: 0,
    padding: 0,
    background: '#303E4D',
    height: 'auto',
    width: 220,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    overflow: 'scroll',
  },
  leftHeaderStyle: {
    position: 'sticky',
    top: 0,
    zIndex: 11,
  },
  leftHeaderPicStyle: {
    width: 220,
    height: 61,
    position: 'sticky',
    top: 0,
    zIndex: 11,
  },
  scrollbarStyle: {
    position: 'relative',
    top: 0,
    left: 0,
    fontSize: 16,
    color: "rgb(193,197,202)",
    fontFamily: 'lato',
    lineHeight: 1,
    textAlign: 'left',
    whiteSpace: 'nowrap',
    marginLeft: 15,
    marginTop: 5,
  }
};
