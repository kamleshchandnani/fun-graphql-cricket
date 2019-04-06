const state = {
  team: {},
  match: {},
};

export const getTeams = () => Object.values(state.team);

export const createTeams = (teams) => {
  teams.forEach((team, index) => {
    const teamId = Object.values(state.team).length + index + 1;
    state.team[teamId] = {
      ...team,
      id: teamId,
    };
  });
};

export const getMatches = () => Object.values(state.match);

export const createMatches = (matches) => {
  matches.forEach((match, index) => {
    const matchId = Object.values(state.match).length + index + 1;
    state.match[matchId] = {
      ...match,
      id: matchId,
    };
  });
};

export const createInning = (matchId, battingTeamId) => {
  state.match[matchId].innings = [
    ...state.match[matchId].innings,
    {
      battingTeamId,
      bowlingTeamId: state.match[matchId].teams.find((teamId) => teamId !== battingTeamId),
      score: {
        runs: 0,
        wickets: 0,
        balls: 0,
      },
    },
  ];
};
