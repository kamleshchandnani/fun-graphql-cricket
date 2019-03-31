import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Score {
    id: ID!
    runs: Int!
    wickets: Int!
    overs: Int!
  }
`;

const resolvers = {
  Score: {
    id: (score) => score.id,
    runs: (score) => score.runs,
    wickets: (score) => score.wickets,
    overs: (score) => score.overs,
  },
};

export default {
  typeDefs,
  resolvers,
};
