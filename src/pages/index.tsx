"use client";

import PageTitle from "@/components/Typography/PageTitle";
import DatePicker from "./components/DatePicker";
import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import InputLabel from "@/components/Typography/InputLabel";
import { useFormik } from "formik";
import dayjs from "dayjs";
import TeamSectionSelector from "./components/TeamSectionSelector";
import CustomDataGrid from "./components/CustomDataGrid";
import { useWorkDetailTypes, useWorkTypes } from "@/lib/hooks/useApi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRecoilValue } from "recoil";
import { currentLanguageState } from "@/store/common";

export class WorkPermitFilterValues {
  actual_start_date: string;
  actual_end_date: string;
  work_type: string;
  work_detail_type: string;
  work_title: string;
  work_team: string;
  work_div: string;
  inspection_team: string;
  inspection_div: string;
  approval_team: string;
  approval_section: string;
  work_order_number: string;
  work_equipment: string;
  work_before: boolean;
  work_in_progress: boolean;
  work_completed: boolean;
  page_number: number;
  page_size: number;

  constructor(
    actual_start_date: string,
    actual_end_date: string,
    work_type: string,
    work_detail_type: string,
    work_title: string,
    work_team: string,
    work_div: string,
    inspection_team: string,
    inspection_div: string,
    approval_team: string,
    approval_section: string,
    work_order_number: string,
    work_equipment: string,
    work_before: boolean,
    work_in_progress: boolean,
    work_completed: boolean,
    page_number: number,
    page_size: number
  ) {
    this.actual_start_date = actual_start_date;
    this.actual_end_date = actual_end_date;
    this.work_type = work_type;
    this.work_detail_type = work_detail_type;
    this.work_title = work_title;
    this.work_team = work_team;
    this.work_div = work_div;
    this.inspection_team = inspection_team;
    this.inspection_div = inspection_div;
    this.approval_team = approval_team;
    this.approval_section = approval_section;
    this.work_order_number = work_order_number;
    this.work_equipment = work_equipment;
    this.work_before = work_before;
    this.work_in_progress = work_in_progress;
    this.work_completed = work_completed;
    this.page_number = page_number;
    this.page_size = page_size;
  }
}

export const getStaticProps = async ({ locale }: { locale: "ko" | "en" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "work-permit"])),
  },
});

export default function Home() {
  const language = useRecoilValue(currentLanguageState);
  const { values, handleChange, setFieldValue } = useFormik({
    onSubmit: () => {},
    initialValues: new WorkPermitFilterValues(
      dayjs(new Date()).format("YYYY-MM-DD"),
      dayjs(new Date()).format("YYYY-MM-DD"),
      "전체",
      "전체",
      "전체",
      "전체",
      "전체",
      "전체",
      "전체",
      "전체",
      "전체",
      "",
      "",
      true,
      true,
      true,
      0,
      10
    ),
  });
  const { data: workTypes } = useWorkTypes(language);
  const { data: workDetailTypes } = useWorkDetailTypes(language);

  const { t } = useTranslation();

  return (
    <main className="p-[30px] flex flex-col gap-6">
      <PageTitle title={`${t("work-permit:허가서_조회")}${t("영어")}`} />
      <form
        className="flex flex-col gap-4 border bg-white border-border rounded-md p-6"
        onSubmit={handleChange}
      >
        <div className="flex gap-x-2 gap-y-4 flex-wrap">
          <DatePicker
            startDate={values.actual_start_date}
            endDate={values.actual_end_date}
            startDateName="actual_start_date"
            endDateName="actual_end_date"
            setFieldValue={setFieldValue}
          />
          <div>
            <InputLabel label="작업 종류" />
            <Select
              name="work_type"
              value={values.work_type}
              onChange={handleChange}
            >
              {workTypes?.payload.map((work) => (
                <MenuItem value={work.content} key={work.id}>
                  {work.content}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <InputLabel label="작업 상세 분류" />
            <Select
              name="work_detail_type"
              value={values.work_detail_type}
              onChange={handleChange}
            >
              {workDetailTypes?.payload.map((workDetail) => (
                <MenuItem value={workDetail.content} key={workDetail.id}>
                  {workDetail.content}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <InputLabel label="작업명" />
            <TextField name="work_title" onChange={handleChange} />
          </div>
          <TeamSectionSelector
            teamLabel="작업수행팀"
            teamName="work_team"
            teamValue={values.work_team}
            sectionLabel="수행 계"
            sectionName="work_div"
            sectionValue={values.work_div}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
            allTeam
          />
          <TeamSectionSelector
            teamLabel="공사감독팀"
            teamName="inspection_team"
            teamValue={values.inspection_team}
            sectionLabel="감독 계"
            sectionName="inspection_div"
            sectionValue={values.inspection_div}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
          />
          <TeamSectionSelector
            teamLabel="작업승인팀"
            teamName="approval_team"
            teamValue={values.approval_team}
            sectionLabel="승인 Section"
            sectionName="approval_section"
            sectionValue={values.approval_section}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
          />
          <div>
            <InputLabel label="W/O Number" />
            <TextField name="work_order_number" onChange={handleChange} />
          </div>

          <div>
            <InputLabel label="장치명" />
            <TextField name="work_equipment" onChange={handleChange} />
          </div>
        </div>
        <div className="flex gap-4">
          <FormControlLabel
            control={
              <Checkbox
                name="work_before"
                checked={values.work_before}
                value={values.work_before}
                onChange={handleChange}
              />
            }
            label="작업 전"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="work_in_progress"
                checked={values.work_in_progress}
                value={values.work_in_progress}
                onChange={handleChange}
              />
            }
            label="작업 진행 중"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="work_completed"
                checked={values.work_completed}
                value={values.work_completed}
                onChange={handleChange}
              />
            }
            label="작업 완료/취소"
          />
        </div>
        <CustomDataGrid
          key={JSON.stringify(values)}
          values={values}
          setFieldValue={setFieldValue}
        />
      </form>
    </main>
  );
}
