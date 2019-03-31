import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    scoreByTeam: Score!
  }
`;

const resolvers = {
  Query: {
    scoreByTeam: () => ({
      id: '1',
      runs: 10,
      wickets: 2,
      overs: 5,
    }),
  },
};

export default {
  typeDefs,
  resolvers,
};
