import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import Team from './Team';
import teams from './teams';
import teamsCreate from './teamsCreate';

const typeDefs = flatten([
  Team.typeDefs,
  teams.typeDefs,
  teamsCreate.typeDefs,
]);

const resolvers = merge(
  Team.resolvers,
  teams.resolvers,
  teamsCreate.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
