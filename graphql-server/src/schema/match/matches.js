import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    matches: [Match!]!
  }
`;

const resolvers = {
  Query: {
    matches: (parent, args, context) => {
      const matches = context.getMatches();
      const teams = context.getTeams();
      return matches.map((match) => ({
        ...match,
        teams: match.teamIds.map(
          (teamId) => teams.find((team) => team.id === teamId),
        ),
      }));
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
