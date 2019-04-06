import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import Inning from './Inning';
import inningCreate from './inningCreate';

const typeDefs = flatten([
  Inning.typeDefs,
  inningCreate.typeDefs,
]);

const resolvers = merge(
  Inning.resolvers,
  inningCreate.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
