import gql from 'graphql-tag';

export const TEAM_FIELDS_FRAGMENT = gql`
  fragment TeamFields on Team {
    id
    name
    imageUrl
  }
`;

export const INNING_FIELDS_FRAGMENT = gql`
  fragment InningFields on Inning {
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
`;

export const SCORE_FIELDS_FRAGMENT = gql`
  fragment ScoreFields on Score {
    runs
    wickets
    balls
  }
`;
