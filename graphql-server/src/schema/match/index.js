import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import Match from './Match';
import matchById from './matchById';
import matches from './matches';
import matchesCreate from './matchesCreate';
import matchesAffected from './matchesAffected';

const typeDefs = flatten([
  Match.typeDefs,
  matchById.typeDefs,
  matches.typeDefs,
  matchesCreate.typeDefs,
  matchesAffected.typeDefs,
]);

const resolvers = merge(
  Match.resolvers,
  matchById.resolvers,
  matches.resolvers,
  matchesCreate.resolvers,
  matchesAffected.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
