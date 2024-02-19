import { Column } from "react-table";

export interface Player {
  id: string;
  name: string;
  time: number;
  birthday: string;
  attempts: Attempt[];
}
export interface Attempt {
  date: string;
  time: number;
}

export const COLUMNS: Column<Player>[] = [
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
