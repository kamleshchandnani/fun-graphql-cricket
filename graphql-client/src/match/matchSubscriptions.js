import gql from 'graphql-tag';
import * as matchFragments from './matchFragments';

export const MATCH_UPDATES_SUBSCRIPTION = gql`
  subscription matchUpdates(
    $matchId: ID!
  ) {
    matchUpdates(
      matchId: $matchId
    ) {
      id
      location
      teams {
        ...TeamFields
      }
      innings {
        ...InningFields
        score {
          ...ScoreFields
        }
      }
    }
  }
  ${matchFragments.TEAM_FIELDS_FRAGMENT}
  ${matchFragments.INNING_FIELDS_FRAGMENT}
  ${matchFragments.SCORE_FIELDS_FRAGMENT}
`;
