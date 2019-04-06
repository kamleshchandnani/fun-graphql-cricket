import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import Match from './Match';
import matches from './matches';
import matchesCreate from './matchesCreate';

const typeDefs = flatten([
  Match.typeDefs,
  matches.typeDefs,
  matchesCreate.typeDefs,
]);

const resolvers = merge(
  Match.resolvers,
  matches.resolvers,
  matchesCreate.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
