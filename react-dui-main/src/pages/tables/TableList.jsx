import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { colorGameContext } from "../../App";
import { updateTableInfo } from "../../api/tableApi";
import { getColorGameTable } from "../../api/colorGameApi";
import ModalNewTable from "../../modal/ModalNewTable";
import useLocalStorage from "../../custom/useLocalStorage";

function TableList() {
  const navigate = useNavigate();
  const { colorGameData, handleJoinTable, socket } = useContext(colorGameContext);
  const { getItem, removeItem, setItem } = useLocalStorage();

  const adminAccess = getItem("itadmin");
  const userAccess = getItem("user");



  const [newTable, setNewTable] = useState({
    isOpenNewTable: false,
    newTableName: "",
    newTableMin: 0,
    newTableMax: 0,
  })


  const [editTable, setEditTable] = useState({
    isEditTable: false,
    getTableId: null,
    tableName: "",
    tableMin: 0,
    tableMax: 0,
  })


  const handleOnChangeTable = (e) => {
    const { value, name } = e.target;

    setEditTable(prevValue => ({ ...prevValue, [name]: value }))
  }


  const handleOnChangeNewTable = (e) => {
    const { value, name } = e.target;
    setNewTable(prevValue => ({ ...prevValue, [name]: value }))
  }


  const handleLogout = () => {
    if (adminAccess) {
      navigate("/");
      return removeItem("itadmin");
    } else if (userAccess) {
      navigate("/");
      return removeItem("user");
    }


  };

  const handleEditTable = (tableId, tableNameValue, minValue, maxValue) => {
    setEditTable(prevValue => (
      {
        ...prevValue,
        isEditTable: true,
        getTableId: tableId,
        tableName: tableNameValue,
        tableMin: minValue,
        tableMax: maxValue
      }
    ))

  }

  const handleCancelEditTable = () => {
    setEditTable(prevValue => (
      {
        ...prevValue,
        isEditTable: false,
        tableName: "",
        tableMin: 0,
        talbeMax: 0
      }
    ))
  }

  const handleSaveUpdatedTableInfo = async (table_name, table_min, table_max, table_id) => {
    try {
      const response = await updateTableInfo({
        table_name: table_name,
        table_min: table_min,
        table_max: table_max,
        table_id: table_id,
      })

      if (response && socket && socket.readyState === WebSocket.OPEN) {
        const updateTable = await getColorGameTable()
        socket.send(JSON.stringify({
          type: "update_tableInfo",
          room: "table_list",
          response: updateTable,
        }))

        setEditTable(prevValue => (
          {
            ...prevValue,
            isEditTable: false,
            tableName: "",
            tableMin: 0,
            talbeMax: 0
          }
        ))


        return response.data;
      }
    } catch (error) {
      console.log("error updating the table", error);
    }
  }

  const handleOpenNewTable = () => {
    setNewTable(prevValue => ({
      ...prevValue, isOpenNewTable: true,
    }));
  }

  const handleRouteTableHistory = (table_id) => {
    setItem("history:table_id", table_id);
    navigate("/color-game/table/history");
  }

  useEffect(() => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({
        type: "join-room:table_list",
        room: "table_list",
      }))
    }
  }, [socket])





  return (
    <div className="min-h-screen bg-cover font-rubik flex flex-col items-center justify-center bg-[url(assets/pictures/casino-bg.jpg)]">
      <div className="absolute left-0 top-0 p-5">
        <button onClick={handleLogout} className="font-bold text-amber-400">
          LOGOUT
        </button>
      </div>
      <div>
        <p className="text-[42px] font-black m-8 text-white primary-drop-shadow">
          Select Table
        </p>
      </div>
      <div className="w-[60%]">
        {adminAccess ? (
          <div className=" text-white text-right my-2">
            <button onClick={handleOpenNewTable} className="text-white text-drop-shadow font-black bg-zinc-700 py-2 px-4 rounded-md">New Table</button>
          </div>
        ) :
          null}
        <div className=" bg-zinc-600 border-[6px] border-zinc-700 rounded-2xl">
          <table className="w-full shadow-black shadow-inner rounded-xl ">
            <thead>
              <tr>
                <th className=" bg-zinc-700 border-b border-black text-white px-6">
                  Name
                </th>
                <th className=" bg-zinc-700 border-black text-white px-6">
                  MIN
                </th>
                <th className=" bg-zinc-700 border-black text-white px-6">
                  MAX
                </th>
                <th className=" bg-zinc-700 border-black text-white  px-6">Current Round</th>
                {adminAccess ?
                  (<th className=" bg-zinc-700 border-black text-white px-20">
                    Modify
                  </th>) :
                  null
                }
                <th className=" bg-zinc-700 border-black text-white">
                  Action
                </th>
                <th className=" bg-zinc-700 border-black text-white">History</th>
              </tr>
            </thead>
            <tbody className="m-6 shadow-black shadow-inner border-zinc-700 rounded-b-xl">
              {colorGameData.map((c) => {
                return (
                  <tr key={c.table_id} className=" border-t border-black">
                    {c.table_id === editTable.getTableId && editTable.isEditTable ? (
                      <>
                        <td className="text-center py-2 font-bold border-r border-black text-white">
                          <input type="text" autoComplete="off" className="w-[130px] bg-zinc-600 text-amber-300 font-black text-center outline-none" value={editTable.tableName} name="tableName" onChange={handleOnChangeTable} />
                        </td>
                        <td className="text-center font-bold border-r border-black text-white">
                          <input type="number" autoComplete="off" className="w-[130px] bg-zinc-600 text-amber-300 font-bold text-center outline-none" value={editTable.tableMin} name="tableMin" onChange={handleOnChangeTable} />
                        </td>
                        <td className="text-center font-bold border-r border-black text-white">
                          <input type="number" autoComplete="off" className="w-[130px] bg-zinc-600 text-amber-300 font-bold text-center outline-none" value={editTable.tableMax} name="tableMax" onChange={handleOnChangeTable} />
                        </td>
                        <td className="text-center font-bold border-r border-black text-white">
                          {c.current_round}
                        </td>
                        <td className="text-center font-bold border-r border-black text-white space-x-4">
                          <button className="px-4 bg-zinc-300 text-black rounded-md" onClick={() => handleCancelEditTable()}>Cancel</button>
                          <button className="px-4 bg-black text-white rounded-md" onClick={() => handleSaveUpdatedTableInfo(editTable.tableName, editTable.tableMin, editTable.tableMax, editTable.getTableId)}>Save</button>
                        </td>
                      </>) :
                      (<>
                        <td className="text-center py-2 font-black border-r border-black text-white px-12">
                          {c.table_name}
                        </td>
                        <td className="text-center font-bold border-r border-black px-14 text-white">
                          {c.table_min}
                        </td>
                        <td className="text-center font-bold border-r border-black px-14 text-white">
                          {c.table_max}
                        </td>
                        <td className="text-center font-bold border-r border-black text-white">
                          {c.current_round}
                        </td>
                        {adminAccess ?
                          (
                            <td className="text-center font-bold border-r border-black text-white px-12">
                              <button onClick={() => handleEditTable(c.table_id, c.table_name, c.table_min, c.table_max)} className="bg-black text-white px-4 rounded-md" >Edit</button>
                            </td>
                          ) :
                          null}
                      </>)}
                    <td  className="text-center font-bold border-r border-black text-white">
                      <button
                        onClick={() => handleJoinTable(c.table_name, c.table_id, c.game_count, c.table_min, c.table_max)}
                        className={`font-bold bg-black text-slate-200 px-4 rounded-lg mx-10`}
                      >
                        Open
                      </button>
                    </td>
                    <td  className="text-center font-bold border-r border-black text-white">
                      <button
                        onClick={() => handleRouteTableHistory(c.table_id)}
                        className={`font-bold bg-black text-slate-200 px-4 rounded-lg mx-10`}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <ModalNewTable isOpenNewTable={newTable.isOpenNewTable} setNewTable={setNewTable} socket={socket} />
    </div>
  );
}

export default TableList;
