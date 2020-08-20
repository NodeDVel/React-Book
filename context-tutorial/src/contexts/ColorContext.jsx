import React, { createContext, useState } from 'react';

const ColorContext = createContext({
  state: { color: 'black', subColor: 'red' },
  actions: {
    setColor: () => {},
    setSubColor: () => {}  
  }
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subColor, setSubColor] = useState('red');

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor }
  };

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  );
}

const { Consumer: ColorConsumer } = ColorContext; // const ColorConsumer = ColorContext.Consumer과 같은 의미

export { ColorProvider, ColorConsumer}

export default ColorContext;