import { gql } from 'apollo-server-express';

const typeDefs = gql`
  input TeamInput {
    name: String!
    imageUrl: String!
  }

  extend type Mutation {
    teamsCreate(
      teams: [TeamInput!]!,
    ): Boolean!
  }
`;

const resolvers = {
  Mutation: {
    teamsCreate: (parent, args, context) => context.createTeams({
      teams: args.teams,
    }),
  },
};

export default {
  typeDefs,
  resolvers,
};
