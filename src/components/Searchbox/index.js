import { useContext } from 'react';
import './searchbox.css';
import { FiSearch } from 'react-icons/fi';
import { storeContext } from '../../context/store';

export default function SearchBox() {
  const { dispatch } = useContext(storeContext);

  const search = (e) => dispatch({ type: 'filter', payload: e.target.value });

  return (
    <div className='searchbox__container'>
      <h2 className='searchbox__heading'>Search for fulltime jobs here</h2>
      <div className='searchbox max-width'>
        <FiSearch />
        <input
          type='search'
          onChange={(e) => search(e)}
          placeholder='search for jobs, position(eg. fulltime), stack...'
        />
      </div>
    </div>
  );
}
