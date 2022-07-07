import React from 'react';
import Filter from '../../components/Filter';
import SearchBox from '../../components/Searchbox';

export default function Home() {
  return (
    <div>
      <SearchBox />
      <div className='max-width'>
        <Filter />
      </div>
    </div>
  );
}
