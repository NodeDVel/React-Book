import React from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/ColorContext';
import SelectColors from './components/SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
