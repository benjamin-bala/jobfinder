import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import MissingPage from './MissingPage';

export default function Views() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='*' element={<MissingPage />} />
    </Routes>
  );
}
