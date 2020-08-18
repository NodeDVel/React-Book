import React, { useState, useCallback } from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './components/NewsPage';

const App = () => {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      return <Route path="/:category?" component={NewsPage} />
    </>
  )
  
};

export default App;
