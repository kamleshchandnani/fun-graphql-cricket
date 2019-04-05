import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import Player from './Player';

const typeDefs = flatten([
  Player.typeDefs,
]);

const resolvers = merge(
  Player.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
