/**
 * Schema
 * Type Team {
 *   id: ID!
 *   name
 *   player: [Player!]!
 *   imageUrl
 * }
 *
 * Type Player {
 *   id: ID!
 *   name: String!
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
 *   overs: Float!
 * }
 *
 * mutation createTeam(team: Team!): Boolean
 * mutation createMatchs(match: Match!): Boolean
 * mutation createInning(matchId: ID!, battingTeamId: ID!): Boolean
 * mutation updateScore(matchId: ID!, score: Score!): Boolean
 * mutation getMatchUpdates(matchId: ID!) -- subscription
 */

import merge from 'lodash/merge';
import flatten from 'lodash/flatten';
import { gql } from 'apollo-server-express';
import score from './score';

const typeDefs = flatten([
  gql`
    type Query
    type Mutation
    type Subscription
  `,
  score.typeDefs,
]);

const resolvers = merge(
  score.resolvers,
);

export default {
  typeDefs,
  resolvers,
};
