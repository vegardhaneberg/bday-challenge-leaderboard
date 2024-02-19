import { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import { COLUMNS, LeaderboardItem } from "../../utils/TableUtils";
import "./TableComponent.css";
import { getPlayers } from "../../utils/FirebaseHelper";
import { convertPlayersToLeaderboardItems } from "../../utils/BdayChallengeHelper";

function TableComponent() {
  const [data, setData] = useState<LeaderboardItem[]>([]);
  useEffect(() => {
    getPlayers().then((players) => {
      const test = convertPlayersToLeaderboardItems(players);
      setData(test);
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
