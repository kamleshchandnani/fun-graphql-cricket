import { gql } from 'apollo-server-express';

// TODO: use URL type scalar for url
const typeDefs = gql`
  type Match {
    id: ID!
    teams: [Team!]!
    innings: [Inning!]!
    location: String!
  }
`;

const resolvers = {
  Match: {
    id: (match) => match.id,
    teams: (match) => match.teams,
    innings: (match) => match.innings,
    location: (match) => match.location,
  },
};

export default {
  typeDefs,
  resolvers,
};
