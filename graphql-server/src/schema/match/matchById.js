import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    matchById(
      matchId: ID!,
    ): Match!
  }
`;

const resolvers = {
  Query: {
    matchById: (parent, args, context) => {
      const match = context.getMatchById(args.matchId);
      const teams = context.getTeams();
      return {
        ...match,
        teams: match.teamIds.map(
          (teamId) => teams.find((team) => team.id === teamId),
        ),
        innings: match.innings.map((inning) => ({
          battingTeam: teams.find((team) => team.id === inning.battingTeamId),
          bowlingTeam: teams.find((team) => team.id === inning.bowlingTeamId),
          score: inning.score,
        })),
      };
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
