import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import Score from './Score';
import scoreUpdate from './scoreUpdate';

const typeDefs = flatten([
  Score.typeDefs,
  scoreUpdate.typeDefs,
]);

const resolvers = merge(
  Score.resolvers,
  scoreUpdate.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
