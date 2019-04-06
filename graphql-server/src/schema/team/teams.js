import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    teams: [Team!]!
  }
`;

const resolvers = {
  Query: {
    teams: (parent, args, context) => context.getTeams(),
  },
};

export default {
  typeDefs,
  resolvers,
};
