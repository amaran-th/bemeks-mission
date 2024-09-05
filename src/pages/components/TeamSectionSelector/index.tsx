import InputLabel from "@/components/Typography/InputLabel";
import { mockAllTeams, mockTeams, sections } from "@/data/workPermit";
import { MenuItem, Select } from "@mui/material";
import { ChangeEvent } from "react";

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
  allTeam = false,
}: TeamSectionSelectorProps) => {
  const teams = allTeam ? mockAllTeams : mockTeams;
  return (
    <>
      <div>
        <InputLabel label={teamLabel} />
        <Select name={teamName} value={teamValue} onChange={handleChange}>
          {teams.payload.map((team) => (
            <MenuItem value={team.id} key={team.id}>
              {team.content}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div>
        <InputLabel label={sectionLabel} />
        <Select name={sectionName} value={sectionValue} onChange={handleChange}>
          {sections.payload.map((section) => (
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
