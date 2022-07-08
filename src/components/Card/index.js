import './card.css';
import { ImArrowUpRight2 } from 'react-icons/im';

export default function Card({ jobInfo }) {
  return (
    <div className='card'>
      <div className='card__thumbnail'>
        {jobInfo.image_url ? (
          <img src={jobInfo.image_url} alt={jobInfo.title} />
        ) : (
          <span className='card__thumbnail__label font-bold text-lg'>
            {jobInfo.company[0]}
          </span>
        )}
      </div>
      <div className='card__content'>
        <div className='spacing-b-2'>
          <p className='text-mute capitalize'>{jobInfo.position}</p>
          <h3 className='text-lg card__title spacing-y-1 capitalize'>
            {jobInfo.title}
          </h3>
          <p className='text-mute capitalize'>{jobInfo.company}</p>
        </div>
        <p className='text-primary font-bold text-sm capitalize'>
          {jobInfo.location}
        </p>
        <div className='card__link'>
          <a
            className='text-primary font-bold'
            target='_blank'
            rel='noreferrer'
            href={jobInfo.url}
          >
            Apply Now
          </a>
          <ImArrowUpRight2 fill='#3a1d67' />
        </div>
      </div>
    </div>
  );
}
