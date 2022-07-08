import StoreContext from './context/StoreContext';
import Views from './views';

function App() {
  return (
    <StoreContext>
      <Views />
    </StoreContext>
  );
}

export default App;
