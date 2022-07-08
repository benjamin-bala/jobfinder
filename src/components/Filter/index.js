import './filter.css';
import { uuid } from '../../utils/uuid';

export default function Filter() {
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
  return (
    <div className='filter__container'>
      <div className='filter__tabs'>
        {filterData.map((data) => {
          return (
            <div key={uuid()} className='filter__data'>
              <span>{data.symbol}</span>
              <span>{data.name}</span>
            </div>
          );
        })}
      </div>

      <form className='filter__checkbox'>
        <div className='checkbox__item'>
          <input type='checkbox' name='position' />
          <label htmlFor='position'> Fulltime</label>
        </div>
        <div className='checkbox__item'>
          <input type='checkbox' name='position' />
          <label htmlFor='position'> Freelance</label>
        </div>
        <div className='checkbox__item'>
          <input type='checkbox' name='position' />
          <label htmlFor='position'> Internship & Freshers</label>
        </div>
      </form>
    </div>
  );
}
