import { uuid } from '../../utils/uuid';
import Card from '../Card';
import './category.css';

export default function Category(props) {
  const groups = props.data.reduce((groups, data) => {
    const date = data.date_added.split(' ')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(data);
    return groups;
  }, {});

  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      data: groups[date],
    };
  });

  return groupArrays.map((jobData) => {
    return (
      <div key={uuid()} className='category'>
        <h2 className='spacing-y-1 text-lg'>{jobData.date}</h2>
        {jobData.data.map((jobInfo) => {
          return <Card key={uuid()} jobInfo={jobInfo} />;
        })}
      </div>
    );
  });
}
