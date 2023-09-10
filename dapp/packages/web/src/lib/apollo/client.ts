import * as React from 'react';
import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { mergeDeep } from '@apollo/client/utilities';

import { API_URL } from 'lib/config';
import { isBrowser } from 'lib/helpers/utils';

type Options = Record<string, any>;

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const httpLink = createHttpLink({
  uri: API_URL,
});

function createApolloClient(initialState: null | Record<string, any>, options: Options) {
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        // authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  return new ApolloClient({
    ssrMode: false,
    link: authLink.concat(httpLink),
    name: 'web',
    defaultOptions: {
      mutate: { errorPolicy: 'all' },
      query: { errorPolicy: 'all' },
    },
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export function initializeApollo(initialState: null | Record<string, any>, options: Options) {
  const _apolloClient = apolloClient ?? createApolloClient(initialState, options);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    const existingCache = _apolloClient.extract();
    const data = mergeDeep(initialState, existingCache);
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (!isBrowser) return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any = null) {
  const options: Options = {} as Options;
  // eslint-disable-next-line
  const store = React.useMemo(() => initializeApollo(initialState, options), [initialState]);
  return store;
}
