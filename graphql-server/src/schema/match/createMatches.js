import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Mutation {
    createMatches(
      matches: [MatchInput!]!,
    ): Boolean!
  }
`;

const resolvers = {
  Mutation: {
    createMatches: (parent, args, context) => context.createMatches({
      matches: args.matches,
    }),
  },
};

export default {
  typeDefs,
  resolvers,
};
