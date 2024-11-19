import { useContext, useEffect, useState } from "react";
import { colorGameContext } from "../App";

function TableInfo() {
  const [tableInfo, setTableInfo] = useState({
    tableName: "",
    tableMin: 0,
    tableMax: 0
  })
  const storedTable = localStorage.getItem("table");
  const storedMin = localStorage.getItem("min");
  const storedMax = localStorage.getItem("max");

  useEffect(() => {
    if (storedTable && storedMin && storedMax) {
      setTableInfo(prevTableInfo => ({
        ...prevTableInfo,
        tableName: storedTable,
        tableMin: storedMin,
        tableMax: storedMax
      }))
    }
  }, [])

  const { serialNum } = useContext(colorGameContext);

  return (
    <div className="font-rubik flex flex-col">
      <div className="border-orange-500 rounded-xl border-[5px]">
        <table className="w-full table-auto">
          <thead className="bg-orange-500">
            <tr>
              <th className="text-orange-800 font-black">MIN</th>
              <th className="text-orange-800 font-black">MAX</th>
            </tr>
          </thead>
          <tbody className="text-center shadow-inner shadow-black rounded-b-lg">
            <tr>
              <td className="font-bold border-r border-black">{tableInfo.tableMin}</td>
              <td className="font-bold border-l border-black">{tableInfo.tableMax}</td>
            </tr>

          </tbody>
        </table>
      </div>
      <label className="text-xl font-black text-orange-800 flex justify-between">
        <p>Table Name:</p>
        <p>{tableInfo.tableName}</p>
      </label>
      <label className="text-xl font-black text-orange-800 flex justify-between">
        <p>Serial No:</p>
        <p>{serialNum}</p>
      </label>
    </div>
  );
}

export default TableInfo;
