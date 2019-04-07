import { gql, withFilter } from 'apollo-server-express';
import pubsub from '../../PubSub';

const typeDefs = gql`
  extend type Subscription {
    matchUpdates(
      matchId: ID!
    ): Match!
  }
`;

const resolvers = {
  Subscription: {
    matchUpdates: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([pubsub.exchange]),
        (payload, args) => payload.matchesAffected.some((match) => match.id === args.matchId),
      ),
      resolve: (parent, args, context) => context.getMatchById({
        matchId: args.matchId,
      }),
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
