import React from 'react'
import data from '../json/2019-01-31.json'
import {
  PageLeftContent,
  PageCenterContent,
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
      <div style={styles.pageContentStyle}>
        <PageLeftContent />
        <PageCenterContent threadOpen={this.state.threadOpen} />
        <PageRight />
      </div>
    );
  }
}

const styles = {
  pageContentStyle: {
    height: 'auto',
    width: 'auto',
    margin: 0,
    padding: 0,
  },
};

export default App;
