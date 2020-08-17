import React, { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;

    this.box.scrollTop = scrollHeight - clientHeight;
  }

  render() {
    const style = {
      border: '1px solid black',
      width: '300px',
      height: '300px',
      overflow: 'auto',
      position: 'relative'
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    }

    return (
      <input
      style={style} 
      ref={(ref) => this.box = ref}>
        <div style={innerStyle}/>
      </input>
    );
    
  }
}

export default ScrollBox;


// render() { //App.js 에서 class로 extends로 compoenent로 받고 안에 작성
//   return(
//     <div>
//       <ScrollBox ref={(ref) => this.scrollBox = ref}/>
//       <button onClick={() => this.scrollBox.scrollToBottom()}>맨 앞으로</button>
//     </div>
//   )
// };