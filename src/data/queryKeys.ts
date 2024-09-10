import { WorkPermitFilterValues } from "@/pages";

export const QueryKeys = {
  WORK_TYPES: (language: number) => ["workKinds", language], // Filter/work-kinds
  WORK_DETAIL_TYPES: (language: number) => ["workDetailKinds", language], // Filter/work-detail-kinds
  ALL_TEAMS: (language: number) => ["executionTeams", language], // Filter/teams/all
  TEAMS: (language: number) => ["superVisionTeams", language], // Filter/teams
  TEAM_SECIONS: (language: number, teamId: number) => [
    "superVisionSections",
    language,
    teamId,
  ], // Filter/sections?teamId
  WORK_PERMITS: (language: number, values: WorkPermitFilterValues) => [
    "superVisionTeams",
    language,
    values,
  ], // WorkPermit/list
};
