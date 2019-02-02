import React from 'react'
import data from '../json/2019-01-31.json'
import {
  Container,
  PageLeft,
  PageCenter,
  PageRight
} from '../components'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threadOpen: true,
    };
  }

  render() {
    console.log(data);
    return (
      <div>
        <PageLeft />
        <PageCenter threadOpen={this.state.threadOpen}>
          <Container />
        </PageCenter>
        <PageRight />
      </div>
    );
  }
}

export default App;
