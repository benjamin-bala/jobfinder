import './error.css';
import { BsExclamationCircleFill } from 'react-icons/bs';

export default function Error(props) {
  return (
    <div className='error'>
      <div className='error__icon'>
        <BsExclamationCircleFill size={70} fill='#f83231' />
      </div>
      <div className='error__content'>
        <h2 className='text-xl'>Opps! You ran into an error...</h2>
        <div onClick={() => props.action()} className='error__button'>
          Try again!
        </div>
      </div>
    </div>
  );
}
