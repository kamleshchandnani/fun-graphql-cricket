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

export const getMatches = () => {
  const matches = Object.values(state.match);
  const teams = Object.values(state.team);
  return matches.map((match) => ({
    ...match,
    teams: match.teamIds.map(
      (teamId) => teams.find((team) => team.id === teamId),
    ),
    innings: match.innings.map((inning) => ({
      battingTeam: teams.find((team) => team.id === inning.battingTeamId),
      bowlingTeam: teams.find((team) => team.id === inning.bowlingTeamId),
      score: inning.score,
    })),
  }));
};

export const getMatchById = ({ matchId }) => {
  const match = Object.values(state.match).find((matchObj) => matchObj.id === matchId);
  const teams = Object.values(state.team);
  return {
    ...match,
    teams: match.teamIds.map(
      (teamId) => teams.find((team) => team.id === teamId),
    ),
    innings: match.innings.map((inning) => ({
      battingTeam: teams.find((team) => team.id === inning.battingTeamId),
      bowlingTeam: teams.find((team) => team.id === inning.bowlingTeamId),
      score: inning.score,
    })),
  };
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

export const updateScore = () => {};
