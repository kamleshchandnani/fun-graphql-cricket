import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import Score from './Score';
import updateScore from './updateScore';

const typeDefs = flatten([
  Score.typeDefs,
  updateScore.typeDefs,
]);

const resolvers = merge(
  Score.resolvers,
  updateScore.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
