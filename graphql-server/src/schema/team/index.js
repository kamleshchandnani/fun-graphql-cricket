import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import Team from './Team';
import teams from './teams';
import createTeams from './createTeams';

const typeDefs = flatten([
  Team.typeDefs,
  teams.typeDefs,
  createTeams.typeDefs,
]);

const resolvers = merge(
  Team.resolvers,
  teams.resolvers,
  createTeams.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
