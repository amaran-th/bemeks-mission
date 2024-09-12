import { GridColumnMenu, GridColumnMenuProps } from "@mui/x-data-grid";

const CustomColumnMenu = (props: GridColumnMenuProps) => (
  <GridColumnMenu
    {...props}
    slots={{
      columnMenuAggregationItem: null,
      columnMenuGroupingItem: null,
      columnMenuFilterItem: null,
    }}
  />
);

export default CustomColumnMenu;
