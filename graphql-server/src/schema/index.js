import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import { gql } from 'apollo-server-express';
import score from './score';

const typeDefs = flatten([
  gql`
    type Query
    type Mutation
    type Subscription
  `,
  score.typeDefs,
]);

const resolvers = merge(
  score.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
