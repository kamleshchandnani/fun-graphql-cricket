import { gql } from 'apollo-server-express';

// TODO: use URL type scalar for url
const typeDefs = gql`
  type Inning {
    id: ID!
    battingTeam: Team!
    bowlingTeam: Team!
    score: Score!
  }
`;

const resolvers = {
  Inning: {
    id: (inning) => inning.id,
    battingTeam: (inning) => inning.battingTeam,
    bowlingTeam: (inning) => inning.bowlingTeam,
    score: (inning) => inning.score,
  },
};

export default {
  typeDefs,
  resolvers,
};
