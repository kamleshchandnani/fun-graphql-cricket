import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Mutation {
    scoreUpdate(
      matchId: ID!,
      score: ScoreInput!,
    ): Boolean!
  }
`;

const resolvers = {
  Mutation: {
    scoreUpdate: (parent, args, context) => context.updateScore({
      matchId: args.matchId,
      score: args.score,
    }),
  },
};

export default {
  typeDefs,
  resolvers,
};
