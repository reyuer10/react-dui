import React, { useEffect, useRef, useState } from 'react'
import { getSpecificTableInfo, getSpecificTableInfoPerRound } from '../api/tableApi';
import useLocalStorage from '../custom/useLocalStorage';
import colorGameLogo from "../assets/pictures/color-game-logo.png";
import { useNavigate } from 'react-router-dom';

function TableHistory() {


    const navigate = useNavigate();
    const { removeItem, getItem } = useLocalStorage()
    const table_id = getItem("history:table_id");
    const divRef = useRef(null)

    const [isLoading, setIsLoading] = useState(false);
    const [tableGame, setTableGame] = useState({
        tableGameInfo: [],
        tableNumPerGame: [],
        selectGameRound: 0
    });

    const [tablePagination, setTablePagination] = useState({
        tableCurrentPage: 1,
        itemsPerPage: 15,
    })





    const [tableInfoPerRound, setTableInfoPerRound] = useState([]);
    const [tableId, setTableId] = useState(null)



    useEffect(() => {
        async function fetchColorGameData() {
            setIsLoading(true)
            try {
                if (table_id) {
                    const response = await getSpecificTableInfo({ table_id: table_id });
                    console.log(response)
                    setTableGame(tableGamePreValue => ({
                        ...tableGamePreValue,
                        tableGameInfo: response.tableInfo[0],
                        tableNumPerGame: response.tableGame
                    }))
                } else {
                    console.log("No table found.");
                }

            } catch (error) {
                console.log("error fetching data from color game table.", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchColorGameData();
    }, []);

    const handleFetchTableInfoPerGame = async (game_num) => {
        try {
            if (table_id) {
                const response = await getSpecificTableInfoPerRound({ table_id: table_id, game_num: game_num });
                setTableId(game_num)
                setTableInfoPerRound(response.infoPerRound)

                setTablePagination(tablePaginationPrevValue => ({
                    ...tablePaginationPrevValue,
                    tableCurrentPage: tablePaginationPrevValue.tableCurrentPage = 1
                }))
                return response
            } else {
                console.log("Error: No table found.")
            }

        } catch (error) {
            console.log("error fetching table game info.", error)
        }
    }

    const handleNumFormat = (num) => Number(num).toLocaleString()

    let tableMinFormat = handleNumFormat(tableGame.tableGameInfo.table_min)
    let tableMaxFormat = handleNumFormat(tableGame.tableGameInfo.table_max)


    const handleRouteBack = () => {
        removeItem("history:table_id");
        navigate("/color-game/select-table");
    }



    const tableLastIndex = tablePagination.tableCurrentPage * tablePagination.itemsPerPage // 1 * 15 = 15
    const tableFirstIndex = tableLastIndex - tablePagination.itemsPerPage // 15 - 15 = 0
    const tableCurrentItems = tableInfoPerRound.slice(tableFirstIndex, tableLastIndex);
    const tableLastPage = Math.ceil(tableInfoPerRound.length / tablePagination.itemsPerPage);
    console.log(tableLastPage)

    const handlePreviousPage = () => {
        if (tablePagination.tableCurrentPage > 0) {
            setTablePagination(prevValue => ({ ...prevValue, tableCurrentPage: prevValue.tableCurrentPage - 1 }))
        }
    }
    const handleNextPage = () => {
        if (tablePagination.tableCurrentPage < tableLastPage) {
            setTablePagination(prevValue => ({ ...prevValue, tableCurrentPage: prevValue.tableCurrentPage + 1 }))
        }
    }

    const handlePrintPage = () => {
        const content = divRef.current
        const printWindow = window.open('', '', 'height=1080,width=1920');
        printWindow.document.write(`<html>
            <head>
                 <title>
                          TABLE GAME: ${tableGame.tableGameInfo.table_name}
                  </title>
                </head>
            <body>`);
        printWindow.document.write(content.innerHTML); // Write the content of the div
        printWindow.document.write(`
            </body>
            </html>`);
        printWindow.document.close(); // Close the document stream
        printWindow.print()
    }


    return (
        <div className="min-h-screen bg-cover bg-[url(assets/pictures/casino-bg.jpg)] font-rubik">
            {isLoading ? (
                <div className=' min-h-screen font-rubik flex items-center justify-center'>
                    <img src={colorGameLogo} alt="casino-logo" className="w-[20%]" />
                </div>) : (
                <div>
                    <div>
                        <button onClick={handleRouteBack} className='text-[18px] text-white font-black p-4'>BACK</button>
                    </div>
                    <div className='flex justify-between items-start font-rubik'>
                        <div className='p-4 space-y-4'>
                            <div>
                                <label className='text-white text-sm font-bold'>Table Name: </label>
                                <p className='text-[32px] text-amber-300 font-black'>{tableGame.tableGameInfo.table_name}</p>
                            </div>
                            <div className='flex flex-col w-[250px] border p-4'>
                                <div className='flex justify-between'>
                                    <p className='text-amber-300 font-black'>{tableGame.tableGameInfo.game_count}</p>
                                    <label className='text-white '>Game played</label>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='text-amber-300 font-black'>{tableMinFormat}</p>
                                    <label className='text-white'>Table Min</label>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='text-amber-300 font-black'>{tableMaxFormat}</p>
                                    <label className='text-white'>Table Max</label>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <label className='text-white text-sm font-bold'>Game Played: </label>
                                <div className='w-[250px] grid grid-cols-5 gap-y-4'>
                                    {tableGame.tableNumPerGame.map((t, index) => {
                                        return (
                                            <div key={index}>
                                                <button onClick={() => handleFetchTableInfoPerGame(t.game_num)} className={`${tableId === t.game_num ? "bg-zinc-400  text-white" : "bg-zinc-700 text-white"} transition-colors font-bold h-[40px] w-[40px] text-sm rounded-lg `}>{t.game_num}</button>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="w-full mx-10 space-y-4">
                            <div className='shadow-black shadow-inner rounded-2xl border-[5px] border-zinc-700  bg-zinc-700'>
                                <table className="table-auto w-full">
                                    <thead className=' '>
                                        <tr className='text-[12px]'>
                                            <th className=" font-bold bg-zinc-700  text-white px-6">Serial Number</th>
                                            <th className=" font-bold bg-zinc-700  text-white">Round</th>
                                            <th className=" font-bold bg-zinc-700  text-white px-6">Total Bet</th>
                                            <th className=" font-bold bg-zinc-700  text-white">Result<br />Color</th>
                                            <th className=" font-bold bg-zinc-700  text-white">Minor<br /> Increment</th>
                                            <th className=" font-bold bg-zinc-700  text-white">Major<br /> Increment</th>
                                            <th className=" font-bold bg-zinc-700  text-white">Grand<br />Increment</th>
                                            <th className=" font-bold bg-zinc-700  text-white px-6">Current<br />Minor</th>
                                            <th className=" font-bold bg-zinc-700  text-white px-6">Current<br />Major</th>
                                            <th className=" font-bold bg-zinc-700  text-white px-6">Current<br /> Grand</th>
                                        </tr>
                                    </thead>
                                    <tbody ref={divRef} className="shadow-inner shadow-black rounded-b-2xl  border-zinc-700">
                                        {tableCurrentItems.map((t, index) => {
                                            return (
                                                <tr key={index} className='text-center text-[12px]'>
                                                    <td className='py-2 text-white border-t border-black  px-10'>{t.serial_num}</td>
                                                    <td className='py-2 text-white border-t border-black '>{t.round_num}</td>
                                                    <td className='py-2 text-white border-t border-black '>{t.amount_totalBet}</td>
                                                    <td className='py-2 text-white border-t border-black  px-5'>{t.result_firstColor}, {t.result_secondColor}, {t.result_thirdColor}</td>
                                                    <td className='py-2 text-white border-t border-black '>{t.minor_increment}</td>
                                                    <td className='py-2 text-white border-t border-black '>{t.major_increment}</td>
                                                    <td className='py-2 text-white border-t border-black '>{t.grand_increment}</td>
                                                    <td className='py-2 text-white border-t border-black '>{t.current_minor}</td>
                                                    <td className='py-2 text-white border-t border-black '>{t.current_major}</td>
                                                    <td className='py-2 text-white border-t border-black '>{t.current_grand}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className='text-right space-x-2 flex justify-end items-center '>
                                <button onClick={handlePrintPage} className=' bg-zinc-800 px-4 py-2 rounded-lg flex items-center space-x-2'>
                                    <span className='text-white font-bold text-sm'>Print</span>
                                    <svg className=' fill-current text-white' xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="22" height="22"><path d="M19,6V4a4,4,0,0,0-4-4H9A4,4,0,0,0,5,4V6a5.006,5.006,0,0,0-5,5v5a5.006,5.006,0,0,0,5,5,3,3,0,0,0,3,3h8a3,3,0,0,0,3-3,5.006,5.006,0,0,0,5-5V11A5.006,5.006,0,0,0,19,6ZM7,4A2,2,0,0,1,9,2h6a2,2,0,0,1,2,2V6H7ZM17,21a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1Zm5-5a3,3,0,0,1-3,3V17a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v2a3,3,0,0,1-3-3V11A3,3,0,0,1,5,8H19a3,3,0,0,1,3,3Z" /><path d="M18,10H16a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" /></svg>
                                </button>
                                <button
                                    disabled={tablePagination.tableCurrentPage === 1}
                                    onClick={handlePreviousPage}
                                    className={`text-white text-sm font-bold rounded-lg px-4 py-2 bg-zinc-800 ${tablePagination.tableCurrentPage === 1 ? "opacity-50" : ""}`}
                                >Previous
                                </button>
                                <span
                                    className='text-white px-4 rounded-lg bg-zinc-800 font-bold text-sm py-2'
                                >{tablePagination.tableCurrentPage}</span>
                                <button
                                    disabled={tablePagination.tableCurrentPage === Math.ceil(tableInfoPerRound.length / tablePagination.itemsPerPage)}
                                    onClick={handleNextPage}
                                    className={`text-white text-sm font-bold rounded-lg px-4 py-2 bg-zinc-800 ${tablePagination.tableCurrentPage === Math.ceil(tableInfoPerRound.length / tablePagination.itemsPerPage) ? "opacity-50" : ""}`}
                                >Next
                                </button>
                            </div>
                            <div className='hidden' ref={divRef}>
                                <table style={{ fontFamily: "monospace", tableLayout: "auto", width: "100%", border: "1px solid black", borderCollapse: "collapse" }}>
                                    <thead>
                                        <tr>
                                            <th style={{ border: "1px solid black" }}>Serial Number</th>
                                            <th style={{ border: "1px solid black" }}>Round</th>
                                            <th style={{ border: "1px solid black" }}>Total Bet</th>
                                            <th style={{ border: "1px solid black" }}>Result <br />Color</th>
                                            <th style={{ border: "1px solid black" }}>Minor <br /> Increment</th>
                                            <th style={{ border: "1px solid black" }}>Major <br /> Increment</th>
                                            <th style={{ border: "1px solid black" }}>Grand <br /> Increment</th>
                                            <th style={{ border: "1px solid black" }}>Current <br /> Minor</th>
                                            <th style={{ border: "1px solid black" }}>Current <br /> Major</th>
                                            <th style={{ border: "1px solid black" }}>Current <br /> Grand</th>
                                        </tr>
                                    </thead>
                                    <tbody className='tr-body'>
                                        {tableInfoPerRound.map((t, index) => {
                                            return (
                                                <tr key={index} style={{ textAlign: "center" }} >
                                                    <td style={{ border: "1px solid black" }}>{t.serial_num}</td>
                                                    <td style={{ border: "1px solid black" }}>{t.round_num}</td>
                                                    <td style={{ border: "1px solid black" }}>{t.amount_totalBet}</td>
                                                    <td style={{ border: "1px solid black" }}>{t.result_firstColor}, {t.result_secondColor}, {t.result_thirdColor}</td>
                                                    <td style={{ border: "1px solid black" }}>{t.minor_increment}</td>
                                                    <td style={{ border: "1px solid black" }}>{t.major_increment}</td>
                                                    <td style={{ border: "1px solid black" }}>{t.grand_increment}</td>
                                                    <td style={{ border: "1px solid black" }}>{t.current_minor}</td>
                                                    <td style={{ border: "1px solid black" }}>{t.current_major}</td>
                                                    <td style={{ border: "1px solid black" }}>{t.current_grand}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div >
                </div >
            )
            }
        </div >
    )
}

export default TableHistory