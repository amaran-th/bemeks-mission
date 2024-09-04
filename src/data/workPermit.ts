import { GridColDef } from "@mui/x-data-grid";

interface WorkPermitRow {
  status: {
    id: number;
    content: string;
  };
  totalWorkStatus: string;
  trans: number;
  transId: number;
  title: string;
  soilWorkNo: string;
  workExecuter: string;
  workPlanDetailKinds: string;
  workKind: {
    id: number;
    content: string;
  };
  workKinds: string;
  workDetailKind: {
    id: number;
    content: string;
  };
  workApprovalTeam: {
    id: number;
    content: string;
  };
  workApprovalSection: {
    id: number;
    content: string;
  };
  workExecutionTeam: {
    id: number;
    content: string;
  };
  workExecutionSection: {
    id: number;
    content: string;
  };
  periodStart: string;
  periodEnd: string;
  startDate: string | null;
  endDate: string | null;
  planStartDate: string | null;
  planEndDate: string | null;
  superVisionTeam: Array<{
    id: number;
    content: string;
  }>;
  superVisionSection: Array<{
    id: number;
    content: string;
  }>;
  workOrderOption: string;
  workerCount: number;
  unit: {
    id: number;
    content: string;
  };
  equipment: string;
  woNumber: string;
  workTime: number;
  workRisk: string;
  workCriticality: string;
  workDifficulty: string;
  riskKind: string;
  scaffoldWork: string;
  msdsWork: string;
  isolationWork: string;
  interlockWork: string;
  rtsNumber: string;
  totalHour: number;
  relatedRiskRegister: string;
}

export const tableColumns: GridColDef[] = [
  { field: "transId", headerName: "문서 번호", width: 120 },
  {
    field: "workKind",
    headerName: "작업 종류",
    width: 120,
    valueGetter: (_, row) => row.workKind.content || "", // Safely accessing nested fields
  },
  { field: 3, headerName: "작업 상세 분류", width: 120 },
  { field: 4, headerName: "상태", width: 200 },
  { field: 5, headerName: "작업명", width: 280 },
  { field: 6, headerName: "작업 수행 주체", width: 120 },
  { field: 7, headerName: "작업수행팀", width: 120 },
  { field: 8, headerName: "수행 계", width: 120 },
  { field: 9, headerName: "공사감독팀", width: 120 },
  { field: 10, headerName: "감독 계", width: 120 },
  { field: 11, headerName: "작업승인팀", minWidth: 120 },
  { field: 12, headerName: "승인 Section", width: 120 },
  { field: 13, headerName: "작업 계획 기간", width: 280 },
  { field: 14, headerName: "작업 허가 기간", width: 280 },
  { field: 15, headerName: "실제 작업 기간", width: 280 },
  { field: 16, headerName: "작업 종류별 작업난이도", width: 120 },
  { field: 17, headerName: "작업환경 위험도", width: 120 },
  { field: 18, headerName: "Criticality", width: 200 },
  { field: 19, headerName: "유해/위험 종류", width: 200 },
  { field: 20, headerName: "비계 설치/사용/해체 작업", width: 120 },
  { field: 21, headerName: "유해화학물질 취급 작업", width: 120 },
  {
    field: 22,
    headerName: "분리격리(Blind 체결/Spool 제거) 후 본 작업",
    width: 120,
  },
  { field: 23, headerName: "Interlock Bypass 필요 작업", width: 120 },
  { field: 24, headerName: "작업허가서 문서 번호", width: 200 },
  { field: 25, headerName: "작업자 수", width: 120 },
  { field: 26, headerName: "작업 시간", width: 120 },
  { field: 27, headerName: "총 공수", width: 120 },
  { field: 28, headerName: "W/O Number", width: 120 },
  { field: 29, headerName: "PM 종류", width: 120 },
  { field: 30, headerName: "RTS Number", width: 120 },
  { field: 31, headerName: "장치명", width: 120 },
  { field: 32, headerName: "전체작업 진행현황", width: 120 },
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
        transId: 231874,
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
        transId: 231869,
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
        transId: 231840,
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
        transId: 231835,
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
        transId: 231817,
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
        transId: 231809,
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
        transId: 231805,
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
        transId: 231801,
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
        transId: 231782,
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
        transId: 231667,
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
