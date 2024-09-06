import InputLabel from "@/components/Typography/InputLabel";
import { QueryKeys } from "@/data/queryKeys";
import { useAllTeams, useTeams, useTeamSections } from "@/lib/hooks/useApi";
import { WorkPermitFilterValues } from "@/pages";
import { Information, InformationData } from "@/types/dto/common.dto";
import { MenuItem, Select } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { FormikErrors } from "formik";
import { ChangeEvent, useEffect, useMemo } from "react";

interface TeamSectionSelectorProps {
  teamLabel: string;
  teamName: string;
  teamValue: number;
  sectionLabel: string;
  sectionName: string;
  sectionValue: number;
  handleChange: {
    (e: ChangeEvent<any>): void;
    <T_1 = string | ChangeEvent<any>>(field: T_1): T_1 extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void> | Promise<FormikErrors<WorkPermitFilterValues>>;
  allTeam?: boolean;
}

const TeamSectionSelector = ({
  teamLabel,
  teamName,
  teamValue,
  sectionLabel,
  sectionName,
  sectionValue,
  handleChange,
  setFieldValue,
  allTeam = false,
}: TeamSectionSelectorProps) => {
  const { data: allTeams } = useAllTeams(22, { enabled: allTeam });
  const { data: teams } = useTeams(22, { enabled: !allTeam });
  const { data: sections, refetch } = useTeamSections(22, teamValue);
  const loadedTeam: Information[] = useMemo(
    () => (allTeam ? allTeams : teams)?.payload ?? [],
    [allTeam, allTeams, teams]
  );
  useEffect(() => {
    setFieldValue(sectionName, 0);
    refetch();
  }, [teamValue, sectionName, setFieldValue, refetch]);

  return (
    <>
      <div>
        <InputLabel label={teamLabel} />
        <Select name={teamName} value={teamValue} onChange={handleChange}>
          {Array.isArray(loadedTeam) && // api 연결 후에 지워보기
            loadedTeam.map((team) => (
              <MenuItem value={team.id} key={team.id}>
                {team.content}
              </MenuItem>
            ))}
        </Select>
      </div>
      <div>
        <InputLabel label={sectionLabel} />
        <Select name={sectionName} value={sectionValue} onChange={handleChange}>
          {sections?.payload.map((section) => (
            <MenuItem value={section.id} key={section.id}>
              {section.content}
            </MenuItem>
          ))}
        </Select>
      </div>
    </>
  );
};

export default TeamSectionSelector;
