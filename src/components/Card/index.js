import './card.css';
import { ImArrowUpRight2 } from 'react-icons/im';

export default function Card() {
  return (
    <div className='card'>
      <div className='card__thumbnail'></div>
      <div className='card__content'>
        <div className='spacing-b-2'>
          <p className='text-mute'>Position</p>
          <h3 className='text-xl card__title spacing-y-1'>Title</h3>
          <p className='text-mute'>Company</p>
        </div>
        <p className='text-primary font-bold text-sm'>Location</p>
        <div className='card__link'>
          <a className='text-primary font-bold' href='#12'>
            Apply Now
          </a>
          <ImArrowUpRight2 fill='#3a1d67' />
        </div>
      </div>
    </div>
  );
}
