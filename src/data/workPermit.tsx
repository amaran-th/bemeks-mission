import { formatPeriod } from "@/lib/utils/time";
import { Button, Chip, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

export const tableColumns: GridColDef[] = [
  { field: "trans_id", headerName: "문서 번호", width: 120 },
  {
    field: "work_type",
    headerName: "작업 종류",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "work_detail_type",
    headerName: "작업 상세 분류",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "status",
    headerName: "상태",
    width: 200,
    renderCell: ({ value }) => <Chip label={value} />,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "work_title",
    headerName: "작업명",
    width: 280,
    renderCell: ({ value, row }) => (
      <Link
        href={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_SYNERGI_NONSSO_PATH}/case/${row.trans_id}`}
        target="_blank"
        className="font-bold"
        style={{ color: "#007b3d" }}
      >
        {value}
      </Link>
    ),
    headerAlign: "center",
    align: "center",
  },
  {
    field: "work_exec",
    headerName: "작업 수행 주체",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "work_team",
    headerName: "작업수행팀",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "work_div",
    headerName: "수행 계",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "inspection_team",
    headerName: "공사감독팀",
    width: 120,
    valueGetter: (_, row) => row.inspection_team.join(", ") || "",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "inspection_div",
    headerName: "감독 계",
    width: 120,
    valueGetter: (_, row) => row.inspection_div.join(", ") || "",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "approval_team",
    headerName: "작업승인팀",
    minWidth: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "approval_section",
    headerName: "승인 Section",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "plan_period",
    headerName: "작업 계획 기간",
    width: 280,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "permit_period",
    headerName: "작업 허가 기간",
    width: 280,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "actual_period",
    headerName: "실제 작업 기간",
    width: 280,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "work_difficulty",
    headerName: "작업 종류별 작업난이도",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "env_risk",
    headerName: "작업환경 위험도",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "criticality",
    headerName: "Criticality",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "hazard_type",
    headerName: "유해/위험 종류",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "scaffold_work",
    headerName: "비계 설치/사용/해체 작업",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "chemical_work",
    headerName: "유해화학물질 취급 작업",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "isolation_work",
    headerName: "분리격리(Blind 체결/Spool 제거) 후 본 작업",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "interlock_bypass",
    headerName: "Interlock Bypass 필요 작업",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "permit_doc_number",
    headerName: "작업허가서 문서 번호",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "num_worker",
    headerName: "작업자 수",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "work_hours",
    headerName: "작업 시간",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "total_man_hours",
    headerName: "총 공수",
    width: 120,
    valueGetter: (_, row) => row.total_man_hours.toFixed(2) || "",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "work_order_number",
    headerName: "W/O Number",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "pm_type",
    headerName: "PM 종류",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "rts_number",
    headerName: "RTS Number",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "work_equipment",
    headerName: "장치명",
    width: 120,
    valueGetter: (_, row) => row.work_equipment.join(", ") || "",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "work_progress",
    headerName: "전체작업 진행현황",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "info",
    headerName: "",
    width: 200,
    align: "center",
    headerClassName: "bg-background",
    renderCell: ({ row }) => (
      <div
        className="flex items-center justify-between text-primary"
        style={{ height: "100%" }}
      >
        <Button variant="contained" disabled={row.work_progress !== "미완료"}>
          전체 작업 완료
        </Button>
        <IconButton>
          <DescriptionIcon style={{ color: "#007b3d" }} />
        </IconButton>
        <IconButton
          href={`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_SYNERGI_NONSSO_PATH}/case/${row.transId}`}
          target="_blank"
        >
          <SearchIcon style={{ color: "#007b3d" }} />
        </IconButton>
      </div>
    ),
    hideSortIcons: true,
  },
];

export const mockWorkPermitData = {
  payload: {
    totalCount: 947,
    list: [
      {
        status: {
          id: 50002,
          content: "작성중",
        },
        totalWorkStatus: "",
        trans: 301126,
        transId: 1,
        title: "test",
        soilWorkNo: "",
        workExecuter: "정비팀",
        workPlanDetailKinds: "",
        workKind: {
          id: 10039,
          content: "화기",
        },
        workKinds: "화기",
        workDetailKind: {
          id: 4,
          content: "일반 화기",
        },
        workApprovalTeam: {
          id: 0,
          content: "",
        },
        workApprovalSection: {
          id: 0,
          content: "",
        },
        workExecutionTeam: {
          id: 241,
          content: "제품운영팀",
        },
        workExecutionSection: {
          id: 241,
          content: "제품운영팀",
        },
        periodStart: "2024-09-03T08:30:00",
        periodEnd: "2024-09-03T17:30:00",
        startDate: null,
        endDate: null,
        planStartDate: null,
        planEndDate: null,
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "PM02:일상정비",
        workerCount: 0,
        unit: {
          id: 0,
          content: "",
        },
        equipment: "D-1105, B-1901A, D-2105, E-1110B",
        woNumber: "123",
        workTime: 8,
        workRisk: "",
        workCriticality: "",
        workDifficulty: "2등급",
        riskKind: "",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 0,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50002,
          content: "작성중",
        },
        totalWorkStatus: "",
        trans: 301120,
        transId: 2,
        title: "하이",
        soilWorkNo: "",
        workExecuter: "",
        workPlanDetailKinds: "",
        workKind: {
          id: 10039,
          content: "화기",
        },
        workKinds: "화기",
        workDetailKind: {
          id: 0,
          content: "",
        },
        workApprovalTeam: {
          id: 0,
          content: "",
        },
        workApprovalSection: {
          id: 0,
          content: "",
        },
        workExecutionTeam: {
          id: 241,
          content: "제품운영팀",
        },
        workExecutionSection: {
          id: 241,
          content: "제품운영팀",
        },
        periodStart: "2024-09-03T08:30:00",
        periodEnd: "2024-09-03T17:30:00",
        startDate: null,
        endDate: null,
        planStartDate: null,
        planEndDate: null,
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "",
        workerCount: 0,
        unit: {
          id: 0,
          content: "",
        },
        equipment: "",
        woNumber: "",
        workTime: 8,
        workRisk: "",
        workCriticality: "",
        workDifficulty: "1등급",
        riskKind: "",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 0,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50011,
          content: "작업중",
        },
        totalWorkStatus: "",
        trans: 301000,
        transId: 3,
        title: "test",
        soilWorkNo: "허가-#2 PX-24-08-0003",
        workExecuter: "정비팀",
        workPlanDetailKinds: "",
        workKind: {
          id: 10040,
          content: "일반",
        },
        workKinds: "일반",
        workDetailKind: {
          id: 0,
          content: "",
        },
        workApprovalTeam: {
          id: 40,
          content: "PX2팀",
        },
        workApprovalSection: {
          id: 329,
          content: "#2 PX",
        },
        workExecutionTeam: {
          id: 40,
          content: "PX2팀",
        },
        workExecutionSection: {
          id: 329,
          content: "#2 PX",
        },
        periodStart: "2024-08-28T14:24:01",
        periodEnd: "2024-08-28T17:30:00",
        startDate: "2024-08-28T14:24:55",
        endDate: "2024-08-28T17:30:00",
        planStartDate: "2024-08-28T08:30:00",
        planEndDate: "2024-08-28T17:30:00",
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "",
        workerCount: 1,
        unit: {
          id: 541,
          content: "U-43000 [Hot Oil]",
        },
        equipment: "",
        woNumber: "",
        workTime: 3.08,
        workRisk: "3등급",
        workCriticality: "Medium(주간과장 서명)",
        workDifficulty: "1등급",
        riskKind: "유해물질흡입",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 3.08,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50002,
          content: "작성중",
        },
        totalWorkStatus: "",
        trans: 300993,
        transId: 4,
        title: "test",
        soilWorkNo: "",
        workExecuter: "정비팀",
        workPlanDetailKinds: "",
        workKind: {
          id: 10040,
          content: "일반",
        },
        workKinds: "일반",
        workDetailKind: {
          id: 0,
          content: "",
        },
        workApprovalTeam: {
          id: 40,
          content: "PX2팀",
        },
        workApprovalSection: {
          id: 329,
          content: "#2 PX",
        },
        workExecutionTeam: {
          id: 40,
          content: "PX2팀",
        },
        workExecutionSection: {
          id: 329,
          content: "#2 PX",
        },
        periodStart: "2024-08-30T08:30:00",
        periodEnd: "2024-08-30T17:30:00",
        startDate: null,
        endDate: null,
        planStartDate: "2024-08-30T08:30:00",
        planEndDate: "2024-08-30T17:30:00",
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "",
        workerCount: 1,
        unit: {
          id: 541,
          content: "U-43000 [Hot Oil]",
        },
        equipment: "",
        woNumber: "",
        workTime: 8,
        workRisk: "",
        workCriticality: "",
        workDifficulty: "1등급",
        riskKind: "유해물질흡입",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 8,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50002,
          content: "작성중",
        },
        totalWorkStatus: "",
        trans: 300882,
        transId: 5,
        title: "tes",
        soilWorkNo: "",
        workExecuter: "정비팀",
        workPlanDetailKinds: "",
        workKind: {
          id: 10040,
          content: "일반",
        },
        workKinds: "일반",
        workDetailKind: {
          id: 0,
          content: "",
        },
        workApprovalTeam: {
          id: 38,
          content: "PX1팀",
        },
        workApprovalSection: {
          id: 327,
          content: "#1 PX",
        },
        workExecutionTeam: {
          id: 28,
          content: "Alkylation1팀",
        },
        workExecutionSection: {
          id: 315,
          content: "#3 HMP",
        },
        periodStart: "2024-08-27T08:30:00",
        periodEnd: "2024-08-27T17:30:00",
        startDate: null,
        endDate: null,
        planStartDate: "2024-08-27T08:30:00",
        planEndDate: "2024-08-27T17:30:00",
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "",
        workerCount: 1,
        unit: {
          id: 8163,
          content: "U-40000[Hot Oil Section]",
        },
        equipment: "",
        woNumber: "",
        workTime: 8,
        workRisk: "",
        workCriticality: "",
        workDifficulty: "1등급",
        riskKind: "협착",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 8,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50002,
          content: "작성중",
        },
        totalWorkStatus: "",
        trans: 300856,
        transId: 6,
        title: "복수 작업 진행",
        soilWorkNo: "허가-#2 PX-24-08-0002",
        workExecuter: "정비팀",
        workPlanDetailKinds: "",
        workKind: {
          id: 10045,
          content: "도로점유",
        },
        workKinds: "도로점유",
        workDetailKind: {
          id: 0,
          content: "",
        },
        workApprovalTeam: {
          id: 40,
          content: "PX2팀",
        },
        workApprovalSection: {
          id: 329,
          content: "#2 PX",
        },
        workExecutionTeam: {
          id: 40,
          content: "PX2팀",
        },
        workExecutionSection: {
          id: 329,
          content: "#2 PX",
        },
        periodStart: "2024-08-22T08:30:00",
        periodEnd: "2024-08-22T17:30:00",
        startDate: null,
        endDate: null,
        planStartDate: "2024-08-22T08:30:00",
        planEndDate: "2024-08-22T17:30:00",
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "",
        workerCount: 1,
        unit: {
          id: 549,
          content: "U-48500 [XyMax]",
        },
        equipment: "",
        woNumber: "",
        workTime: 8,
        workRisk: "",
        workCriticality: "",
        workDifficulty: "1등급",
        riskKind: "낙하, 화재/폭발",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 8,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50002,
          content: "작성중",
        },
        totalWorkStatus: "",
        trans: 300852,
        transId: 7,
        title: "복수 작업 진행",
        soilWorkNo: "허가-#2 PX-24-08-0002",
        workExecuter: "정비팀",
        workPlanDetailKinds: "",
        workKind: {
          id: 10043,
          content: "밀폐공간",
        },
        workKinds: "밀폐공간",
        workDetailKind: {
          id: 239,
          content: "일반 작업",
        },
        workApprovalTeam: {
          id: 40,
          content: "PX2팀",
        },
        workApprovalSection: {
          id: 329,
          content: "#2 PX",
        },
        workExecutionTeam: {
          id: 40,
          content: "PX2팀",
        },
        workExecutionSection: {
          id: 329,
          content: "#2 PX",
        },
        periodStart: "2024-08-22T08:30:00",
        periodEnd: "2024-08-22T17:30:00",
        startDate: null,
        endDate: null,
        planStartDate: "2024-08-22T08:30:00",
        planEndDate: "2024-08-22T17:30:00",
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "",
        workerCount: 1,
        unit: {
          id: 549,
          content: "U-48500 [XyMax]",
        },
        equipment: "",
        woNumber: "",
        workTime: 8,
        workRisk: "",
        workCriticality: "",
        workDifficulty: "2등급",
        riskKind: "낙하, 화재/폭발",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 8,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50011,
          content: "작업중",
        },
        totalWorkStatus: "",
        trans: 300848,
        transId: 8,
        title: "복수 작업 진행",
        soilWorkNo: "허가-#2 PX-24-08-0002",
        workExecuter: "정비팀",
        workPlanDetailKinds: "",
        workKind: {
          id: 10039,
          content: "화기",
        },
        workKinds: "화기",
        workDetailKind: {
          id: 5,
          content: "특별 화기",
        },
        workApprovalTeam: {
          id: 40,
          content: "PX2팀",
        },
        workApprovalSection: {
          id: 329,
          content: "#2 PX",
        },
        workExecutionTeam: {
          id: 40,
          content: "PX2팀",
        },
        workExecutionSection: {
          id: 329,
          content: "#2 PX",
        },
        periodStart: "2024-08-22T13:55:58",
        periodEnd: "2024-08-22T17:30:00",
        startDate: "2024-08-22T13:57:27",
        endDate: "2024-08-22T17:30:00",
        planStartDate: "2024-08-22T08:30:00",
        planEndDate: "2024-08-22T17:30:00",
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "",
        workerCount: 2,
        unit: {
          id: 549,
          content: "U-48500 [XyMax]",
        },
        equipment: "",
        woNumber: "",
        workTime: 3.54,
        workRisk: "1등급",
        workCriticality: "Medium(주간과장 서명)",
        workDifficulty: "3등급",
        riskKind: "낙하, 화재/폭발",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 7.08,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50012,
          content: "작업완료",
        },
        totalWorkStatus: "완료",
        trans: 300765,
        transId: 9,
        title: "검색테스트",
        soilWorkNo: "허가-#2 PX-24-08-0001",
        workExecuter: "협력업체",
        workPlanDetailKinds: "",
        workKind: {
          id: 10040,
          content: "일반",
        },
        workKinds: "일반",
        workDetailKind: {
          id: 0,
          content: "",
        },
        workApprovalTeam: {
          id: 40,
          content: "PX2팀",
        },
        workApprovalSection: {
          id: 329,
          content: "#2 PX",
        },
        workExecutionTeam: {
          id: 300,
          content: "(주)대신기공",
        },
        workExecutionSection: {
          id: 300,
          content: "(주)대신기공",
        },
        periodStart: "2024-08-21T09:50:46",
        periodEnd: "2024-08-21T21:30:00",
        startDate: "2024-08-21T10:05:29",
        endDate: "2024-08-21T21:01:00",
        planStartDate: "2024-08-21T08:30:00",
        planEndDate: "2024-08-21T17:30:00",
        superVisionTeam: [
          {
            id: 40,
            content: "PX2팀",
          },
          {
            id: 260,
            content: "정비계획팀",
          },
        ],
        superVisionSection: [
          {
            id: 329,
            content: "#2 PX",
          },
          {
            id: 260,
            content: "#2 PX",
          },
        ],
        workOrderOption: "PM01:일상정비",
        workerCount: 1,
        unit: {
          id: 543,
          content: "U-48000 [#2 PX Utility]",
        },
        equipment: "TK-48001B",
        woNumber: "000003745612",
        workTime: 9.93,
        workRisk: "1등급",
        workCriticality: "Low(교대과장 서명)",
        workDifficulty: "1등급",
        riskKind: "유해물질흡입",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 9.93,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50002,
          content: "작성중",
        },
        totalWorkStatus: "",
        trans: 300350,
        transId: 10,
        title: "test[테스트231667]",
        soilWorkNo: "",
        workExecuter: "자체팀",
        workPlanDetailKinds: "",
        workKind: {
          id: 10042,
          content: "전기",
        },
        workKinds: "전기",
        workDetailKind: {
          id: 50085,
          content: "비활선",
        },
        workApprovalTeam: {
          id: 38,
          content: "PX1팀",
        },
        workApprovalSection: {
          id: 327,
          content: "#1 PX",
        },
        workExecutionTeam: {
          id: 38,
          content: "PX1팀",
        },
        workExecutionSection: {
          id: 327,
          content: "#1 PX",
        },
        periodStart: "2024-07-24T08:30:00",
        periodEnd: "2024-07-24T17:30:00",
        startDate: null,
        endDate: null,
        planStartDate: "2024-07-24T08:30:00",
        planEndDate: "2024-07-24T17:30:00",
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "",
        workerCount: 0,
        unit: {
          id: 327,
          content: "#1 PX",
        },
        equipment: "",
        woNumber: "",
        workTime: 8,
        workRisk: "2등급",
        workCriticality: "High(부문장 서명)",
        workDifficulty: "2등급",
        riskKind: "",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 0,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50002,
          content: "작성중",
        },
        totalWorkStatus: "",
        trans: 301126,
        transId: 11,
        title: "test",
        soilWorkNo: "",
        workExecuter: "정비팀",
        workPlanDetailKinds: "",
        workKind: {
          id: 10039,
          content: "화기",
        },
        workKinds: "화기",
        workDetailKind: {
          id: 4,
          content: "일반 화기",
        },
        workApprovalTeam: {
          id: 0,
          content: "",
        },
        workApprovalSection: {
          id: 0,
          content: "",
        },
        workExecutionTeam: {
          id: 241,
          content: "제품운영팀",
        },
        workExecutionSection: {
          id: 241,
          content: "제품운영팀",
        },
        periodStart: "2024-09-03T08:30:00",
        periodEnd: "2024-09-03T17:30:00",
        startDate: null,
        endDate: null,
        planStartDate: null,
        planEndDate: null,
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "PM02:일상정비",
        workerCount: 0,
        unit: {
          id: 0,
          content: "",
        },
        equipment: "D-1105, B-1901A, D-2105, E-1110B",
        woNumber: "123",
        workTime: 8,
        workRisk: "",
        workCriticality: "",
        workDifficulty: "2등급",
        riskKind: "",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 0,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50002,
          content: "작성중",
        },
        totalWorkStatus: "",
        trans: 301120,
        transId: 12,
        title: "하이",
        soilWorkNo: "",
        workExecuter: "",
        workPlanDetailKinds: "",
        workKind: {
          id: 10039,
          content: "화기",
        },
        workKinds: "화기",
        workDetailKind: {
          id: 0,
          content: "",
        },
        workApprovalTeam: {
          id: 0,
          content: "",
        },
        workApprovalSection: {
          id: 0,
          content: "",
        },
        workExecutionTeam: {
          id: 241,
          content: "제품운영팀",
        },
        workExecutionSection: {
          id: 241,
          content: "제품운영팀",
        },
        periodStart: "2024-09-03T08:30:00",
        periodEnd: "2024-09-03T17:30:00",
        startDate: null,
        endDate: null,
        planStartDate: null,
        planEndDate: null,
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "",
        workerCount: 0,
        unit: {
          id: 0,
          content: "",
        },
        equipment: "",
        woNumber: "",
        workTime: 8,
        workRisk: "",
        workCriticality: "",
        workDifficulty: "1등급",
        riskKind: "",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 0,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50011,
          content: "작업중",
        },
        totalWorkStatus: "",
        trans: 301000,
        transId: 13,
        title: "test",
        soilWorkNo: "허가-#2 PX-24-08-0003",
        workExecuter: "정비팀",
        workPlanDetailKinds: "",
        workKind: {
          id: 10040,
          content: "일반",
        },
        workKinds: "일반",
        workDetailKind: {
          id: 0,
          content: "",
        },
        workApprovalTeam: {
          id: 40,
          content: "PX2팀",
        },
        workApprovalSection: {
          id: 329,
          content: "#2 PX",
        },
        workExecutionTeam: {
          id: 40,
          content: "PX2팀",
        },
        workExecutionSection: {
          id: 329,
          content: "#2 PX",
        },
        periodStart: "2024-08-28T14:24:01",
        periodEnd: "2024-08-28T17:30:00",
        startDate: "2024-08-28T14:24:55",
        endDate: "2024-08-28T17:30:00",
        planStartDate: "2024-08-28T08:30:00",
        planEndDate: "2024-08-28T17:30:00",
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "",
        workerCount: 1,
        unit: {
          id: 541,
          content: "U-43000 [Hot Oil]",
        },
        equipment: "",
        woNumber: "",
        workTime: 3.08,
        workRisk: "3등급",
        workCriticality: "Medium(주간과장 서명)",
        workDifficulty: "1등급",
        riskKind: "유해물질흡입",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 3.08,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50002,
          content: "작성중",
        },
        totalWorkStatus: "",
        trans: 300993,
        transId: 14,
        title: "test",
        soilWorkNo: "",
        workExecuter: "정비팀",
        workPlanDetailKinds: "",
        workKind: {
          id: 10040,
          content: "일반",
        },
        workKinds: "일반",
        workDetailKind: {
          id: 0,
          content: "",
        },
        workApprovalTeam: {
          id: 40,
          content: "PX2팀",
        },
        workApprovalSection: {
          id: 329,
          content: "#2 PX",
        },
        workExecutionTeam: {
          id: 40,
          content: "PX2팀",
        },
        workExecutionSection: {
          id: 329,
          content: "#2 PX",
        },
        periodStart: "2024-08-30T08:30:00",
        periodEnd: "2024-08-30T17:30:00",
        startDate: null,
        endDate: null,
        planStartDate: "2024-08-30T08:30:00",
        planEndDate: "2024-08-30T17:30:00",
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "",
        workerCount: 1,
        unit: {
          id: 541,
          content: "U-43000 [Hot Oil]",
        },
        equipment: "",
        woNumber: "",
        workTime: 8,
        workRisk: "",
        workCriticality: "",
        workDifficulty: "1등급",
        riskKind: "유해물질흡입",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 8,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50002,
          content: "작성중",
        },
        totalWorkStatus: "",
        trans: 300882,
        transId: 15,
        title: "tes",
        soilWorkNo: "",
        workExecuter: "정비팀",
        workPlanDetailKinds: "",
        workKind: {
          id: 10040,
          content: "일반",
        },
        workKinds: "일반",
        workDetailKind: {
          id: 0,
          content: "",
        },
        workApprovalTeam: {
          id: 38,
          content: "PX1팀",
        },
        workApprovalSection: {
          id: 327,
          content: "#1 PX",
        },
        workExecutionTeam: {
          id: 28,
          content: "Alkylation1팀",
        },
        workExecutionSection: {
          id: 315,
          content: "#3 HMP",
        },
        periodStart: "2024-08-27T08:30:00",
        periodEnd: "2024-08-27T17:30:00",
        startDate: null,
        endDate: null,
        planStartDate: "2024-08-27T08:30:00",
        planEndDate: "2024-08-27T17:30:00",
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "",
        workerCount: 1,
        unit: {
          id: 8163,
          content: "U-40000[Hot Oil Section]",
        },
        equipment: "",
        woNumber: "",
        workTime: 8,
        workRisk: "",
        workCriticality: "",
        workDifficulty: "1등급",
        riskKind: "협착",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 8,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50002,
          content: "작성중",
        },
        totalWorkStatus: "",
        trans: 300856,
        transId: 16,
        title: "복수 작업 진행",
        soilWorkNo: "허가-#2 PX-24-08-0002",
        workExecuter: "정비팀",
        workPlanDetailKinds: "",
        workKind: {
          id: 10045,
          content: "도로점유",
        },
        workKinds: "도로점유",
        workDetailKind: {
          id: 0,
          content: "",
        },
        workApprovalTeam: {
          id: 40,
          content: "PX2팀",
        },
        workApprovalSection: {
          id: 329,
          content: "#2 PX",
        },
        workExecutionTeam: {
          id: 40,
          content: "PX2팀",
        },
        workExecutionSection: {
          id: 329,
          content: "#2 PX",
        },
        periodStart: "2024-08-22T08:30:00",
        periodEnd: "2024-08-22T17:30:00",
        startDate: null,
        endDate: null,
        planStartDate: "2024-08-22T08:30:00",
        planEndDate: "2024-08-22T17:30:00",
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "",
        workerCount: 1,
        unit: {
          id: 549,
          content: "U-48500 [XyMax]",
        },
        equipment: "",
        woNumber: "",
        workTime: 8,
        workRisk: "",
        workCriticality: "",
        workDifficulty: "1등급",
        riskKind: "낙하, 화재/폭발",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 8,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50002,
          content: "작성중",
        },
        totalWorkStatus: "",
        trans: 300852,
        transId: 17,
        title: "복수 작업 진행",
        soilWorkNo: "허가-#2 PX-24-08-0002",
        workExecuter: "정비팀",
        workPlanDetailKinds: "",
        workKind: {
          id: 10043,
          content: "밀폐공간",
        },
        workKinds: "밀폐공간",
        workDetailKind: {
          id: 239,
          content: "일반 작업",
        },
        workApprovalTeam: {
          id: 40,
          content: "PX2팀",
        },
        workApprovalSection: {
          id: 329,
          content: "#2 PX",
        },
        workExecutionTeam: {
          id: 40,
          content: "PX2팀",
        },
        workExecutionSection: {
          id: 329,
          content: "#2 PX",
        },
        periodStart: "2024-08-22T08:30:00",
        periodEnd: "2024-08-22T17:30:00",
        startDate: null,
        endDate: null,
        planStartDate: "2024-08-22T08:30:00",
        planEndDate: "2024-08-22T17:30:00",
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "",
        workerCount: 1,
        unit: {
          id: 549,
          content: "U-48500 [XyMax]",
        },
        equipment: "",
        woNumber: "",
        workTime: 8,
        workRisk: "",
        workCriticality: "",
        workDifficulty: "2등급",
        riskKind: "낙하, 화재/폭발",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 8,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50011,
          content: "작업중",
        },
        totalWorkStatus: "",
        trans: 300848,
        transId: 18,
        title: "복수 작업 진행",
        soilWorkNo: "허가-#2 PX-24-08-0002",
        workExecuter: "정비팀",
        workPlanDetailKinds: "",
        workKind: {
          id: 10039,
          content: "화기",
        },
        workKinds: "화기",
        workDetailKind: {
          id: 5,
          content: "특별 화기",
        },
        workApprovalTeam: {
          id: 40,
          content: "PX2팀",
        },
        workApprovalSection: {
          id: 329,
          content: "#2 PX",
        },
        workExecutionTeam: {
          id: 40,
          content: "PX2팀",
        },
        workExecutionSection: {
          id: 329,
          content: "#2 PX",
        },
        periodStart: "2024-08-22T13:55:58",
        periodEnd: "2024-08-22T17:30:00",
        startDate: "2024-08-22T13:57:27",
        endDate: "2024-08-22T17:30:00",
        planStartDate: "2024-08-22T08:30:00",
        planEndDate: "2024-08-22T17:30:00",
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "",
        workerCount: 2,
        unit: {
          id: 549,
          content: "U-48500 [XyMax]",
        },
        equipment: "",
        woNumber: "",
        workTime: 3.54,
        workRisk: "1등급",
        workCriticality: "Medium(주간과장 서명)",
        workDifficulty: "3등급",
        riskKind: "낙하, 화재/폭발",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 7.08,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50012,
          content: "작업완료",
        },
        totalWorkStatus: "완료",
        trans: 300765,
        transId: 19,
        title: "검색테스트",
        soilWorkNo: "허가-#2 PX-24-08-0001",
        workExecuter: "협력업체",
        workPlanDetailKinds: "",
        workKind: {
          id: 10040,
          content: "일반",
        },
        workKinds: "일반",
        workDetailKind: {
          id: 0,
          content: "",
        },
        workApprovalTeam: {
          id: 40,
          content: "PX2팀",
        },
        workApprovalSection: {
          id: 329,
          content: "#2 PX",
        },
        workExecutionTeam: {
          id: 300,
          content: "(주)대신기공",
        },
        workExecutionSection: {
          id: 300,
          content: "(주)대신기공",
        },
        periodStart: "2024-08-21T09:50:46",
        periodEnd: "2024-08-21T21:30:00",
        startDate: "2024-08-21T10:05:29",
        endDate: "2024-08-21T21:01:00",
        planStartDate: "2024-08-21T08:30:00",
        planEndDate: "2024-08-21T17:30:00",
        superVisionTeam: [
          {
            id: 40,
            content: "PX2팀",
          },
          {
            id: 260,
            content: "정비계획팀",
          },
        ],
        superVisionSection: [
          {
            id: 329,
            content: "#2 PX",
          },
          {
            id: 260,
            content: "#2 PX",
          },
        ],
        workOrderOption: "PM01:일상정비",
        workerCount: 1,
        unit: {
          id: 543,
          content: "U-48000 [#2 PX Utility]",
        },
        equipment: "TK-48001B",
        woNumber: "000003745612",
        workTime: 9.93,
        workRisk: "1등급",
        workCriticality: "Low(교대과장 서명)",
        workDifficulty: "1등급",
        riskKind: "유해물질흡입",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 9.93,
        relatedRiskRegister: "",
      },
      {
        status: {
          id: 50002,
          content: "작성중",
        },
        totalWorkStatus: "",
        trans: 300350,
        transId: 20,
        title: "test[테스트231667]",
        soilWorkNo: "",
        workExecuter: "자체팀",
        workPlanDetailKinds: "",
        workKind: {
          id: 10042,
          content: "전기",
        },
        workKinds: "전기",
        workDetailKind: {
          id: 50085,
          content: "비활선",
        },
        workApprovalTeam: {
          id: 38,
          content: "PX1팀",
        },
        workApprovalSection: {
          id: 327,
          content: "#1 PX",
        },
        workExecutionTeam: {
          id: 38,
          content: "PX1팀",
        },
        workExecutionSection: {
          id: 327,
          content: "#1 PX",
        },
        periodStart: "2024-07-24T08:30:00",
        periodEnd: "2024-07-24T17:30:00",
        startDate: null,
        endDate: null,
        planStartDate: "2024-07-24T08:30:00",
        planEndDate: "2024-07-24T17:30:00",
        superVisionTeam: [],
        superVisionSection: [],
        workOrderOption: "",
        workerCount: 0,
        unit: {
          id: 327,
          content: "#1 PX",
        },
        equipment: "",
        woNumber: "",
        workTime: 8,
        workRisk: "2등급",
        workCriticality: "High(부문장 서명)",
        workDifficulty: "2등급",
        riskKind: "",
        scaffoldWork: "X",
        msdsWork: "X",
        isolationWork: "X",
        interlockWork: "X",
        rtsNumber: "",
        totalHour: 0,
        relatedRiskRegister: "",
      },
    ],
  },
  success: true,
};

export const workKinds = {
  payload: [
    {
      id: 0,
      content: "전체",
    },
    {
      id: 10039,
      content: "화기",
    },
    {
      id: 10040,
      content: "일반",
    },
    {
      id: 10041,
      content: "굴착",
    },
    {
      id: 10042,
      content: "전기",
    },
    {
      id: 10043,
      content: "밀폐공간",
    },
    {
      id: 10044,
      content: "방사선",
    },
    {
      id: 10045,
      content: "도로점유",
    },
    {
      id: 10046,
      content: "계기",
    },
    {
      id: 10047,
      content: "황화수소 함유시설",
    },
  ],
  success: true,
};
export const workDetailKinds = {
  payload: [
    {
      id: 0,
      content: "전체",
    },
    {
      id: 4,
      content: "일반 화기",
    },
    {
      id: 5,
      content: "특별 화기",
    },
    {
      id: 237,
      content: "일반 화기 작업",
    },
    {
      id: 238,
      content: "특별 화기 작업",
    },
    {
      id: 239,
      content: "일반 작업",
    },
    {
      id: 240,
      content: "계기 작업",
    },
    {
      id: 50083,
      content: "활선",
    },
    {
      id: 50084,
      content: "근접 활선",
    },
    {
      id: 50085,
      content: "비활선",
    },
    {
      id: 50086,
      content: "Interlock",
    },
    {
      id: 50087,
      content: "일반 계기",
    },
    {
      id: 50088,
      content: "일반 굴착",
    },
    {
      id: 50089,
      content: "도로/방유제/소방배관 절단",
    },
  ],
  success: true,
};

export const mockAllTeams = {
  payload: [
    {
      id: 0,
      content: "전체",
    },
    {
      id: 8174,
      content: "(유)베올리아워터테크놀로지스앤솔루션스코리아",
    },
    {
      id: 7888,
      content: "(주)ABB 코리아",
    },
    {
      id: 8143,
      content: "(주)가나공영",
    },
    {
      id: 8157,
      content: "(주)건일엔지니어링",
    },
    {
      id: 8137,
      content: "(주)대공",
    },
    {
      id: 300,
      content: "(주)대신기공",
    },
    {
      id: 8128,
      content: "(주)대아공조플랜트",
    },
    {
      id: 8138,
      content: "(주)동부",
    },
    {
      id: 8125,
      content: "(주)동진기술",
    },
    {
      id: 8155,
      content: "(주)민성",
    },
    {
      id: 8151,
      content: "(주)반도기술검사",
    },
    {
      id: 8180,
      content: "(주)복산종합전기",
    },
    {
      id: 8156,
      content: "(주)비케이비젼",
    },
    {
      id: 8173,
      content: "(주)서진에스앤피",
    },
    {
      id: 7885,
      content: "(주)성광",
    },
    {
      id: 7894,
      content: "(주)세인인포테크",
    },
    {
      id: 8185,
      content: "(주)씨에스글로벌",
    },
    {
      id: 8129,
      content: "(주)아거스",
    },
    {
      id: 951,
      content: "(주)아폴로",
    },
    {
      id: 8165,
      content: "(주)에이아이티",
    },
    {
      id: 8126,
      content: "(주)에이텍",
    },
    {
      id: 8162,
      content: "(주)에이피이엔씨",
    },
    {
      id: 8176,
      content: "(주)엠파워",
    },
    {
      id: 8135,
      content: "(주)유벡",
    },
    {
      id: 8147,
      content: "(주)제이콘",
    },
    {
      id: 8140,
      content: "(주)창일이엔지",
    },
    {
      id: 8181,
      content: "(주)콤텍시스템",
    },
    {
      id: 8136,
      content: "(주)하이테크엔지니어링",
    },
    {
      id: 8139,
      content: "(주)한국공업엔지니어링",
    },
    {
      id: 8131,
      content: "(주)한국방재",
    },
    {
      id: 8130,
      content: "(주)한진전설",
    },
    {
      id: 7884,
      content: "(주)해림목",
    },
    {
      id: 8132,
      content: "(주)해인엔씨",
    },
    {
      id: 1111,
      content: "(주)휴엔텍",
    },
    {
      id: 7888,
      content: "ABB Korea Co., Ltd.",
    },
    {
      id: 8165,
      content: "AIT Co., Ltd.",
    },
    {
      id: 28,
      content: "Alkylation1팀",
    },
    {
      id: 34,
      content: "Alkylation2팀",
    },
    {
      id: 8162,
      content: "APEN C Co., Ltd.",
    },
    {
      id: 951,
      content: "Apollo Co., Ltd.",
    },
    {
      id: 8129,
      content: "Argus Co., Ltd.",
    },
    {
      id: 8146,
      content: "ARKEMA PTE LTD.",
    },
    {
      id: 8126,
      content: "A-Tech Co., Ltd.",
    },
    {
      id: 8151,
      content: "Bando Technology Inspection Co., Ltd.",
    },
    {
      id: 7995,
      content: "Basic Chemical 운영팀",
    },
    {
      id: 8076,
      content: "Big Data 팀",
    },
    {
      id: 8156,
      content: "BK Vision Co., Ltd.",
    },
    {
      id: 8180,
      content: "Boksan General Electric Co., Ltd.",
    },
    {
      id: 8154,
      content: "Bugang Construction Co., Ltd.",
    },
    {
      id: 8169,
      content: "CAPROTEC",
    },
    {
      id: 7990,
      content: "CEO실",
    },
    {
      id: 8062,
      content: "CFO 보좌역",
    },
    {
      id: 8140,
      content: "Changil Engineering Co., Ltd.",
    },
    {
      id: 8017,
      content: "Chemical기술개발기획팀",
    },
    {
      id: 8184,
      content: "Cheongho Tech",
    },
    {
      id: 8029,
      content: "CISO",
    },
    {
      id: 8168,
      content: "CMT Information & Communication Co., Ltd.",
    },
    {
      id: 8181,
      content: "Comtec System Co., Ltd.",
    },
    {
      id: 273,
      content: "Corrosion Control팀",
    },
    {
      id: 8185,
      content: "CS Global Co., Ltd.",
    },
    {
      id: 8153,
      content: "D&I Tech Co., Ltd.",
    },
    {
      id: 8124,
      content: "Daeah Air Conditioning Plant",
    },
    {
      id: 8128,
      content: "Daeah Air Conditioning Plant Co., Ltd.",
    },
    {
      id: 8137,
      content: "Daegong Co., Ltd.",
    },
    {
      id: 7896,
      content: "Daejin Machinery",
    },
    {
      id: 8164,
      content: "Daeshin Automobile Industry Co., Ltd.",
    },
    {
      id: 300,
      content: "Daeshin Engineering Co., Ltd.",
    },
    {
      id: 8150,
      content: "Daeshin Networks Co., Ltd.",
    },
    {
      id: 8166,
      content: "Daewoon Gas Plant Co., Ltd.",
    },
    {
      id: 272,
      content: "Defect Elimination팀",
    },
    {
      id: 8086,
      content: "Deputy Shaheen Operations Representative",
    },
    {
      id: 255,
      content: "Digital Transformation팀",
    },
    {
      id: 8121,
      content: "DNV GL Korea Co., Ltd. Busan Branch",
    },
    {
      id: 7891,
      content: "DNV Korea Co., Ltd.",
    },
    {
      id: 8138,
      content: "Dongbu Co., Ltd.",
    },
    {
      id: 8122,
      content: "Dongil Industry Co., Ltd.",
    },
    {
      id: 8125,
      content: "Dongjin Technology Co., Ltd.",
    },
    {
      id: 8159,
      content: "Downenc Co., Ltd.",
    },
    {
      id: 906,
      content: "Emerson Korea Co., Ltd.",
    },
    {
      id: 8176,
      content: "Empower Co., Ltd.",
    },
    {
      id: 33,
      content: "ERU팀",
    },
    {
      id: 7895,
      content: "Future Tech",
    },
    {
      id: 8143,
      content: "Gana Public Corporation",
    },
    {
      id: 8177,
      content: "Genex Engineering Co., Ltd.",
    },
    {
      id: 8157,
      content: "Geonil Engineering Co., Ltd.",
    },
    {
      id: 8134,
      content: "Geumyang Green Power Co., Ltd.",
    },
    {
      id: 8144,
      content: "Global Marine Service Co., Ltd.",
    },
    {
      id: 8179,
      content: "Green Elevator Co., Ltd.",
    },
    {
      id: 909,
      content: "Gwangseong Construction Co., Ltd.",
    },
    {
      id: 8132,
      content: "Haein NC Co., Ltd.",
    },
    {
      id: 7884,
      content: "Haerimmok Co., Ltd.",
    },
    {
      id: 8141,
      content: "Hanaetech Co., Ltd.",
    },
    {
      id: 8152,
      content: "Hanil Electric Power Co., Ltd.",
    },
    {
      id: 8130,
      content: "Hanjin Legend Co., Ltd.",
    },
    {
      id: 8136,
      content: "Hi-Tech Engineering Co., Ltd.",
    },
    {
      id: 7914,
      content: "HR기획팀",
    },
    {
      id: 1111,
      content: "Huentech Co., Ltd.",
    },
    {
      id: 1124,
      content: "Hwain C&M Co., Ltd.",
    },
    {
      id: 649,
      content: "Hydrocracker 공장(Safety Group)",
    },
    {
      id: 23,
      content: "Hydrocracker공정팀",
    },
    {
      id: 107,
      content: "Hydrocracker팀",
    },
    {
      id: 8149,
      content: "Hyundai Fire & Marine Engineering Co., Ltd.",
    },
    {
      id: 8161,
      content: "Hyundai Mobis Co., Ltd.",
    },
    {
      id: 7886,
      content: "Instec",
    },
    {
      id: 7949,
      content: "IR 팀",
    },
    {
      id: 8081,
      content: "IT Advisor",
    },
    {
      id: 8115,
      content: "IT기획팀",
    },
    {
      id: 8098,
      content: "IT운영센터(IT아웃소싱)",
    },
    {
      id: 8003,
      content: "IT운영팀",
    },
    {
      id: 8147,
      content: "Jaycon Co., Ltd.",
    },
    {
      id: 8175,
      content: "KC Cottrell Co., Ltd.",
    },
    {
      id: 8175,
      content: "KC코트렐(주)",
    },
    {
      id: 8131,
      content: "Korea Disaster Prevention Corporation",
    },
    {
      id: 8178,
      content: "Korea Electric Safety Corporation",
    },
    {
      id: 8133,
      content: "Korea Electric Safety Service Co., Ltd.",
    },
    {
      id: 8172,
      content: "Korea Health and Environment Consulting Co., Ltd.",
    },
    {
      id: 8127,
      content: "Korea Honeywell Co., Ltd.",
    },
    {
      id: 8139,
      content: "Korea Industrial Engineering Co., Ltd.",
    },
    {
      id: 7887,
      content: "Korea Yokogawa Electric Co., Ltd.",
    },
    {
      id: 8145,
      content: "Kumho Electric Co., Ltd.",
    },
    {
      id: 8158,
      content: "Kyoungun Technology Industry Co., Ltd.",
    },
    {
      id: 8123,
      content: "Lotech Engineering Co., Ltd.",
    },
    {
      id: 7963,
      content: "LPG 팀",
    },
    {
      id: 1007,
      content: "LS Cable & System",
    },
    {
      id: 1007,
      content: "LS전선",
    },
    {
      id: 8183,
      content: "Manggang General Construction Co., Ltd.",
    },
    {
      id: 29,
      content: "MHC팀",
    },
    {
      id: 8155,
      content: "Minseong Co., Ltd.",
    },
    {
      id: 7890,
      content: "Nexpower",
    },
    {
      id: 17,
      content: "Offsite운영지원팀",
    },
    {
      id: 8016,
      content: "Olefin Downstream 사업기획팀",
    },
    {
      id: 8186,
      content: "Other non-member partners",
    },
    {
      id: 8182,
      content: "Plus Heavy Electric Co., Ltd.",
    },
    {
      id: 8020,
      content: "PO & Intermediate 영업팀",
    },
    {
      id: 43,
      content: "PO/MTBE팀",
    },
    {
      id: 8021,
      content: "Polymer & Intermediate 운영팀",
    },
    {
      id: 8085,
      content: "Polymer OR팀",
    },
    {
      id: 8015,
      content: "PP영업팀",
    },
    {
      id: 42,
      content: "PP팀",
    },
    {
      id: 296,
      content: "PSM팀",
    },
    {
      id: 38,
      content: "PX1팀",
    },
    {
      id: 40,
      content: "PX2팀",
    },
    {
      id: 841,
      content: "RFCC1 공장(Safety Group)",
    },
    {
      id: 26,
      content: "RFCC1공정팀",
    },
    {
      id: 27,
      content: "RFCC1팀",
    },
    {
      id: 842,
      content: "RFCC2 공장(Safety Group)",
    },
    {
      id: 31,
      content: "RFCC2공정팀",
    },
    {
      id: 32,
      content: "RFCC2팀",
    },
    {
      id: 294,
      content: "S&H기획팀",
    },
    {
      id: 295,
      content: "S&H컴플라이언스팀",
    },
    {
      id: 7894,
      content: "Sain Infotech Co., Ltd.",
    },
    {
      id: 8142,
      content: "Samsung Everland Co., Ltd. Etsuoil Onsan",
    },
    {
      id: 8171,
      content: "Samyoung Engineering Co., Ltd.",
    },
    {
      id: 8148,
      content: "Schneider Electric Systems Korea Ltd.",
    },
    {
      id: 8173,
      content: "Seojin S&P Co., Ltd.",
    },
    {
      id: 924,
      content: "Seokwon Engineering Co., Ltd.",
    },
    {
      id: 7885,
      content: "Seongkwang Co., Ltd.",
    },
    {
      id: 923,
      content: "Seorim Machinery Development Co., Ltd.",
    },
    {
      id: 8080,
      content: "Shaheen OR Advisor",
    },
    {
      id: 8167,
      content: "SK Shielders Co., Ltd.",
    },
    {
      id: 8096,
      content: "Special Advisor to CEO",
    },
    {
      id: 8093,
      content: "Special Assignee & Contract Staff",
    },
    {
      id: 8094,
      content: "Special Assignee & Contract Staff (공장)",
    },
    {
      id: 8095,
      content: "Special Assignment",
    },
    {
      id: 7985,
      content: "Special Assignment (ATS)",
    },
    {
      id: 7992,
      content: "Special Assignment (STLC)",
    },
    {
      id: 7889,
      content: "Ssangyong Motor Co., Ltd.",
    },
    {
      id: 8084,
      content: "Steam Cracker OR팀",
    },
    {
      id: 7892,
      content: "Taesung Plant Inspection Co., Ltd.",
    },
    {
      id: 8083,
      content: "TC2C OR팀",
    },
    {
      id: 283,
      content: "TC2C팀",
    },
    {
      id: 8112,
      content: "Transition",
    },
    {
      id: 8005,
      content: "Treasurer 보좌역",
    },
    {
      id: 8174,
      content: "Veolia Water Technologies & Solutions Korea Ltd.",
    },
    {
      id: 8160,
      content: "Woojin Instruments",
    },
    {
      id: 8135,
      content: "Yubek Co., Ltd.",
    },
    {
      id: 969,
      content: "Yuhan TIU Co., Ltd.",
    },
    {
      id: 8170,
      content: "Zico Asia Co., Ltd.",
    },
    {
      id: 8022,
      content: "감사1팀",
    },
    {
      id: 7988,
      content: "감사2팀",
    },
    {
      id: 7986,
      content: "감사팀 부",
    },
    {
      id: 8036,
      content: "강남지사",
    },
    {
      id: 8037,
      content: "강북지사",
    },
    {
      id: 8042,
      content: "강원지사",
    },
    {
      id: 274,
      content: "검사팀",
    },
    {
      id: 8039,
      content: "경기남부지사",
    },
    {
      id: 8040,
      content: "경기동부지사",
    },
    {
      id: 8041,
      content: "경기북부지사",
    },
    {
      id: 8049,
      content: "경남지사",
    },
    {
      id: 7904,
      content: "경영관리팀",
    },
    {
      id: 7902,
      content: "경영기획팀",
    },
    {
      id: 8158,
      content: "경운기술산업(주)",
    },
    {
      id: 264,
      content: "계기1팀",
    },
    {
      id: 265,
      content: "계기2팀",
    },
    {
      id: 270,
      content: "계전설계팀",
    },
    {
      id: 7970,
      content: "고객센터",
    },
    {
      id: 275,
      content: "공정시스템관리팀",
    },
    {
      id: 256,
      content: "공정혁신팀",
    },
    {
      id: 7942,
      content: "관리회계팀",
    },
    {
      id: 909,
      content: "광성건설(주)",
    },
    {
      id: 8053,
      content: "광주전남지사",
    },
    {
      id: 7931,
      content: "구매관리팀",
    },
    {
      id: 7930,
      content: "구매팀",
    },
    {
      id: 8044,
      content: "구미지사",
    },
    {
      id: 8070,
      content: "군산저유소",
    },
    {
      id: 8179,
      content: "그린승강기(주)",
    },
    {
      id: 8144,
      content: "글로벌마린서비스(주)",
    },
    {
      id: 8134,
      content: "금양그린파워(주)",
    },
    {
      id: 7939,
      content: "금융팀",
    },
    {
      id: 8145,
      content: "금호전업(주)",
    },
    {
      id: 262,
      content: "기계1팀",
    },
    {
      id: 263,
      content: "기계2팀",
    },
    {
      id: 269,
      content: "기계설계팀",
    },
    {
      id: 8023,
      content: "기유마케팅팀",
    },
    {
      id: 8186,
      content: "기타 미 가입 협력업체",
    },
    {
      id: 8092,
      content: "기타비상무이사",
    },
    {
      id: 277,
      content: "기획분석팀",
    },
    {
      id: 8059,
      content: "남부영업지원팀",
    },
    {
      id: 7968,
      content: "네트워크개발팀",
    },
    {
      id: 7890,
      content: "넥스파워",
    },
    {
      id: 281,
      content: "노사협력팀",
    },
    {
      id: 8159,
      content: "다운이엔씨(주)",
    },
    {
      id: 8043,
      content: "대구지사",
    },
    {
      id: 7967,
      content: "대리점영업팀",
    },
    {
      id: 8150,
      content: "대신네트웍스㈜",
    },
    {
      id: 8164,
      content: "대신자동차공업사",
    },
    {
      id: 8124,
      content: "대아공조플랜트",
    },
    {
      id: 278,
      content: "대외업무팀",
    },
    {
      id: 8166,
      content: "대운가스프랜트(주)",
    },
    {
      id: 8050,
      content: "대전지사",
    },
    {
      id: 7896,
      content: "대진기계",
    },
    {
      id: 8000,
      content: "동경지사",
    },
    {
      id: 8122,
      content: "동일산업(주)",
    },
    {
      id: 8153,
      content: "디앤아이테크(주)",
    },
    {
      id: 8121,
      content: "디엔브이지엘코리아(유) 부산지점",
    },
    {
      id: 7891,
      content: "디엔브이코리아 유한회사",
    },
    {
      id: 8123,
      content: "로텍엔지니어링(주)",
    },
    {
      id: 7950,
      content: "리스크관리팀",
    },
    {
      id: 8183,
      content: "만강종합건설(주)",
    },
    {
      id: 7969,
      content: "멤버십마케팅팀",
    },
    {
      id: 7895,
      content: "미래텍",
    },
    {
      id: 7909,
      content: "법무팀",
    },
    {
      id: 7961,
      content: "법인영업팀",
    },
    {
      id: 8027,
      content: "본사외주용역(IAMS)",
    },
    {
      id: 8154,
      content: "부강종합건설(주)",
    },
    {
      id: 7993,
      content: "부동산관리팀",
    },
    {
      id: 8047,
      content: "부산지사",
    },
    {
      id: 7971,
      content: "브랜드마케팅팀",
    },
    {
      id: 297,
      content: "비상대응팀",
    },
    {
      id: 8091,
      content: "사외이사",
    },
    {
      id: 8142,
      content: "삼성에버랜드(주) 에쓰오일온산",
    },
    {
      id: 7981,
      content: "상해지사",
    },
    {
      id: 8117,
      content: "생산IT지원팀",
    },
    {
      id: 258,
      content: "생산관리팀",
    },
    {
      id: 8001,
      content: "생산구매지원팀",
    },
    {
      id: 851,
      content: "생산운영본부장 보좌역",
    },
    {
      id: 254,
      content: "생산조정팀",
    },
    {
      id: 253,
      content: "생산최적화팀",
    },
    {
      id: 8078,
      content: "생산회계팀",
    },
    {
      id: 923,
      content: "서림기전개발(주)",
    },
    {
      id: 924,
      content: "석원기공(주)",
    },
    {
      id: 7946,
      content: "세무팀",
    },
    {
      id: 7958,
      content: "소매관리팀",
    },
    {
      id: 839,
      content: "송유공장 (Safety Group)",
    },
    {
      id: 7978,
      content: "수급운영팀",
    },
    {
      id: 8030,
      content: "수급전략팀",
    },
    {
      id: 8008,
      content: "수송팀",
    },
    {
      id: 8148,
      content: "슈나이더일렉트릭시스템스코리아 주식회사",
    },
    {
      id: 8119,
      content: "시설투자기획팀",
    },
    {
      id: 8118,
      content: "신규사업기획팀",
    },
    {
      id: 7997,
      content: "신에너지사업팀",
    },
    {
      id: 7948,
      content: "신용관리팀",
    },
    {
      id: 8033,
      content: "싱가포르법인파견",
    },
    {
      id: 7889,
      content: "쌍용자동차(주)",
    },
    {
      id: 8169,
      content: "씨에이프로텍",
    },
    {
      id: 8168,
      content: "씨엠티정보통신 주식회사",
    },
    {
      id: 37,
      content: "아로마틱1팀",
    },
    {
      id: 39,
      content: "아로마틱2팀",
    },
    {
      id: 843,
      content: "아로마틱공장 (Safety Group)",
    },
    {
      id: 36,
      content: "아로마틱공정팀",
    },
    {
      id: 7976,
      content: "아로마틱영업팀",
    },
    {
      id: 8045,
      content: "안동지사",
    },
    {
      id: 7983,
      content: "암스테르담지사",
    },
    {
      id: 7933,
      content: "업무팀",
    },
    {
      id: 257,
      content: "에너지관리팀",
    },
    {
      id: 8167,
      content: "에스케이쉴더스 주식회사",
    },
    {
      id: 268,
      content: "연차보수팀",
    },
    {
      id: 7953,
      content: "영업전략팀",
    },
    {
      id: 844,
      content: "올레핀공장 (Safety Group)",
    },
    {
      id: 41,
      content: "올레핀공정팀",
    },
    {
      id: 44,
      content: "올레핀송유/동력팀",
    },
    {
      id: 8120,
      content: "올레핀영업팀",
    },
    {
      id: 282,
      content: "올레핀팀",
    },
    {
      id: 8160,
      content: "우진계기",
    },
    {
      id: 8087,
      content: "운영총괄보좌역",
    },
    {
      id: 8048,
      content: "울산지사",
    },
    {
      id: 7982,
      content: "원유용선팀",
    },
    {
      id: 8006,
      content: "원유팀",
    },
    {
      id: 969,
      content: "유한티유(주)",
    },
    {
      id: 8097,
      content: "윤리위원회",
    },
    {
      id: 8026,
      content: "윤활R＆D팀",
    },
    {
      id: 7998,
      content: "윤활마케팅전략팀",
    },
    {
      id: 7974,
      content: "윤활운영팀",
    },
    {
      id: 8025,
      content: "윤활유사업팀",
    },
    {
      id: 22,
      content: "윤활팀",
    },
    {
      id: 7920,
      content: "인력개발팀",
    },
    {
      id: 7915,
      content: "인사팀",
    },
    {
      id: 280,
      content: "인사후생팀",
    },
    {
      id: 7886,
      content: "인스텍",
    },
    {
      id: 8063,
      content: "인천저유소",
    },
    {
      id: 8038,
      content: "인천지사",
    },
    {
      id: 7940,
      content: "자금운영팀",
    },
    {
      id: 276,
      content: "자재관리팀",
    },
    {
      id: 267,
      content: "장치팀",
    },
    {
      id: 8013,
      content: "저유관리팀",
    },
    {
      id: 266,
      content: "전기팀",
    },
    {
      id: 8055,
      content: "전북지사",
    },
    {
      id: 828,
      content: "절차지원팀",
    },
    {
      id: 260,
      content: "정비계획팀",
    },
    {
      id: 261,
      content: "정비기술팀",
    },
    {
      id: 840,
      content: "정유/윤활공장(Safety Group)",
    },
    {
      id: 19,
      content: "정유/윤활공정팀",
    },
    {
      id: 20,
      content: "정유1팀",
    },
    {
      id: 21,
      content: "정유2팀",
    },
    {
      id: 24,
      content: "정유3팀",
    },
    {
      id: 829,
      content: "정유생산본부(Safety Group)",
    },
    {
      id: 8031,
      content: "정유해외마케팅팀",
    },
    {
      id: 8177,
      content: "제넥스엔지니어링 주식회사",
    },
    {
      id: 8074,
      content: "제주저유소",
    },
    {
      id: 241,
      content: "제품운영팀",
    },
    {
      id: 242,
      content: "제품출하팀",
    },
    {
      id: 8141,
      content: "주식회사 하나에이텍",
    },
    {
      id: 1124,
      content: "주식회사 화인씨앤엠",
    },
    {
      id: 8171,
      content: "주식회사삼영이엔지",
    },
    {
      id: 8002,
      content: "준법지원팀",
    },
    {
      id: 8057,
      content: "중부영업지원팀",
    },
    {
      id: 8012,
      content: "중질유사업팀",
    },
    {
      id: 8019,
      content: "중합/촉매개발팀",
    },
    {
      id: 8114,
      content: "지속가능경영팀",
    },
    {
      id: 8170,
      content: "지코아시아(주)",
    },
    {
      id: 7960,
      content: "직영네트워크관리팀",
    },
    {
      id: 8184,
      content: "청호테크",
    },
    {
      id: 279,
      content: "총무보안팀",
    },
    {
      id: 7925,
      content: "총무팀",
    },
    {
      id: 8051,
      content: "충남지사",
    },
    {
      id: 8052,
      content: "충북지사",
    },
    {
      id: 25,
      content: "탈황1팀",
    },
    {
      id: 30,
      content: "탈황2팀",
    },
    {
      id: 35,
      content: "탈황3팀",
    },
    {
      id: 7892,
      content: "태성플랜트검정(주)",
    },
    {
      id: 271,
      content: "투자공사팀",
    },
    {
      id: 7955,
      content: "판매기획팀",
    },
    {
      id: 8046,
      content: "포항지사",
    },
    {
      id: 8018,
      content: "폴리머제품개발팀",
    },
    {
      id: 284,
      content: "폴리머팀",
    },
    {
      id: 259,
      content: "품질관리팀",
    },
    {
      id: 287,
      content: "프로젝트QA1팀",
    },
    {
      id: 288,
      content: "프로젝트QA2팀",
    },
    {
      id: 289,
      content: "프로젝트QA3팀",
    },
    {
      id: 286,
      content: "프로젝트계전기술팀",
    },
    {
      id: 291,
      content: "프로젝트관리팀",
    },
    {
      id: 292,
      content: "프로젝트구매팀",
    },
    {
      id: 285,
      content: "프로젝트기계기술팀",
    },
    {
      id: 290,
      content: "프로젝트예산팀",
    },
    {
      id: 8082,
      content: "프로젝트원가회계팀",
    },
    {
      id: 293,
      content: "프로젝트조정팀",
    },
    {
      id: 8182,
      content: "플러스중전기㈜",
    },
    {
      id: 8172,
      content: "한국보건환경컨설팅(주)",
    },
    {
      id: 906,
      content: "한국에머슨(주)",
    },
    {
      id: 7887,
      content: "한국요꼬가와전기(주)",
    },
    {
      id: 8178,
      content: "한국전기안전공사",
    },
    {
      id: 8133,
      content: "한국전기안전써비스(주)",
    },
    {
      id: 8127,
      content: "한국하니웰(주)",
    },
    {
      id: 8152,
      content: "한일전력(주)",
    },
    {
      id: 7980,
      content: "해외운영팀",
    },
    {
      id: 8161,
      content: "현대무벡스(주)",
    },
    {
      id: 8149,
      content: "현대방재엔지니어링(주)",
    },
    {
      id: 7934,
      content: "홍보팀",
    },
    {
      id: 823,
      content: "화학생산본부(Safety Group)",
    },
    {
      id: 298,
      content: "환경팀",
    },
    {
      id: 7944,
      content: "회계팀",
    },
  ],
  success: true,
};
export const mockTeams = {
  payload: [
    {
      id: 0,
      content: "전체",
    },
    {
      id: 28,
      content: "Alkylation1팀",
    },
    {
      id: 34,
      content: "Alkylation2팀",
    },
    {
      id: 7995,
      content: "Basic Chemical 운영팀",
    },
    {
      id: 8076,
      content: "Big Data 팀",
    },
    {
      id: 7990,
      content: "CEO실",
    },
    {
      id: 8062,
      content: "CFO 보좌역",
    },
    {
      id: 8017,
      content: "Chemical기술개발기획팀",
    },
    {
      id: 8029,
      content: "CISO",
    },
    {
      id: 273,
      content: "Corrosion Control팀",
    },
    {
      id: 272,
      content: "Defect Elimination팀",
    },
    {
      id: 8086,
      content: "Deputy Shaheen Operations Representative",
    },
    {
      id: 255,
      content: "Digital Transformation팀",
    },
    {
      id: 33,
      content: "ERU팀",
    },
    {
      id: 7914,
      content: "HR기획팀",
    },
    {
      id: 649,
      content: "Hydrocracker 공장(Safety Group)",
    },
    {
      id: 23,
      content: "Hydrocracker공정팀",
    },
    {
      id: 107,
      content: "Hydrocracker팀",
    },
    {
      id: 7949,
      content: "IR 팀",
    },
    {
      id: 8081,
      content: "IT Advisor",
    },
    {
      id: 8115,
      content: "IT기획팀",
    },
    {
      id: 8098,
      content: "IT운영센터(IT아웃소싱)",
    },
    {
      id: 8003,
      content: "IT운영팀",
    },
    {
      id: 7963,
      content: "LPG 팀",
    },
    {
      id: 29,
      content: "MHC팀",
    },
    {
      id: 17,
      content: "Offsite운영지원팀",
    },
    {
      id: 8016,
      content: "Olefin Downstream 사업기획팀",
    },
    {
      id: 8020,
      content: "PO & Intermediate 영업팀",
    },
    {
      id: 43,
      content: "PO/MTBE팀",
    },
    {
      id: 8021,
      content: "Polymer & Intermediate 운영팀",
    },
    {
      id: 8085,
      content: "Polymer OR팀",
    },
    {
      id: 8015,
      content: "PP영업팀",
    },
    {
      id: 42,
      content: "PP팀",
    },
    {
      id: 296,
      content: "PSM팀",
    },
    {
      id: 38,
      content: "PX1팀",
    },
    {
      id: 40,
      content: "PX2팀",
    },
    {
      id: 841,
      content: "RFCC1 공장(Safety Group)",
    },
    {
      id: 26,
      content: "RFCC1공정팀",
    },
    {
      id: 27,
      content: "RFCC1팀",
    },
    {
      id: 842,
      content: "RFCC2 공장(Safety Group)",
    },
    {
      id: 31,
      content: "RFCC2공정팀",
    },
    {
      id: 32,
      content: "RFCC2팀",
    },
    {
      id: 294,
      content: "S&H기획팀",
    },
    {
      id: 295,
      content: "S&H컴플라이언스팀",
    },
    {
      id: 8080,
      content: "Shaheen OR Advisor",
    },
    {
      id: 8096,
      content: "Special Advisor to CEO",
    },
    {
      id: 8093,
      content: "Special Assignee & Contract Staff",
    },
    {
      id: 8094,
      content: "Special Assignee & Contract Staff (공장)",
    },
    {
      id: 8095,
      content: "Special Assignment",
    },
    {
      id: 7985,
      content: "Special Assignment (ATS)",
    },
    {
      id: 7992,
      content: "Special Assignment (STLC)",
    },
    {
      id: 8084,
      content: "Steam Cracker OR팀",
    },
    {
      id: 8083,
      content: "TC2C OR팀",
    },
    {
      id: 283,
      content: "TC2C팀",
    },
    {
      id: 8112,
      content: "Transition",
    },
    {
      id: 8005,
      content: "Treasurer 보좌역",
    },
    {
      id: 8022,
      content: "감사1팀",
    },
    {
      id: 7988,
      content: "감사2팀",
    },
    {
      id: 7986,
      content: "감사팀 부",
    },
    {
      id: 8036,
      content: "강남지사",
    },
    {
      id: 8037,
      content: "강북지사",
    },
    {
      id: 8042,
      content: "강원지사",
    },
    {
      id: 274,
      content: "검사팀",
    },
    {
      id: 8039,
      content: "경기남부지사",
    },
    {
      id: 8040,
      content: "경기동부지사",
    },
    {
      id: 8041,
      content: "경기북부지사",
    },
    {
      id: 8049,
      content: "경남지사",
    },
    {
      id: 7904,
      content: "경영관리팀",
    },
    {
      id: 7902,
      content: "경영기획팀",
    },
    {
      id: 264,
      content: "계기1팀",
    },
    {
      id: 265,
      content: "계기2팀",
    },
    {
      id: 270,
      content: "계전설계팀",
    },
    {
      id: 7970,
      content: "고객센터",
    },
    {
      id: 275,
      content: "공정시스템관리팀",
    },
    {
      id: 256,
      content: "공정혁신팀",
    },
    {
      id: 7942,
      content: "관리회계팀",
    },
    {
      id: 8053,
      content: "광주전남지사",
    },
    {
      id: 7931,
      content: "구매관리팀",
    },
    {
      id: 7930,
      content: "구매팀",
    },
    {
      id: 8044,
      content: "구미지사",
    },
    {
      id: 8070,
      content: "군산저유소",
    },
    {
      id: 7939,
      content: "금융팀",
    },
    {
      id: 262,
      content: "기계1팀",
    },
    {
      id: 263,
      content: "기계2팀",
    },
    {
      id: 269,
      content: "기계설계팀",
    },
    {
      id: 8023,
      content: "기유마케팅팀",
    },
    {
      id: 8092,
      content: "기타비상무이사",
    },
    {
      id: 277,
      content: "기획분석팀",
    },
    {
      id: 8059,
      content: "남부영업지원팀",
    },
    {
      id: 7968,
      content: "네트워크개발팀",
    },
    {
      id: 281,
      content: "노사협력팀",
    },
    {
      id: 8043,
      content: "대구지사",
    },
    {
      id: 7967,
      content: "대리점영업팀",
    },
    {
      id: 278,
      content: "대외업무팀",
    },
    {
      id: 8050,
      content: "대전지사",
    },
    {
      id: 8000,
      content: "동경지사",
    },
    {
      id: 7950,
      content: "리스크관리팀",
    },
    {
      id: 7969,
      content: "멤버십마케팅팀",
    },
    {
      id: 7909,
      content: "법무팀",
    },
    {
      id: 7961,
      content: "법인영업팀",
    },
    {
      id: 8027,
      content: "본사외주용역(IAMS)",
    },
    {
      id: 7993,
      content: "부동산관리팀",
    },
    {
      id: 8047,
      content: "부산지사",
    },
    {
      id: 7971,
      content: "브랜드마케팅팀",
    },
    {
      id: 297,
      content: "비상대응팀",
    },
    {
      id: 8091,
      content: "사외이사",
    },
    {
      id: 7981,
      content: "상해지사",
    },
    {
      id: 8117,
      content: "생산IT지원팀",
    },
    {
      id: 258,
      content: "생산관리팀",
    },
    {
      id: 8001,
      content: "생산구매지원팀",
    },
    {
      id: 851,
      content: "생산운영본부장 보좌역",
    },
    {
      id: 254,
      content: "생산조정팀",
    },
    {
      id: 253,
      content: "생산최적화팀",
    },
    {
      id: 8078,
      content: "생산회계팀",
    },
    {
      id: 7946,
      content: "세무팀",
    },
    {
      id: 7958,
      content: "소매관리팀",
    },
    {
      id: 839,
      content: "송유공장 (Safety Group)",
    },
    {
      id: 7978,
      content: "수급운영팀",
    },
    {
      id: 8030,
      content: "수급전략팀",
    },
    {
      id: 8008,
      content: "수송팀",
    },
    {
      id: 8119,
      content: "시설투자기획팀",
    },
    {
      id: 8118,
      content: "신규사업기획팀",
    },
    {
      id: 7997,
      content: "신에너지사업팀",
    },
    {
      id: 7948,
      content: "신용관리팀",
    },
    {
      id: 8033,
      content: "싱가포르법인파견",
    },
    {
      id: 37,
      content: "아로마틱1팀",
    },
    {
      id: 39,
      content: "아로마틱2팀",
    },
    {
      id: 843,
      content: "아로마틱공장 (Safety Group)",
    },
    {
      id: 36,
      content: "아로마틱공정팀",
    },
    {
      id: 7976,
      content: "아로마틱영업팀",
    },
    {
      id: 8045,
      content: "안동지사",
    },
    {
      id: 7983,
      content: "암스테르담지사",
    },
    {
      id: 7933,
      content: "업무팀",
    },
    {
      id: 257,
      content: "에너지관리팀",
    },
    {
      id: 268,
      content: "연차보수팀",
    },
    {
      id: 7953,
      content: "영업전략팀",
    },
    {
      id: 844,
      content: "올레핀공장 (Safety Group)",
    },
    {
      id: 41,
      content: "올레핀공정팀",
    },
    {
      id: 44,
      content: "올레핀송유/동력팀",
    },
    {
      id: 8120,
      content: "올레핀영업팀",
    },
    {
      id: 282,
      content: "올레핀팀",
    },
    {
      id: 8087,
      content: "운영총괄보좌역",
    },
    {
      id: 8048,
      content: "울산지사",
    },
    {
      id: 7982,
      content: "원유용선팀",
    },
    {
      id: 8006,
      content: "원유팀",
    },
    {
      id: 8097,
      content: "윤리위원회",
    },
    {
      id: 8026,
      content: "윤활R＆D팀",
    },
    {
      id: 7998,
      content: "윤활마케팅전략팀",
    },
    {
      id: 7974,
      content: "윤활운영팀",
    },
    {
      id: 8025,
      content: "윤활유사업팀",
    },
    {
      id: 22,
      content: "윤활팀",
    },
    {
      id: 7920,
      content: "인력개발팀",
    },
    {
      id: 7915,
      content: "인사팀",
    },
    {
      id: 280,
      content: "인사후생팀",
    },
    {
      id: 8063,
      content: "인천저유소",
    },
    {
      id: 8038,
      content: "인천지사",
    },
    {
      id: 7940,
      content: "자금운영팀",
    },
    {
      id: 276,
      content: "자재관리팀",
    },
    {
      id: 267,
      content: "장치팀",
    },
    {
      id: 8013,
      content: "저유관리팀",
    },
    {
      id: 266,
      content: "전기팀",
    },
    {
      id: 8055,
      content: "전북지사",
    },
    {
      id: 828,
      content: "절차지원팀",
    },
    {
      id: 260,
      content: "정비계획팀",
    },
    {
      id: 261,
      content: "정비기술팀",
    },
    {
      id: 840,
      content: "정유/윤활공장(Safety Group)",
    },
    {
      id: 19,
      content: "정유/윤활공정팀",
    },
    {
      id: 20,
      content: "정유1팀",
    },
    {
      id: 21,
      content: "정유2팀",
    },
    {
      id: 24,
      content: "정유3팀",
    },
    {
      id: 829,
      content: "정유생산본부(Safety Group)",
    },
    {
      id: 8031,
      content: "정유해외마케팅팀",
    },
    {
      id: 8074,
      content: "제주저유소",
    },
    {
      id: 241,
      content: "제품운영팀",
    },
    {
      id: 242,
      content: "제품출하팀",
    },
    {
      id: 8002,
      content: "준법지원팀",
    },
    {
      id: 8057,
      content: "중부영업지원팀",
    },
    {
      id: 8012,
      content: "중질유사업팀",
    },
    {
      id: 8019,
      content: "중합/촉매개발팀",
    },
    {
      id: 8114,
      content: "지속가능경영팀",
    },
    {
      id: 7960,
      content: "직영네트워크관리팀",
    },
    {
      id: 279,
      content: "총무보안팀",
    },
    {
      id: 7925,
      content: "총무팀",
    },
    {
      id: 8051,
      content: "충남지사",
    },
    {
      id: 8052,
      content: "충북지사",
    },
    {
      id: 25,
      content: "탈황1팀",
    },
    {
      id: 30,
      content: "탈황2팀",
    },
    {
      id: 35,
      content: "탈황3팀",
    },
    {
      id: 271,
      content: "투자공사팀",
    },
    {
      id: 7955,
      content: "판매기획팀",
    },
    {
      id: 8046,
      content: "포항지사",
    },
    {
      id: 8018,
      content: "폴리머제품개발팀",
    },
    {
      id: 284,
      content: "폴리머팀",
    },
    {
      id: 259,
      content: "품질관리팀",
    },
    {
      id: 287,
      content: "프로젝트QA1팀",
    },
    {
      id: 288,
      content: "프로젝트QA2팀",
    },
    {
      id: 289,
      content: "프로젝트QA3팀",
    },
    {
      id: 286,
      content: "프로젝트계전기술팀",
    },
    {
      id: 291,
      content: "프로젝트관리팀",
    },
    {
      id: 292,
      content: "프로젝트구매팀",
    },
    {
      id: 285,
      content: "프로젝트기계기술팀",
    },
    {
      id: 290,
      content: "프로젝트예산팀",
    },
    {
      id: 8082,
      content: "프로젝트원가회계팀",
    },
    {
      id: 293,
      content: "프로젝트조정팀",
    },
    {
      id: 7980,
      content: "해외운영팀",
    },
    {
      id: 7934,
      content: "홍보팀",
    },
    {
      id: 823,
      content: "화학생산본부(Safety Group)",
    },
    {
      id: 298,
      content: "환경팀",
    },
    {
      id: 7944,
      content: "회계팀",
    },
  ],
  success: true,
};

export const sections = {
  payload: [
    {
      id: 0,
      content: "전체",
    },
    {
      id: 337,
      content: "제품운영1",
    },
    {
      id: 338,
      content: "제품운영2",
    },
    {
      id: 339,
      content: "제품운영3",
    },
    { id: 314, content: "#1 ALK" },
    { id: 315, content: "#3 HMP" },
    { id: 7943, content: "관리회계팀 예산관리파트" },
  ],
  success: true,
};
