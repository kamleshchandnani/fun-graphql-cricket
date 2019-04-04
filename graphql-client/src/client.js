import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './apolloClient';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <div>test</div>
  </ApolloProvider>,
  document.getElementById('root'),
);
