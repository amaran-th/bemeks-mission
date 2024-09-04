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
import { mockWorkPermitData, tableColumns } from "@/data/workPermit";
import { DataGrid } from "@mui/x-data-grid";

const datas = []; // Empty data to trigger "No rows"

export default function Home() {
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
          <DataGrid
            rows={mockWorkPermitData.payload.list}
            columns={tableColumns}
            getRowId={(row) => row.transId}
          />
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
              <p>0-0 of </p>
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
