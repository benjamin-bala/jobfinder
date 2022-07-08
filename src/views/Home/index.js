import React from 'react';
import Category from '../../components/Category';
import Filter from '../../components/Filter';
import SearchBox from '../../components/Searchbox';

export default function Home() {
  return (
    <div>
      <SearchBox />
      <div className='max-width'>
        <Filter />
        <Category />
        <Category />
      </div>
    </div>
  );
}
