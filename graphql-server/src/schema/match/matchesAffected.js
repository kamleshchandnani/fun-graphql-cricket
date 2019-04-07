import { gql } from 'apollo-server-express';
import pubsub from '../../PubSub';

const typeDefs = gql`
  extend type Subscription {
    matchesAffected: [Match!]!
  }
`;

const resolvers = {
  Subscription: {
    matchesAffected: {
      subscribe: () => pubsub.asyncIterator([pubsub.exchange]),
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
