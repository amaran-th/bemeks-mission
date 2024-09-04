"use client";

import PageTitle from "@/components/Typography/PageTitle";
import DatePicker from "./components/DatePicker";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InputLabel from "@/components/Typography/InputLabel";
import { useRef, useState } from "react";

interface WorkPermitColumn {
  id: number;
  name: string;
  minWidth: string;
}

const tableColumns: WorkPermitColumn[] = [
  { id: 1, name: "문서 번호", minWidth: "120px" },
  { id: 2, name: "작업 종류", minWidth: "120px" },
  { id: 3, name: "작업 상세 분류", minWidth: "120px" },
  { id: 4, name: "상태", minWidth: "200px" },
  { id: 5, name: "작업명", minWidth: "280px" },
  { id: 6, name: "작업 수행 주체", minWidth: "120px" },
  { id: 7, name: "작업수행팀", minWidth: "120px" },
  { id: 8, name: "수행 계", minWidth: "120px" },
  { id: 9, name: "공사감독팀", minWidth: "120px" },
  { id: 10, name: "감독 계", minWidth: "120px" },
  { id: 11, name: "작업승인팀", minWidth: "120px" },
  { id: 12, name: "승인 Section", minWidth: "120px" },
  { id: 13, name: "작업 계획 기간", minWidth: "280px" },
  { id: 14, name: "작업 허가 기간", minWidth: "280px" },
  { id: 15, name: "실제 작업 기간", minWidth: "280px" },
  { id: 16, name: "작업 종류별 작업난이도", minWidth: "120px" },
  { id: 17, name: "작업환경 위험도", minWidth: "120px" },
  { id: 18, name: "Criticality", minWidth: "200px" },
  { id: 19, name: "유해/위험 종류", minWidth: "200px" },
  { id: 20, name: "비계 설치/사용/해체 작업", minWidth: "120px" },
  { id: 21, name: "유해화학물질 취급 작업", minWidth: "120px" },
  {
    id: 22,
    name: "분리격리(Blind 체결/Spool 제거) 후 본 작업",
    minWidth: "120px",
  },
  { id: 23, name: "Interlock Bypass 필요 작업", minWidth: "120px" },
  { id: 24, name: "작업허가서 문서 번호", minWidth: "200px" },
  { id: 25, name: "작업자 수", minWidth: "120px" },
  { id: 26, name: "작업 시간", minWidth: "120px" },
  { id: 27, name: "총 공수", minWidth: "120px" },
  { id: 28, name: "W/O Number", minWidth: "120px" },
  { id: 29, name: "PM 종류", minWidth: "120px" },
  { id: 30, name: "RTS Number", minWidth: "120px" },
  { id: 31, name: "장치명", minWidth: "120px" },
  { id: 32, name: "전체작업 진행현황", minWidth: "120px" },
];
const datas = []; // Empty data to trigger "No rows"

export default function Home() {
  const scrollContainerRef = useRef(null);
  const [selectedColumns, setSelectedColumns] =
    useState<WorkPermitColumn[]>(tableColumns);
  const [openColumnFilterModal, setOpenColumnFilterModal] =
    useState<boolean>(false);
  return (
    <main className="p-[30px] flex flex-col gap-6">
      <PageTitle title={"허가서 조회"} />
      <div className="flex flex-col gap-4 border bg-white border-border rounded-md p-6">
        <div className="flex gap-x-2 gap-y-4 flex-wrap">
          <DatePicker />
          <div>
            <InputLabel label="작업 종류" />
            <Select name="" value={-1} onChange={() => console.log("aaa")}>
              <MenuItem value={-1}>전체</MenuItem>
            </Select>
          </div>
          <div>
            <InputLabel label="작업 상세 분류" />
            <Select name="" value={-1} onChange={() => console.log("aaa")}>
              <MenuItem value={-1}>전체</MenuItem>
            </Select>
          </div>
          <div>
            <InputLabel label="작업명" />
            <TextField />
          </div>
          <div>
            <InputLabel label="작업수행팀" />
            <Select name="" value={-1} onChange={() => console.log("aaa")}>
              <MenuItem value={-1}>전체</MenuItem>
            </Select>
          </div>
          <div>
            <InputLabel label="수행 계" />
            <Select name="" value={-1} onChange={() => console.log("aaa")}>
              <MenuItem value={-1}>전체</MenuItem>
            </Select>
          </div>
          <div>
            <InputLabel label="공사감독팀" />
            <Select name="" value={-1} onChange={() => console.log("aaa")}>
              <MenuItem value={-1}>전체</MenuItem>
            </Select>
          </div>
          <div>
            <InputLabel label="감독 계" />
            <Select name="" value={-1} onChange={() => console.log("aaa")}>
              <MenuItem value={-1}>전체</MenuItem>
            </Select>
          </div>
          <div>
            <InputLabel label="작업승인팀" />
            <Select name="" value={-1} onChange={() => console.log("aaa")}>
              <MenuItem value={-1}>전체</MenuItem>
            </Select>
          </div>
          <div>
            <InputLabel label="승인 Section" />
            <Select name="" value={-1} onChange={() => console.log("aaa")}>
              <MenuItem value={-1}>전체</MenuItem>
            </Select>
          </div>

          <div>
            <InputLabel label="W/O Number" />
            <TextField />
          </div>

          <div>
            <InputLabel label="장치명" />
            <TextField />
          </div>
        </div>
        <div className="flex gap-4">
          <FormControlLabel control={<Checkbox />} label="작업 전" />
          <FormControlLabel control={<Checkbox />} label="작업 진행 중" />
          <FormControlLabel control={<Checkbox />} label="작업 완료/취소" />
        </div>
        <div className="h-[600px] flex flex-col rounded-md border-border border relative">
          <div className="overflow-scroll flex-grow w-full">
            <table className="border-collapse w-full text-sm">
              <thead className="bg-background border-b h-[56px] border-border">
                <tr>
                  {selectedColumns.map((column) => (
                    <th key={column.id} style={{ minWidth: column.minWidth }}>
                      {column.name}
                    </th>
                  ))}
                  <th style={{ minWidth: "200px" }}></th>
                </tr>
              </thead>
              <tbody>
                {datas.length > 0 ? (
                  datas.map((data) => (
                    <tr key={data.name}>
                      <td>{data.name}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={tableColumns.length} className="p-0"></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {datas.length === 0 && (
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <p className="text-comment">No rows</p>
            </div>
          )}
          <div className="h-[52px] px-2 flex justify-between items-center">
            <div className="text-primary flex gap-4">
              <Button
                variant="text"
                startIcon={<ViewWeekIcon />}
                className="flex items-center gap-1"
              >
                Columns
              </Button>
              <Button startIcon={<DownloadIcon />} variant="text">
                Export
              </Button>
            </div>
            <div className="flex items-center">
              <p>Rows per page:</p>
              <Select
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  width: "4em !important",
                }}
                value={10}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
                <MenuItem value={500}>500</MenuItem>
              </Select>
              <p>0-0 of 0</p>
              <div className="flex ml-5">
                <IconButton disabled>
                  <ArrowBackIosIcon className="w-4 h-4" />
                </IconButton>
                <IconButton>
                  <ArrowForwardIosIcon className="w-4 h-4" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
