import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import Score from './Score';
import scoreByTeam from './scoreByTeam';
import scoreByTeamAffected from './scoreByTeamAffected';
import scoreCreate from './scoreCreate';

const typeDefs = flatten([
  Score.typeDefs,
  scoreByTeam.typeDefs,
  scoreByTeamAffected.typeDefs,
  scoreCreate.typeDefs,
]);

const resolvers = merge(
  Score.resolvers,
  scoreByTeam.resolvers,
  scoreByTeamAffected.resolvers,
  scoreCreate.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
