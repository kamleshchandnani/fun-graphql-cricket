import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import Inning from './Inning';

const typeDefs = flatten([
  Inning.typeDefs,
]);

const resolvers = merge(
  Inning.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
