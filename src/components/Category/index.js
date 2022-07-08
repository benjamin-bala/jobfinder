import Card from '../Card';
import './category.css';

export default function Category() {
  return (
    <div className='category'>
      <h2 className='spacing-y-1 text-lg'>Today</h2>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
