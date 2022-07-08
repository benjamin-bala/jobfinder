import { useContext, useEffect } from 'react';
import Category from '../../components/Category';
import Filter from '../../components/Filter';
import SearchBox from '../../components/Searchbox';
import { JobsApi } from '../../application';
import { storeContext } from '../../context/store';
export default function Home() {
  const { loading, error, data } = JobsApi();
  const { state, dispatch } = useContext(storeContext);

  useEffect(() => {
    if (!loading && data) {
      dispatch({ type: 'store_data', payload: { jobs: data?.jobs } });
    }
  }, [loading]);

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>Error...</h2>;

  const filteredData =
    state?.jobs &&
    state?.jobs.filter((jobs) => {
      return (
        jobs.title.toLowerCase().includes(state?.search.toLowerCase()) ||
        jobs.position.toLowerCase().includes(state?.search.toLowerCase()) ||
        jobs.category.toLowerCase().includes(state?.search.toLowerCase())
      );
    });

  // console.log('filtered data', filteredData);

  return (
    <div>
      <SearchBox />
      <div className='max-width'>
        <Filter />
        {filteredData && <Category data={filteredData} />}
        {filteredData && filteredData.length === 0 ? (
          <h2>Sorry, we could not find your dream job.</h2>
        ) : null}
      </div>
    </div>
  );
}
