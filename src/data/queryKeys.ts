export const QueryKeys = {
  WORK_KINDS: (language: number) => ["workKinds", language], // Filter/work-kinds
  WORK_DETAIL_KINDS: (language: number) => ["workDetailKinds", language], // Filter/work-detail-kinds
  ALL_TEAMS: (language: number) => ["executionTeams", language], // Filter/teams/all
  TEAMS: (language: number) => ["superVisionTeams", language], // Filter/teams
  TEAM_SECIONS: (language: number, teamId: number) => [
    "superVisionSections",
    language,
    teamId,
  ], // Filter/sections?teamId
};
