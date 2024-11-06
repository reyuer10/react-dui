import { useContext } from "react";
import { colorGameContext } from "../App";

function TableInfo() {
  const storedTable = localStorage.getItem("table");
  const { serialNum } = useContext(colorGameContext);

  return (
    <div className="font-rubik flex flex-col">
      <label className="text-xl font-black text-orange-800 flex justify-between">
        <p>Table Name:</p>
        <p>{storedTable}</p>
      </label>
      <label className="text-xl font-black text-orange-800 flex justify-between">
        <p>Serial No:</p>
        <p>{serialNum}</p>
      </label>
    </div>
  );
}

export default TableInfo;
