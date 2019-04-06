import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Mutation {
    createTeams(
      teams: [TeamInput!]!,
    ): Boolean!
  }
`;

const resolvers = {
  Mutation: {
    createTeams: (parent, args, context) => context.createTeams({
      teams: args.teams,
    }),
  },
};

export default {
  typeDefs,
  resolvers,
};
