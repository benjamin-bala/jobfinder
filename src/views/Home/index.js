import { useContext, useEffect } from 'react';
import Category from '../../components/Category';
import Filter from '../../components/Filter';
import SearchBox from '../../components/Searchbox';
import { JobsApi } from '../../application';
import { storeContext } from '../../context/store';
import Skeleton from '../Skeleton';
import Error from '../Error';
import { BiMessageSquareError } from 'react-icons/bi';

export default function Home() {
  const { loading, error, data, refetch } = JobsApi();
  const { state, dispatch } = useContext(storeContext);

  useEffect(() => {
    if (!loading && data) {
      dispatch({ type: 'store_data', payload: { jobs: data?.jobs } });
    }
  }, [loading, data, dispatch]);

  if (loading) return <Skeleton />;

  if (error) return <Error action={refetch} />;

  const filteredData =
    state?.jobs &&
    state?.jobs.filter((jobs) => {
      return (
        jobs.title.toLowerCase().includes(state?.search.toLowerCase()) ||
        jobs.position.toLowerCase().includes(state?.search.toLowerCase()) ||
        jobs.category.toLowerCase().includes(state?.search.toLowerCase())
      );
    });

  return (
    <div>
      <SearchBox />
      <div className='max-width'>
        <Filter />
        {filteredData && <Category data={filteredData} />}
        {filteredData && filteredData.length === 0 ? (
          <div className='text-center spacing-y-3'>
            <BiMessageSquareError size={30} />
            <p className='text-lg spacing-y-1'>
              Sorry, we could not find your dream job.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
