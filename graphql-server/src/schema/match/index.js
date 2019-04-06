import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import Match from './Match';
import matches from './matches';
import createMatches from './createMatches';

const typeDefs = flatten([
  Match.typeDefs,
  matches.typeDefs,
  createMatches.typeDefs,
]);

const resolvers = merge(
  Match.resolvers,
  matches.resolvers,
  createMatches.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
