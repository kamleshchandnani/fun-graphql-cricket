import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    matchById(
      matchId: ID!,
    ): Match!
  }
`;

const resolvers = {
  Query: {
    matchById: (parent, args, context) => context.getMatchById({
      matchId: args.matchId,
    }),
  },
};

export default {
  typeDefs,
  resolvers,
};
