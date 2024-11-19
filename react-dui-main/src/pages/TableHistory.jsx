import React, { useEffect, useState } from 'react'
import { getSpecificTableInfo, getSpecificTableInfoPerRound } from '../api/tableApi';
import useLocalStorage from '../custom/useLocalStorage';
import colorGameLogo from "../assets/pictures/color-game-logo.png";
import { useNavigate } from 'react-router-dom';

function TableHistory() {
    const navigate = useNavigate();
    const { removeItem, getItem } = useLocalStorage()
    const table_id = getItem("history:table_id");

    const [isLoading, setIsLoading] = useState(false);
    const [tableGame, setTableGame] = useState({
        tableGameInfo: [],
        tableNumPerGame: [],
        selectGameRound: 0
    });


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

    console.log(tableId)

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
                    <div className='flex justify-between items-start'>
                        <div className='p-4 space-y-4'>
                            <div>
                                <label className='text-white text-sm font-bold'>Table Name: </label>
                                <p className='text-[32px] text-amber-300 font-black'>{tableGame.tableGameInfo.table_name}</p>
                            </div>
                            <div className='flex flex-col w-[250px] border p-4'>
                                <div className='flex justify-between'>
                                    <p className='text-amber-300'>{tableGame.tableGameInfo.game_count}</p>
                                    <label className='text-white '>Game played</label>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='text-amber-300'>{tableMinFormat}</p>
                                    <label className='text-white'>Table Min</label>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='text-amber-300'>{tableMaxFormat}</p>
                                    <label className='text-white'>Table Max</label>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <label className='text-white text-sm font-bold'>Game Played: </label>
                                <div className=' flex space-x-4'>
                                    {tableGame.tableNumPerGame.map((t, index) => {
                                        return (
                                            <div key={index}>
                                                <button onClick={() => handleFetchTableInfoPerGame(t.game_num)} className={`${tableId === t.game_num ? "bg-zinc-400  text-white" : "bg-zinc-700 text-white"} transition-colors font-bold h-[30px] w-[30px] text-sm rounded-lg `}>{t.game_num}</button>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                        <div className="w-full shadow-black shadow-inner rounded-2xl border-[5px] border-zinc-700 mx-10 bg-zinc-700">
                            <table className="table-auto w-full">
                                <thead className=' '>
                                    <tr className='text-[12px]'>
                                        <th className=" font-bold bg-zinc-700  text-white px-6">Serial Number</th>
                                        <th className=" font-bold bg-zinc-700  text-white px-6">Round</th>
                                        <th className=" font-bold bg-zinc-700  text-white px-6">Total Bet</th>
                                        <th className=" font-bold bg-zinc-700  text-white px-6">Result Color</th>
                                        <th className=" font-bold bg-zinc-700  text-white px-6">Minor Increment</th>
                                        <th className=" font-bold bg-zinc-700  text-white px-6">Major Increment</th>
                                        <th className=" font-bold bg-zinc-700  text-white px-6">Grand Increment</th>
                                        <th className=" font-bold bg-zinc-700  text-white px-6">Current Minor</th>
                                        <th className=" font-bold bg-zinc-700  text-white px-6">Current Major</th>
                                        <th className=" font-bold bg-zinc-700  text-white px-6">Current Grand</th>
                                    </tr>
                                </thead>
                                <tbody className="shadow-inner shadow-black rounded-b-2xl  border-zinc-700">{tableInfoPerRound.map((t, index) => {
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

                    </div>

                </div>
            )}
        </div>
    )
}

export default TableHistory