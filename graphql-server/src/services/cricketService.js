const state = {
  team: {},
  match: {},
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

export const getMatches = () => Object.values(state.match);

export const getMatchById = (matchId) =>
  Object.values(state.match).find((match) => match.id === matchId);

export const createMatches = ({ matches }) => {
  matches.forEach((match, index) => {
    const matchId = Object.values(state.match).length + index + 1;
    state.match[matchId] = {
      ...match,
      innings: [],
      id: `${matchId}`,
    };
  });

  return true;
};

export const createInning = ({ matchId, battingTeamId }) => {
  state.match[matchId].innings = [
    ...state.match[matchId].innings,
    {
      battingTeamId,
      bowlingTeamId: state.match[matchId].teamIds.find((teamId) => teamId !== battingTeamId),
      score: {
        runs: 0,
        wickets: 0,
        overs: 0,
      },
    },
  ];

  return true;
};
