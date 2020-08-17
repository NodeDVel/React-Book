import React, { Component } from 'react';
import propTypes from 'prop-types';

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props; //태그에 속성을 설정할 때에 사용
    console.log(this.props);

    return (
      <div>
        name: {name} <br/>
        children: {children} <br/>
        favoriteNumber: {favoriteNumber}
      </div>
    )
  }
}

MyComponent.defaultProps = {
  name: '홍길동',
  favoriteNumber: 3
};

MyComponent.propTypes = {
  name: propTypes.string,
  favoriteNumber: propTypes.number.isRequired
}

export default MyComponent;