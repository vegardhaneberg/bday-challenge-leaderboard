import { Column } from "react-table";

export interface LeaderboardItem {
  id: string;
  name: string;
  time: number;
}

export const COLUMNS: Column<LeaderboardItem>[] = [
  {
    Header: "Plass",
    Cell: ({ row }) => (
      <div style={{ textAlign: "center" }}>{row.index + 1}</div>
    ),
  },
  {
    Header: "Navn",
    accessor: "name",
    Cell: (row) => row.value,
  },
  {
    Header: "Tid",
    accessor: "time",
    Cell: (row) => row.value,
  },
];
