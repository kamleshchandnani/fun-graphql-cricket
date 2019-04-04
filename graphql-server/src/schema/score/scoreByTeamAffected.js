import { gql, withFilter } from 'apollo-server-express';
import pubsub from '../../PubSub';

const typeDefs = gql`
  extend type Subscription {
    scoreByTeamAffected(id: ID!): Score!
  }
`;

const resolvers = {
  Subscription: {
    scoreByTeamAffected: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([pubsub.exchange]),
        (payload, args) => payload.scoreByTeamAffected.id === args.id,
      ),
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
