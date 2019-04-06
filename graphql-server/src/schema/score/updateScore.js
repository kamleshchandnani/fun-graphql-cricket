import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Mutation {
    updateScore(
      matchId: ID!,
      score: ScoreInput!,
    ): Boolean!
  }
`;

const resolvers = {
  Mutation: {
    updateScore: (parent, args, context) => context.updateScore({
      matchId: args.matchId,
      score: args.score,
    }),
  },
};

export default {
  typeDefs,
  resolvers,
};
