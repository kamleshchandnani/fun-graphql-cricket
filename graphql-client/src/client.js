import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './apolloClient';
import Wrapper from './app/Wrapper/Wrapper';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Wrapper />
  </ApolloProvider>,
  document.getElementById('root'),
);
