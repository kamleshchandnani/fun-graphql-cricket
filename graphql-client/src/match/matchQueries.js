import gql from 'graphql-tag';

export const MATCH_QUERY = gql`
  query matchQuery(
    $matchId: ID!
  ) {
    matchById(
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
