import { gql } from 'apollo-server-express';

// TODO: use URL type scalar for url
const typeDefs = gql`
  type Player {
    id: ID!
    name: String!
  }
`;

const resolvers = {
  Player: {
    id: (Player) => Player.id,
    name: (Player) => Player.name,
  },
};

export default {
  typeDefs,
  resolvers,
};
