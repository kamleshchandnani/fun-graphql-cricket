import { gql } from 'apollo-server-express';
import pubsub from '../../PubSub';

const typeDefs = gql`
  extend type Subscription {
    scoreByTeamAffected: Score!
  }
`;

const resolvers = {
  Subscription: {
    scoreByTeamAffected: {
      subscribe: () => pubsub.asyncIterator([pubsub.exchange]),
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
