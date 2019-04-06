import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Mutation {
    createInning(
      matchId: ID!,
      battingTeamId: ID!,
    ): Boolean!
  }
`;

const resolvers = {
  Mutation: {
    createInning: (parent, args, context) => context.createInning({
      matchId: args.matchId,
      battingTeamId: args.battingTeamId,
    }),
  },
};

export default {
  typeDefs,
  resolvers,
};
