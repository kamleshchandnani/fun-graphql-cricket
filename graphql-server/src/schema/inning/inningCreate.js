import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Mutation {
    inningCreate(
      matchId: ID!,
      battingTeamId: ID!,
    ): Boolean!
  }
`;

const resolvers = {
  Mutation: {
    inningCreate: (parent, args, context) => context.createInning({
      matchId: args.matchId,
      battingTeamId: args.battingTeamId,
    }),
  },
};

export default {
  typeDefs,
  resolvers,
};
