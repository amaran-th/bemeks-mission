import { QueryKeys } from "@/data/queryKeys";
import { client } from "../api/client";
import { useQuery } from "@tanstack/react-query";
import { Information, WorkPermitRowData } from "@/types/dto/common.dto";
import { WorkPermitFilterValues } from "@/pages";
import { removeEmptyField } from "../utils/utils";

export const useWorkTypes = (
  language: number,
  options?: { enabled: boolean }
) =>
  useQuery({
    ...options,
    queryKey: QueryKeys.WORK_TYPES(language),
    queryFn: async (): Promise<Information[]> => {
      const response = await client.get(`/WorkPermit/work-type`, {
        params: { language },
      });
      return response.data;
    },
  });

export const useWorkDetailTypes = (
  language: number,
  options?: { enabled: boolean }
) =>
  useQuery({
    ...options,
    queryKey: QueryKeys.WORK_DETAIL_TYPES(language),
    queryFn: async (): Promise<Information[]> => {
      const response = await client.get(`/WorkPermit/work-detail-type`, {
        params: { language },
      });
      return response.data;
    },
  });

export const useAllTeams = (language: number, options?: { enabled: boolean }) =>
  useQuery({
    ...options,
    queryKey: QueryKeys.ALL_TEAMS(language),
    queryFn: async (): Promise<Information[]> => {
      const response = await client.get(`/WorkPermit/work-team`, {
        params: { language, is_product: false },
      });
      return response.data;
    },
  });

export const useTeams = (language: number, options?: { enabled: boolean }) =>
  useQuery({
    ...options,
    queryKey: QueryKeys.TEAMS(language),
    queryFn: async (): Promise<Information[]> => {
      const response = await client.get(`/WorkPermit/supervision-team`, {
        params: { language, is_product: false },
      });
      return response.data;
    },
  });

export const useTeamSections = (
  language: number,
  team_id: number,
  options?: { enabled: boolean }
) =>
  useQuery({
    ...options,
    queryKey: QueryKeys.TEAM_SECIONS(language, team_id),
    queryFn: async (): Promise<Information[]> => {
      const response = await client.get(`/WorkPermit/section-team`, {
        params: { language, team_id },
      });
      return response.data;
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
    queryFn: async (): Promise<WorkPermitRowData> => {
      const response = await client.get(`/WorkPermit/v2`, {
        params: {
          ...removeEmptyField({
            language,
            page_number: values.page_number,
            page_size: values.page_size,
            actual_start_date: values.actual_start_date,
            actual_end_date: values.actual_end_date,
            work_type: values.work_type.id,
            work_detail_type: values.work_detail_type.id,
            work_title: values.work_title,
            work_team: values.work_team.id,
            work_div: values.work_div.id,
            inspection_team: values.inspection_team.id,
            inspection_div: values.inspection_div.id,
            approval_team: values.approval_team.id,
            approval_div: values.approval_section.id,
            work_order_number: values.work_order_number,
            work_equipment: values.work_equipment,
            work_before: values.work_before,
            work_in_progress: values.work_in_progress,
            work_completed: values.work_completed,
          }),
        },
      });
      return response.data;
    },
  });
