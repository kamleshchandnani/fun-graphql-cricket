import gql from 'graphql-tag';

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
        id
        name
        imageUrl
      }
      innings {
        battingTeam {
          id
          name
        }
        bowlingTeam {
          id
          name
        }
        score {
          runs
          wickets
          balls
        }
      }
    }
  }
`;
