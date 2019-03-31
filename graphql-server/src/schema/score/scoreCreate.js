import { gql } from 'apollo-server-express';
import pubsub from '../../PubSub';

const typeDefs = gql`
  input TeamIdentifierInput {
    id: ID!
  }

  extend type Mutation {
    scoreCreate(
      team: TeamIdentifierInput!
    ): Score!
  }
`;

const resolvers = {
  Mutation: {
    scoreCreate: (parent, args) => {
      const score = {
        id: args.team.id,
        runs: 11,
        wickets: 2,
        overs: 6,
      };
      pubsub.publish(pubsub.exchange, { scoreByTeamAffected: score });
      return score;
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
