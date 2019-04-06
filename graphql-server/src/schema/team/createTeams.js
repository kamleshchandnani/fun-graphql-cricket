import { gql } from 'apollo-server-express';

const typeDefs = gql`
  input TeamInput {
    name: String!
    imageUrl: String!
  }

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
