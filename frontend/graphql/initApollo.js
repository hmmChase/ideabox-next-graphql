import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function createClient(initialState) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'http://localhost:3333',
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJiYWNrZW5kQHByb2QiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNTUwNjk5OTU2LCJleHAiOjE1NTEzMDQ3NTZ9.-Wj1q3RiEycrpESzf7w_nJMqWcFELa9sIdv1hp7WR9I'
      },

      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return createClient(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createClient(initialState);
  }

  return apolloClient;
}
