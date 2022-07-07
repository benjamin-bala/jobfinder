import './searchbox.css';
import { FiSearch } from 'react-icons/fi';

export default function SearchBox() {
  return (
    <div className='searchbox__container'>
      <h2 className='searchbox__heading'>Search for fulltime jobs here</h2>
      <div className='searchbox max-width'>
        <FiSearch />
        <input type='search' placeholder='Search by title, companies...' />
      </div>
    </div>
  );
}
