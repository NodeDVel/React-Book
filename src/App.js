import React, { Component } from 'react';
import ScrollBox from '../src/refDom/ScrollBox';

class App extends Component {
  render() {
    return(
      <div>
        <ScrollBox ref={(ref) => this.scrollBox = ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 앞으로</button>
      </div>
    )
  };
}

export default App;
