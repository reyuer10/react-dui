import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { colorGameContext } from "../../App";

function TableList() {
  const { colorGameData, handleJoinTable } = useContext(colorGameContext);
  const navigate = useNavigate();


  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("itadmin")
  };

  return (
    <div className="min-h-screen font-rubik flex flex-col items-center justify-center bg-gradient-to-t from-gray-700 via-amber-600 to-amber-400">
      <div className="absolute left-0 top-0 p-5">
        <button onClick={handleLogout} className="font-bold text-orange-700">
          LOGOUT
        </button>
      </div>
      <div>
        <p className="text-[42px] font-black m-8 text-white primary-drop-shadow">
          Select Table
        </p>
      </div>
      <div className="border-[6px] border-zinc-700 rounded-2xl w-[60%] bg-zinc-600">
        <table className="w-full ">
          <thead className="">
            <tr>
              <th className="px-4 bg-zinc-700 border-b border-black text-white">
                Name
              </th>
              <th className="px-4 bg-zinc-700 border-b border-l border-black text-white">
                Date Modified
              </th>
              <th className="px-4 bg-zinc-700 border-b border-l border-black text-white">
                MIN
              </th>
              <th className="px-4 bg-zinc-700 border-b border-l border-black text-white">
                MAX
              </th>
              <th className="px-4 bg-zinc-700 border-b border-l border-black text-white">Current Round</th>
              <th className="px-4 bg-zinc-700 border-b border-l border-black text-white">
                Status
              </th>
              <th className="px-4 bg-zinc-700 border-b border-l border-black text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="m-6 ">
            {colorGameData.map((c) => {
              return (
                <tr key={c.table_id} className=" border-t border-black">
                  <td className="text-center py-2 font-black border-r border-black text-white">
                    {c.table_name}
                  </td>
                  <td className="text-center border-r border-black text-white">
                    {new Date(c.table_timestamp).toLocaleString()}
                  </td>
                  <td className="text-center font-bold border-r border-black text-white">
                    {c.table_min}
                  </td>
                 
                  <td className="text-center font-bold border-r border-black text-white">
                    {c.table_max}
                  </td>
                  <td className="text-center font-bold border-r border-black text-white">
                    {c.current_round}
                  </td>
                  <td className="text-center font-bold border-r border-black text-white">
                    Available
                  </td>
                  {/* <td className="text-center font-bold border-r border-black text-white">
                    <button
                      className={`${
                        d.status === "Available" ? "bg-green-500" : "bg-red-500"
                      } font-bold bg-black text-slate-200 px-4 rounded`}
                    >
                      {d.status}
                    </button>
                  </td> */}
                  <td className="text-center">
                    <button
                      onClick={() => handleJoinTable(c.table_name)}
                      // disabled={d.status === "Playing"}
                      // ${
                      //   d.status === "Available" ? "" : " opacity-50"
                      // }
                      className={`font-bold bg-black text-slate-200 px-4 rounded`}
                    >
                      Open
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableList;
