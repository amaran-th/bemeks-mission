import { Box, Stack } from "@mui/material";
import {
  GridPagination,
  GridToolbarColumnsButton,
  GridToolbarExport,
} from "@mui/x-data-grid";

interface CustomFooterProps {
  pageNumber: number;
  pageSize: number;
  setPageNumber: (value: number) => void;
  setPageSize: (value: number) => void;
}

const CustomFooter = ({
  pageNumber,
  pageSize,
  setPageNumber,
  setPageSize,
}: CustomFooterProps) => (
  <Stack direction="row" padding={1} paddingY={0} gap={2}>
    <GridToolbarColumnsButton />
    <GridToolbarExport />
    <Box flex="auto" />
    <GridPagination
      rowsPerPage={pageSize}
      page={pageNumber}
      onRowsPerPageChange={(e) => setPageSize(parseInt(e.target.value))}
      onPageChange={(_, page) => setPageNumber(page)}
    />
  </Stack>
);

export default CustomFooter;
