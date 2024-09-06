import { QueryKeys } from "@/data/queryKeys";
import { client } from "../api/client";
import { useQuery } from "@tanstack/react-query";
import {
  InformationData,
  WorkPermitRow,
  WorkPermitRowData,
} from "@/types/dto/common.dto";
import {
  mockAllTeams,
  mockTeams,
  mockWorkPermitData,
  sections,
  tableColumns,
  workDetailKinds,
  workKinds,
} from "@/data/workPermit";
import { WorkPermitFilterValues } from "@/pages";
import { removeEmptyField } from "../utils/utils";

export const useWorkTypes = (
  language: number,
  options?: { enabled: boolean }
) =>
  useQuery({
    ...options,
    queryKey: QueryKeys.WORK_TYPES(language),
    queryFn: async (): Promise<InformationData> => {
      // const response = await client.get(`/Filter//work-kinds`, {
      //   params: { language },
      // });
      // return response.data;
      console.log("workTypes");
      return workKinds;
    },
  });

export const useWorkDetailTypes = (
  language: number,
  options?: { enabled: boolean }
) =>
  useQuery({
    ...options,
    queryKey: QueryKeys.WORK_DETAIL_TYPES(language),
    queryFn: async (): Promise<InformationData> => {
      // const response = await client.get(`/Filter/work-detail-kinds`, {
      //   params: { language },
      // });
      // return response.data;
      console.log("workDetailTypes");
      return workDetailKinds;
    },
  });

export const useAllTeams = (language: number, options?: { enabled: boolean }) =>
  useQuery({
    ...options,
    queryKey: QueryKeys.ALL_TEAMS(language),
    queryFn: async (): Promise<InformationData> => {
      // const response = await client.get(`/Filter/teams/all`, {
      //   params: { language, isProduct: false },
      // });
      // return response.data;
      console.log("loadAllTeams");
      return mockAllTeams;
    },
  });

export const useTeams = (language: number, options?: { enabled: boolean }) =>
  useQuery({
    ...options,
    queryKey: QueryKeys.TEAMS(language),
    queryFn: async (): Promise<InformationData> => {
      // const response = await client.get(`/Filter/teams`, {
      //   params: { language, isProduct: false },
      // });
      // return response.data;
      console.log("loadTeams");
      return mockTeams;
    },
  });

export const useTeamSections = (
  language: number,
  teamId: number,
  options?: { enabled: boolean }
) =>
  useQuery({
    ...options,
    queryKey: QueryKeys.TEAM_SECIONS(language, teamId),
    queryFn: async (): Promise<InformationData> => {
      // const response = await client.get(`/Filter/sections`, {
      //   params: { language, teamId },
      // });
      // return response.data;
      console.log("loadSections");
      return {
        ...sections,
        payload: [
          sections.payload[0],
          ...sections.payload
            .slice(1)
            .sort(() => 0.5 - Math.random())
            .slice(0, 2),
        ],
      };
    },
  });

export const useWorkPermits = (
  language: number,
  values: WorkPermitFilterValues,
  options?: { enabled: boolean }
) =>
  useQuery({
    ...options,
    queryKey: QueryKeys.WORK_PERMITS(language, values),
    queryFn: async (): Promise<WorkPermitRow[]> => {
      const response = await client.get(`/WorkPermit`, {
        params: {
          ...removeEmptyField({
            language,
            ...values,
          }),
        },
      });
      return response.data;
    },
  });
