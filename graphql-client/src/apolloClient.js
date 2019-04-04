import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, split } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

const GRAPHQL_URL = 'http://localhost:3333';
const GRAPHQL_SUBSCRIPTIONS_URL = 'ws://localhost:3333/subscriptions';

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      console.error(`[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${JSON.stringify(path)}, Code: ${extensions.code}`);
    });
  }
  if (networkError) {
    const errorMessage = `[Network error]: ${networkError}`;
    console.error(errorMessage);
  }
});

const webSocketLink = new WebSocketLink({
  uri: GRAPHQL_SUBSCRIPTIONS_URL,
  options: {
    reconnect: true,
  },
});

const httpLink = createHttpLink({
  uri: GRAPHQL_URL,
  credentials: 'same-origin',
});

const link = ApolloLink.from([
  errorLink,
  split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    webSocketLink,
    httpLink,
  ),
]);

const apolloClient = new ApolloClient({
  cache,
  link,
  name: 'graphql-client',
});

export default apolloClient;
