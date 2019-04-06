import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    matches: [Match!]!
  }
`;

const resolvers = {
  Query: {
    matches: (parent, args, context) => context.getMatches(),
  },
};

export default {
  typeDefs,
  resolvers,
};
