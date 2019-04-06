/**
 * Schema
 * Type Team {
 *   id: ID!
 *   name
 *   players: [Player!]!
 *   imageUrl
 * }
 *
 * Type Match {
 *   id: ID!
 *   teams: [Team!]!
 *   innings: [Inning!]!
 *   location: String!
 * }
 *
 * Type Inning {
 *   battingTeam: Team!
 *   bowlingTeam: Team!
 *   score: Score!
 * }
 *
 * Type Score {
 *   runs: Int!
 *   wickets: Int!
 *   balls: Int!
 * }
 *
 * query teams: [Team!]!
 * query teamById(teamId: ID!): Team!
 * query matches: [Match!]!
 * query getMatchById(matchId: ID!): Match!
 *
 * mutation createTeams(teams: [TeamInput!]!): Boolean
 * mutation createMatches(matches: [MatchInput!]!): Boolean
 * mutation createInning(matchId: ID!, battingTeamId: ID!): Boolean
 * mutation updateScore(matchId: ID!, score: ScoreInput!): Boolean
 *
 * subscription getMatchUpdates(matchId: ID!)
 */

import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import { gql } from 'apollo-server-express';
import inning from './inning';
import match from './match';
import score from './score';
import team from './team';

const typeDefs = flatten([
  gql`
    type Query
    type Mutation
  `,
  inning.typeDefs,
  match.typeDefs,
  score.typeDefs,
  team.typeDefs,
]);

const resolvers = merge(
  inning.resolvers,
  match.resolvers,
  score.resolvers,
  team.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
