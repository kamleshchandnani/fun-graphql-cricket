import { gql } from 'apollo-server-express';

// TODO: convert runs from Int to RUNS_ENUM
const typeDefs = gql`
  type Score {
    runs: Int!
    wickets: Int!
    overs: Float!
  }
`;

const resolvers = {
  Score: {
    runs: (score) => score.runs,
    wickets: (score) => score.wickets,
    overs: (score) => score.overs,
  },
};

export default {
  typeDefs,
  resolvers,
};
