import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import Match from './Match';

const typeDefs = flatten([
  Match.typeDefs,
]);

const resolvers = merge(
  Match.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
