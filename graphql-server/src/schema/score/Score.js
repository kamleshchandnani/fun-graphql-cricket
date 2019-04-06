import { gql } from 'apollo-server-express';

// TODO: convert runs from Int to RUNS_ENUM
const typeDefs = gql`
  type Score {
    runs: Int!
    wickets: Int!
    balls: Int!
  }

  input ScoreInput {
    runs: Int!
    wickets: Int!
    balls: Int!
  }
`;

const resolvers = {
  Score: {
    runs: (score) => score.runs,
    wickets: (score) => score.wickets,
    balls: (score) => score.balls,
  },
};

export default {
  typeDefs,
  resolvers,
};
