import { Button, Chip, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "next-i18next";
import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const useWorkPermitListDataGridCols = () => {
  const { t } = useTranslation();
  const cols: GridColDef[] = [
    { field: "trans_id", headerName: t("문서 번호"), width: 120 },
    {
      field: "work_type",
      headerName: t("work-permit:작업_종류"),
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "work_detail_type",
      headerName: t("work-permit:작업_상세_분류"),
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: t("work-permit:상태"),
      width: 200,
      renderCell: ({ value }) => <Chip label={value} />,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "work_title",
      headerName: t("work-permit:작업명"),
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
      headerName: t("work-permit:작업_수행_주체"),
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "work_team",
      headerName: t("work-permit:작업수행팀"),
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "work_div",
      headerName: t("work-permit:수행_계"),
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "inspection_team",
      headerName: t("work-permit:공사감독팀"),
      width: 120,
      valueGetter: (_, row) => row.inspection_team.join(", ") || "",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "inspection_div",
      headerName: t("work-permit:감독_계"),
      width: 120,
      valueGetter: (_, row) => row.inspection_div.join(", ") || "",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "approval_team",
      headerName: t("work-permit:작업승인팀"),
      minWidth: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "approval_section",
      headerName: t("work-permit:승인_Section"),
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "plan_period",
      headerName: t("work-permit:작업_계획_기간"),
      width: 280,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "permit_period",
      headerName: t("work-permit:작업_허가_기간"),
      width: 280,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actual_period",
      headerName: t("work-permit:실제_작업_기간"),
      width: 280,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "work_difficulty",
      headerName: t("work-permit:작업_종류별_작업난이도"),
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "env_risk",
      headerName: t("work-permit:작업환경_위험도"),
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "criticality",
      headerName: t("work-permit:Criticality"),
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "hazard_type",
      headerName: t("work-permit:유해/위험_종류"),
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "scaffold_work",
      headerName: t("work-permit:비계_설치/사용/해체_작업"),
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "chemical_work",
      headerName: t("work-permit:유해화학물질_취급_작업"),
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "isolation_work",
      headerName: t("work-permit:분리격리(Blind_체결/Spool_제거)_후_본_작업"),
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "interlock_bypass",
      headerName: t("work-permit:Interlock_Bypass_필요_작업"),
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "permit_doc_number",
      headerName: t("work-permit:작업허가서_문서_번호"),
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "num_worker",
      headerName: t("work-permit:작업자_수"),
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "work_hours",
      headerName: t("work-permit:작업_시간"),
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "total_man_hours",
      headerName: t("work-permit:총_공수"),
      width: 120,
      valueGetter: (_, row) => row.total_man_hours.toFixed(2) || "",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "work_order_number",
      headerName: t("work-permit:W/O_Number"),
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "pm_type",
      headerName: t("work-permit:PM_종류"),
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "rts_number",
      headerName: t("work-permit:RTS_Number"),
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "work_equipment",
      headerName: t("work-permit:장치명"),
      width: 120,
      valueGetter: (_, row) => row.work_equipment.join(", ") || "",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "work_progress",
      headerName: t("work-permit:전체작업_진행현황"),
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
          <Button
            variant="contained"
            disabled={row.work_progress !== t("미완료")}
          >
            {t("work-permit:전체_작업_완료")}
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

  return { cols };
};

export default useWorkPermitListDataGridCols;
