import { tableColumns } from "@/data/workPermit";
import { useWorkPermits } from "@/lib/hooks/useApi";
import { WorkPermitFilterValues } from "@/pages";
import { DataGrid } from "@mui/x-data-grid";
import CustomColumnMenu from "./CustomColumnMenu";
import CustomFooter from "./CustomFooter";
import { FormikErrors } from "formik";

interface CustomDataGridProps {
  values: WorkPermitFilterValues;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void> | Promise<FormikErrors<WorkPermitFilterValues>>;
}

const CustomDataGrid = ({ values, setFieldValue }: CustomDataGridProps) => {
  const { data: workPermitData } = useWorkPermits(22, values);
  return (
    <div className="h-[600px] rounded-md border-border border relative">
      <DataGrid
        rows={workPermitData?.permits ?? []}
        columns={tableColumns}
        getRowId={(row) => row.trans_id}
        hideFooterSelectedRowCount={true}
        disableColumnFilter={true}
        sx={{
          "--DataGrid-containerBackground": "#F2F2F2", // 헤더의 배경색 설정
        }}
        slots={{
          columnMenu: CustomColumnMenu,
          footer: () =>
            CustomFooter({
              totalCount: workPermitData?.total_count ?? 0,
              pageNumber: values.page_number,
              pageSize: values.page_size,
              setPageNumber: (value) => setFieldValue("page_number", value),
              setPageSize: (value) => setFieldValue("page_size", value),
            }),
        }}
        pageSizeOptions={[10, 25, 50, 100, 500]}
      />
    </div>
  );
};

export default CustomDataGrid;
