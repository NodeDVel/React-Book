import React, { Component } from 'react';

class Counter extends Component {  // state: 컴포넌트 내에서 바뀔 수 있는 값
  constructor(props) {
    super(props); //object

    this.state = {
      number: 0,
      age: 0,
    };

    //state의 다른 초기값 설정 방법

    // state = {
    //   number: 0,
    //   age: 0,
    // }
  }

  render() {
    const { number, age } = this.state; //this.state 비구조화 할당 시에 이름 그대로 쓰기

    return (
      <div>
        <h1>{number}</h1>
        <h1>{age}</h1>
        <button onClick={() => {
          this.setState((prevState) => { //prevState에는 this.state의 정보가 담겨 있다
            console.log(prevState);
            return { number: prevState.number + 1 }
          });

          // this.setState((prevState) => {
          //   return { number: prevState.number + 1 }
          // });
          }}>+1</button>
        
        {/* <button onClick={() => this.setState({ age: age + 1 })}>+1</button> */}
      </div>
    )
  }
}

export default Counter;