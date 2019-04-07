import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import Match from './Match';
import matchById from './matchById';
import matches from './matches';
import matchesAffected from './matchesAffected';
import matchesCreate from './matchesCreate';
import matchUpdates from './matchUpdates';

const typeDefs = flatten([
  Match.typeDefs,
  matchById.typeDefs,
  matches.typeDefs,
  matchesAffected.typeDefs,
  matchesCreate.typeDefs,
  matchUpdates.typeDefs,
]);

const resolvers = merge(
  Match.resolvers,
  matchById.resolvers,
  matches.resolvers,
  matchesAffected.resolvers,
  matchesCreate.resolvers,
  matchUpdates.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
