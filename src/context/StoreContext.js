import { useReducer } from 'react';
import { reducer, initialState } from '../store';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { storeContext } from './store';

const client = new ApolloClient({
  uri: 'https://useful-haddock-65.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': process.env.REACT_APP_ADMIN_SECRET,
  },
  cache: new InMemoryCache(),
});

console.log(process.env.ADMIN_SECRET);

export default function StoreContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <storeContext.Provider value={value}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </storeContext.Provider>
  );
}
