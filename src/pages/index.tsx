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
import { DataGrid } from "@mui/x-data-grid";
import {
  mockWorkPermitData,
  tableColumns,
  workDetailKinds,
  workKinds,
} from "@/data/workPermit";
import CustomFooter from "./components/CustomDataGrid/CustomFooter";
import CustomColumnMenu from "./components/CustomDataGrid/CustomColumnMenu";
import { useFormik } from "formik";
import dayjs from "dayjs";
import TeamSectionSelector from "./components/TeamSectionSelector";
import { useEffect } from "react";

export class WorkPermitFilterValues {
  startDate: string;
  endDate: string;
  workKind: number;
  workDetailKind: number;
  title: string;
  page: number;
  pageSize: number;
  workExecutionTeam: number;
  workExecutionSection: number;
  superVisionTeam: number;
  superVisionSection: number;
  workApprovalTeam: number;
  workApprovalSection: number;
  woNumber: string;
  equipment: string;
  isBeforeWork: boolean;
  isWorking: boolean;
  isAfterWork: boolean;

  constructor(
    startDate: string,
    endDate: string,
    workKind: number,
    workDetailKind: number,
    title: string,
    workExecutionTeam: number,
    workExecutionSection: number,
    superVisionTeam: number,
    superVisionSection: number,
    workApprovalTeam: number,
    workApprovalSection: number,
    woNumber: string,
    equipment: string,
    isBeforeWork: boolean,
    isWorking: boolean,
    isAfterWork: boolean,
    page: number,
    pageSize: number
  ) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.workKind = workKind;
    this.workDetailKind = workDetailKind;
    this.title = title;
    this.workExecutionTeam = workExecutionTeam;
    this.workExecutionSection = workExecutionSection;
    this.superVisionTeam = superVisionTeam;
    this.superVisionSection = superVisionSection;
    this.workApprovalTeam = workApprovalTeam;
    this.workApprovalSection = workApprovalSection;
    this.woNumber = woNumber;
    this.equipment = equipment;
    this.isBeforeWork = isBeforeWork;
    this.isWorking = isWorking;
    this.isAfterWork = isAfterWork;
    this.page = page;
    this.pageSize = pageSize;
  }
}

export default function Home() {
  const { values, handleChange, setFieldValue } = useFormik({
    onSubmit: () => {},
    initialValues: new WorkPermitFilterValues(
      dayjs(new Date()).format("YYYY-MM-DD"),
      dayjs(new Date()).format("YYYY-MM-DD"),
      0,
      0,
      "",
      0,
      0,
      0,
      0,
      0,
      0,
      "",
      "",
      true,
      true,
      true,
      0,
      10
    ),
  });
  useEffect(() => {
    console.log("aaaa");
  }, [values]);

  return (
    <main className="p-[30px] flex flex-col gap-6">
      <PageTitle title={"허가서 조회"} />
      <form
        className="flex flex-col gap-4 border bg-white border-border rounded-md p-6"
        onSubmit={handleChange}
      >
        <div className="flex gap-x-2 gap-y-4 flex-wrap">
          <DatePicker
            startDate={values.startDate}
            endDate={values.endDate}
            startDateName="startDate"
            endDateName="endDate"
            setFieldValue={setFieldValue}
          />
          <div>
            <InputLabel label="작업 종류" />
            <Select
              name="workKind"
              value={values.workKind}
              onChange={handleChange}
            >
              {workKinds.payload.map((work) => (
                <MenuItem value={work.id} key={work.id}>
                  {work.content}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <InputLabel label="작업 상세 분류" />
            <Select
              name="workDetailKind"
              value={values.workDetailKind}
              onChange={handleChange}
            >
              {workDetailKinds.payload.map((workDetail) => (
                <MenuItem value={workDetail.id} key={workDetail.id}>
                  {workDetail.content}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <InputLabel label="작업명" />
            <TextField name="title" onChange={handleChange} />
          </div>
          <TeamSectionSelector
            teamLabel="작업수행팀"
            teamName="workExecutionTeam"
            teamValue={values.workExecutionTeam}
            sectionLabel="수행 계"
            sectionName="workExecutionSection"
            sectionValue={values.workExecutionSection}
            handleChange={handleChange}
            allTeam
          />
          <TeamSectionSelector
            teamLabel="공사감독팀"
            teamName="superVisionTeam"
            teamValue={values.superVisionTeam}
            sectionLabel="감독 계"
            sectionName="superVisionSection"
            sectionValue={values.superVisionSection}
            handleChange={handleChange}
          />
          <TeamSectionSelector
            teamLabel="작업승인팀"
            teamName="workApprovalTeam"
            teamValue={values.workApprovalTeam}
            sectionLabel="승인 Section"
            sectionName="workApprovalSection"
            sectionValue={values.workApprovalSection}
            handleChange={handleChange}
          />
          <div>
            <InputLabel label="W/O Number" />
            <TextField name="woNumber" onChange={handleChange} />
          </div>

          <div>
            <InputLabel label="장치명" />
            <TextField name="equipment" onChange={handleChange} />
          </div>
        </div>
        <div className="flex gap-4">
          <FormControlLabel
            control={
              <Checkbox
                name="isBeforeWork"
                checked={values.isBeforeWork}
                value={values.isBeforeWork}
                onChange={handleChange}
              />
            }
            label="작업 전"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="isWorking"
                checked={values.isWorking}
                value={values.isWorking}
                onChange={handleChange}
              />
            }
            label="작업 진행 중"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="isAfterWork"
                checked={values.isAfterWork}
                value={values.isAfterWork}
                onChange={handleChange}
              />
            }
            label="작업 완료/취소"
          />
        </div>
        <div className="h-[600px] flex flex-col rounded-md border-border border relative">
          <DataGrid
            rows={mockWorkPermitData.payload.list}
            columns={tableColumns}
            getRowId={(row) => row.transId}
            hideFooterSelectedRowCount={true}
            disableColumnFilter={true}
            slots={{
              columnMenu: CustomColumnMenu,
              footer: () =>
                CustomFooter({
                  pageNumber: values.page,
                  pageSize: values.pageSize,
                  setPageNumber: (value) => setFieldValue("page", value),
                  setPageSize: (value) => setFieldValue("pageSize", value),
                }),
            }}
            pageSizeOptions={[10, 25, 50, 100, 500]}
          />
        </div>
      </form>
    </main>
  );
}
