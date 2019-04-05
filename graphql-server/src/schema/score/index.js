import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import Score from './Score';

const typeDefs = flatten([
  Score.typeDefs,
]);

const resolvers = merge(
  Score.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
