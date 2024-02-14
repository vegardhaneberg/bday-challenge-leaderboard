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
  // id: string;
  name: string;
  time: number;
}

function App() {
  const [data, setData] = useState<LeaderboardItem[]>([]);

  useEffect(() => {
    const dataRef = ref(db, "items");
    get(dataRef).then((firebaseData) => {
      const convertedData: LeaderboardItem[] = Object.values(
        firebaseData.val()
      );
      setData(convertedData);
    });
  }, []);

  const columns: Column<LeaderboardItem>[] = useMemo(
    () => [
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
    <div>
      <h1>Leaderboard</h1>
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
    </div>
    // <div>
    //   <h1>Leaderboard</h1>
    //   <table {...getTableProps()}>
    //     <thead>
    //       {headerGroups.map((headerGroup) => (
    //         <tr {...headerGroup.getHeaderGroupProps()}>
    //           {headerGroup.headers.map((column) => (
    //             <th {...column.getHeaderProps()}>{column.render("Header")}</th>
    //           ))}
    //         </tr>
    //       ))}
    //     </thead>
    //     <tbody {...getTableBodyProps()}>
    //       {rows.map((row) => {
    //         prepareRow(row);
    //         return (
    //           <tr {...row.getRowProps()}>
    //             {row.cells.map((cell) => (
    //               <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
    //             ))}
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </div>
  );
}

export default App;
