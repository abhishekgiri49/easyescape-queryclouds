import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ columns, rows }) {
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
