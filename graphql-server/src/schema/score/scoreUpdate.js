import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Mutation {
    scoreUpdate(
      matchId: ID!,
      inningId: ID!,
    ): Match!
  }
`;

const resolvers = {
  Mutation: {
    scoreUpdate: (parent, args, context) => context.updateScore({
      matchId: args.matchId,
      inningId: args.inningId,
    }),
  },
};

export default {
  typeDefs,
  resolvers,
};
