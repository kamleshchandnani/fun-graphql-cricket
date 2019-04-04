/**
 * Schema
 * Team {
 * id: ID!
 * name
 * player: [Player!]!
 * imageUrl
 * }
 *
 * Player {
 * id: ID!
 * name: String!
 * }
 *
 * Match {
 * id: ID!
 * teams: [Team!]!
 * innings: [Inning!]!
 * location: String!
 * }
 *
 * Inning {
 * battingTeam: [Team!]!
 * bowlingTeam: [Team!]!
 * score: Score!
 * }
 *
 * Score {
 * runs: Int!
 * wickets: Int!
 * overs: Float!
 * }
 *
 * createTeam
 * createMatch
 * createInning
 * updateScore
 * getMatchUpdates -- subscription
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
