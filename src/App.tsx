import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { db } from "./firebaseConfig";
import { get, ref } from "firebase/database";
import { Column, useTable } from "react-table";
import {
  StyledCell,
  StyledHeadRow,
  StyledHeader,
  StyledRow,
  StyledTable,
} from "./utils/StyledTablesHelper";

export interface LeaderboardItem {
  name: string;
  time: number;
}

function App() {
  const [data, setData] = useState<LeaderboardItem[]>([]);

  useEffect(() => {
    const dataRef = ref(db, "items");
    get(dataRef).then((firebaseData) => {
      let convertedData: LeaderboardItem[] = Object.values(firebaseData.val());
      convertedData = convertedData.sort((a, b) => a.time - b.time);
      setData(convertedData);
    });
  }, []);

  const columns: Column<LeaderboardItem>[] = useMemo(
    () => [
      {
        Header: "Rank",
        Cell: ({ row }) => row.index + 1,
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Time",
        accessor: "time",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <h1 style={{ color: "white" }}>&#127866; Leaderboard &#127866;</h1>

      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <StyledHeadRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <StyledHeader {...column.getHeaderProps()}>
                  {column.render("Header")}
                </StyledHeader>
              ))}
            </StyledHeadRow>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <StyledRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <StyledCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </StyledCell>
                ))}
              </StyledRow>
            );
          })}
        </tbody>
      </StyledTable>
    </>
  );
}

export default App;
