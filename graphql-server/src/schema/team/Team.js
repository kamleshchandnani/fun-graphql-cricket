import { gql } from 'apollo-server-express';

// TODO: use URL type scalar for url
const typeDefs = gql`
  type Team {
    id: ID!
    name: String!
    imageUrl: String!
  }

  input TeamInput {
    id: ID!
    name: String!
    imageUrl: String!
  }
`;

const resolvers = {
  Team: {
    id: (team) => team.id,
    name: (team) => team.name,
    imageUrl: (team) => team.imageUrl,
  },
};

export default {
  typeDefs,
  resolvers,
};
