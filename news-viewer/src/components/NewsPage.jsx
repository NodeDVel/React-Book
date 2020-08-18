import React from 'react';
import Categories from './Categories';
import NewsList from './NewsList';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';

  return (
    <>
      <Categories/>
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;