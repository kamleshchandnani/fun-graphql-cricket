import pubsub from '../PubSub';

const state = {
  team: {
    1: {
      id: '1',
      name: 'csk',
      imageUrl: 'csk.png',
    },
    2: {
      id: '2',
      name: 'rcb',
      imageUrl: 'rcb.png',
    },
  },
  match: {
    1: {
      id: '1',
      teamIds: ['1', '2'],
      location: 'Bangalore',
      innings: [{
        id: '1',
        battingTeamId: '1',
        bowlingTeamId: '2',
        score: {
          runs: 0,
          wickets: 0,
          balls: 0,
        },
      }, {
        id: '2',
        battingTeamId: '2',
        bowlingTeamId: '1',
        score: {
          runs: 0,
          wickets: 0,
          balls: 0,
        },
      }],
    },
  },
};

export const getTeams = () => Object.values(state.team);

export const createTeams = ({ teams }) => {
  const numberOfTeams = Object.values(state.team).length;
  teams.forEach((team, index) => {
    const teamId = numberOfTeams + index + 1;
    state.team[teamId] = {
      ...team,
      id: `${teamId}`,
    };
  });
  return true;
};

const resolveMatch = (match) => {
  const teams = Object.values(state.team);
  return {
    ...match,
    teams: match.teamIds.map(
      (teamId) => teams.find((team) => team.id === teamId),
    ),
    innings: match.innings.map((inning) => ({
      ...inning,
      battingTeam: teams.find((team) => team.id === inning.battingTeamId),
      bowlingTeam: teams.find((team) => team.id === inning.bowlingTeamId),
    })),
  };
};

const publishMatches = () => {
  pubsub.publish(pubsub.exchange, {
    matchesAffected: Object.values(state.match).map(resolveMatch),
  });
};

export const getMatches = () => {
  const matches = Object.values(state.match)
    .map(resolveMatch);
  return matches;
};

export const getMatchById = ({ matchId }) => {
  const match = Object.values(state.match).find((matchObj) => matchObj.id === matchId);
  return resolveMatch(match);
};

export const createMatches = ({ matches }) => {
  matches.forEach((match, index) => {
    const matchId = Object.values(state.match).length + index + 1;
    state.match[matchId] = {
      ...match,
      innings: [],
      id: `${matchId}`,
    };
  });

  publishMatches();
  return true;
};

export const createInning = ({ matchId, battingTeamId }) => {
  state.match[matchId].innings = [
    ...state.match[matchId].innings,
    {
      id: `${state.match[matchId].innings.length + 1}`,
      battingTeamId,
      bowlingTeamId: state.match[matchId].teamIds.find((teamId) => teamId !== battingTeamId),
      score: {
        runs: 0,
        wickets: 0,
        balls: 0,
      },
    },
  ];

  publishMatches();
  return true;
};

export const updateScore = ({ matchId, inningId }) => {
  // TODO: Please suggest better names for values and randomValue 🤦‍
  const values = [1, 2, 4, 6, 'WIDE', 'OUT'];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  state.match[matchId].innings = state.match[matchId].innings.map((inning) => {
    if (inning.id === inningId) {
      if ([1, 2, 4, 6].includes(randomValue)) {
        return {
          ...inning,
          score: {
            ...inning.score,
            runs: inning.score.runs + randomValue,
            balls: inning.score.balls + 1,
          },
        };
      } else if (randomValue === 'WIDE') {
        return {
          ...inning,
          score: {
            ...inning.score,
            runs: inning.score.runs + 1,
          },
        };
      } else if (randomValue === 'OUT') {
        return {
          ...inning,
          score: {
            ...inning.score,
            wickets: inning.score.wickets + 1,
            balls: inning.score.balls + 1,
          },
        };
      }
    }

    return inning;
  });

  publishMatches();
  return getMatchById({ matchId });
};
