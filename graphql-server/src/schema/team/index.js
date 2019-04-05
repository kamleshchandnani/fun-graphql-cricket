import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import Team from './Team';

const typeDefs = flatten([
  Team.typeDefs,
]);

const resolvers = merge(
  Team.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
