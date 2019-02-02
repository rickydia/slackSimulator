import React from 'react'
import { Container } from './Container'
import { Header } from './Header'

const leftHeaderPic = require('../images/left header.png');

export const PageLeftContent = (props) => {
  return (
    <div style={styles.leftDivStyle}>

      <div style={styles.leftHeaderPicStyle}>
        <Header>
          <img src={leftHeaderPic} style={styles.leftHeaderPicStyle} alt='left header pic'/>
        </Header>
      </div>

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
  leftDivStyle: {
    background: '#303E4D',
    height: 'auto',
    width: 220,
    display: 'block',
    position: 'relative',
    top: 0,
    left: 0,
    zIndex: 10,
    overflow: 'scroll',
  },
  leftHeaderStyle: {
    margin: 0,
    padding: 0,
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
    display: 'block',
    top: 0,
    left: 0,
    fontSize: 16,
    color: "rgb(193,197,202)",
    overflow: 'scroll',
    fontFamily: 'lato',
    lineHeight: 1,
    textAlign: 'left',
    whiteSpace: 'nowrap',
    padding: 0,
    margin: 0,
    marginLeft: 15,
    marginTop: 5,
  }
};
