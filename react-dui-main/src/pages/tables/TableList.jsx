import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TableList() {
  const navigate = useNavigate();

  const [dataTables, setDataTables] = useState([
    {
      id: 1,
      name: "CJ01",
      dateCreated: new Date().toLocaleString(),
      status: "Available",
    },
    {
      id: 2,
      name: "CJ02",
      dateCreated: new Date().toLocaleString(),
      status: "Available",
    },
    {
      id: 3,
      name: "CJ03",
      dateCreated: new Date().toLocaleString(),
      status: "Playing",
    },
    {
      id: 4,
      name: "CJ04",
      dateCreated: new Date().toLocaleString(),
      status: "Playing",
    },
  ]);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen font-rubik flex flex-col items-center justify-center bg-gradient-to-t from-gray-700 via-amber-600 to-amber-400">
      <div className="absolute left-0 top-0 p-5">
        <button onClick={handleLogout} className="font-bold text-orange-700">
          LOGOUT
        </button>
      </div>
      <div>
        <p className="text-[42px] font-black m-8">Select Table</p>
      </div>
      <div className="border-[6px] border-black rounded-3xl w-[60%]">
        <table className="w-full ">
          <thead>
            <tr>
              <th className="px-4 border-b border-black ">Name</th>
              <th className="px-4 border-b border-l border-black">
                Date Created
              </th>
              <th className="px-4 border-b border-l border-black">Status</th>
              <th className="px-4 border-b border-l border-black">Action</th>
            </tr>
          </thead>
          <tbody className="m-6">
            {dataTables.map((d) => {
              return (
                <tr key={d.id} className=" border-t border-black">
                  <td className="text-center py-2 font-black">{d.name}</td>
                  <td className="text-center">{d.dateCreated}</td>
                  <td className="text-center">{d.status}</td>
                  <td className="text-center">
                    <button className="font-bold">Open</button>
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
