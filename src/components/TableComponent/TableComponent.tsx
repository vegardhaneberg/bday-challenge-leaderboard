import { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import { COLUMNS, LeaderboardItem } from "../../utils/TableUtils";
import { ref, get } from "firebase/database";
import { db } from "../../firebaseConfig";
import "./TableComponent.css";

function TableComponent() {
  const [data, setData] = useState<LeaderboardItem[]>([]);
  useEffect(() => {
    const dataRef = ref(db, "items");
    get(dataRef).then((firebaseData) => {
      let convertedData: LeaderboardItem[] = Object.values(firebaseData.val());
      convertedData = convertedData.sort((a, b) => a.time - b.time);
      setData(convertedData);
    });
  }, []);

  const columns = useMemo(() => COLUMNS, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <h1 className="tableHeader">&#127866; Leaderboard &#127866;</h1>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr className="tableHeader" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TableComponent;
