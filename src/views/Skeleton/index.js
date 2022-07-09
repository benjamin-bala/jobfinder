import './skeleton.css';

export default function Skeleton() {
  return (
    <div className='skeleton'>
      <div className='skeleton__header'>
        <div className='max-width'>
          <div className='skeleton__searchbar'></div>
        </div>
      </div>

      <div className='max-width'>
        <div className='skeleton__tab'>
          <div className='skeleton__tab__details'></div>
          <div className='skeleton__tab__details'></div>
          <div className='skeleton__tab__details'></div>
          <div className='skeleton__tab__details'></div>
        </div>

        <div className='skeleton__card__container'>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className='skeleton__card'>
      <div className='skeleton__card__thumbnail'></div>
      <div className='skeleton__card__content'>
        <div className='skeleton__card__position'></div>
        <div className='skeleton__card__title'></div>
        <div className='skeleton__card__company'></div>
      </div>
    </div>
  );
}
