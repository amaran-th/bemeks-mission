import InputLabel from "@/components/Typography/InputLabel";
import { useAllTeams, useTeams, useTeamSections } from "@/lib/hooks/useApi";
import { WorkPermitFilterValues } from "@/pages";
import { currentLanguageState } from "@/store/common";
import { Information } from "@/types/dto/common.dto";
import { Autocomplete, TextField } from "@mui/material";
import { FormikErrors } from "formik";
import { useTranslation } from "next-i18next";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

interface TeamSectionSelectorProps {
  teamLabel: string;
  teamName: string;
  teamValue: Information;
  sectionLabel: string;
  sectionName: string;
  sectionValue: Information;
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
  setFieldValue,
  allTeam = false,
}: TeamSectionSelectorProps) => {
  const language = useRecoilValue(currentLanguageState);
  const { t } = useTranslation();
  const { data: allTeams } = useAllTeams(language, { enabled: allTeam });
  const { data: teams } = useTeams(language, { enabled: !allTeam });
  const { data: sections, refetch } = useTeamSections(language, teamValue.id);
  const loadedTeam: Information[] = useMemo(
    () => (allTeam ? allTeams : teams)?.payload ?? [],
    [allTeam, allTeams, teams]
  );
  const [teamInputValue, setTeamInputValue] = useState<string>("");
  const [sectionInputValue, setSectionInputValue] = useState<string>("");
  const { current: defaultOption } = useRef<Information>({
    id: 0,
    content: t("전체"),
  });
  useEffect(() => {
    setFieldValue(sectionName, defaultOption);
    refetch();
  }, [teamValue, sectionName, setFieldValue, refetch, defaultOption]);

  return (
    <>
      <div>
        <InputLabel label={teamLabel} />
        <Autocomplete
          options={loadedTeam}
          inputValue={teamInputValue}
          value={teamValue}
          onInputChange={(_, value) => setTeamInputValue(value)}
          onChange={(_, value, reason) => {
            if (reason === "clear") setFieldValue(teamName, defaultOption);
            else setFieldValue(teamName, value);
          }}
          getOptionLabel={(option: Information) => option.content}
          className="w-full lg:w-[210px]"
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
      <div>
        <InputLabel label={sectionLabel} />
        <Autocomplete
          options={sections?.payload ?? []}
          inputValue={sectionInputValue}
          value={sectionValue}
          onInputChange={(_, value) => setSectionInputValue(value)}
          onChange={(_, value, reason) => {
            if (reason === "clear") setFieldValue(sectionName, defaultOption);
            else setFieldValue(sectionName, value);
          }}
          getOptionLabel={(option: Information) => option.content}
          className="w-full lg:w-[210px]"
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </>
  );
};

export default TeamSectionSelector;
