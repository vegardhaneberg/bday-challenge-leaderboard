export interface BredvidData {
  name: string;
  points: number[];
}

export interface BredvidTableData {
  name: string;
  totalPoints: number;
}

// Function to read the Excel file
export async function getBredvidData(
  filePath: string
): Promise<BredvidTableData[]> {
  try {
    console.log("reading data");
    const response = await fetch(filePath);
    const responseText = await response.text();
    const rows = responseText.split("\n").slice(1);
    const returnList: BredvidData[] = [];

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].length == 0) continue;
      const splittedRow = rows[i].split(";");
      const currentPlayer: BredvidData = {
        name: splittedRow[0],
        points: splittedRow
          .slice(1, splittedRow.length - 1)
          .map((i) => (i.length > 0 ? parseInt(i) : 0)),
      };
      returnList.push(currentPlayer);
    }

    const tableData: BredvidTableData[] = returnList.map((data) => ({
      name: data.name,
      totalPoints: data.points
        .sort((a, b) => b - a)
        .slice(0, 7)
        .reduce((acc, current) => acc + current, 0), // Summing up points
    }));

    tableData.sort((a, b) => b.totalPoints - a.totalPoints);

    return tableData;
  } catch (error) {
    console.error("Error reading Excel file:", error);
    return [];
  }
}
