import { gql } from 'apollo-server-express';

// TODO: use URL type scalar for url
const typeDefs = gql`
  type Team {
    id: ID!
    name: String!
    players: [Player!]!
    imageUrl: String!
  }
`;

const resolvers = {
  Team: {
    id: (team) => team.id,
    name: (team) => team.name,
    players: (team) => team.players,
    imageUrl: (team) => team.imageUrl,
  },
};

export default {
  typeDefs,
  resolvers,
};
