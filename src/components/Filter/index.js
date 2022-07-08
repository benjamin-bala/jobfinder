import { useContext, useState } from 'react';
import './filter.css';
import { uuid } from '../../utils/uuid';
import { storeContext } from '../../context/store';

export default function Filter() {
  const { state, dispatch } = useContext(storeContext);

  const filterData = [
    {
      name: 'tech',
      symbol: '💻',
    },
    {
      name: 'design',
      symbol: '🎨',
    },
    {
      name: 'marketing',
      symbol: '💼',
    },
    {
      name: 'content',
      symbol: '📋',
    },
  ];

  const [value, setValue] = useState('');

  const setFilter = (searchValue) => {
    if (value === searchValue && value === state?.search) {
      setValue('');
      dispatch({ type: 'filter', payload: '' });
    } else {
      setValue(searchValue);
      dispatch({ type: 'filter', payload: searchValue });
    }
  };

  return (
    <div className='filter__container'>
      <div className='filter__tabs'>
        {filterData.map((data) => {
          return (
            <div
              key={uuid()}
              className={`${
                value === data.name && value === state.search
                  ? 'active__tab'
                  : null
              } filter__data`}
              onClick={() => setFilter(data.name)}
            >
              <span>{data.symbol}</span>
              <span>{data.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
