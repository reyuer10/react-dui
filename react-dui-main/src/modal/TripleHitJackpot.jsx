import React, { useContext } from 'react'
import { colorGameContext } from '../App'
import { getResults, updateResults } from '../api/dealerApi';

function TripleHitJackpot() {
    const { tableObject, setTableObject, socket, trendColorBet } = useContext(colorGameContext);
    const storedTable = localStorage.getItem("table");

    console.log(tableObject)


    const handleUpdateResults = async () => {
        try {

            if (tableObject.result_spin.trim() === "") {
                setTableObject(prevValue => ({ ...prevValue, isEmpty: true }))
                return;
            } else if (tableObject.code.trim() === "") {
                setTableObject(prevValue => ({ ...prevValue, isCodeEmpty: true }));
                return;
            }


            const response = await updateResults({ result_ID: tableObject.result_ID, result_spin: tableObject.result_spin });
            const newResults = await getResults({ table_name: storedTable });
            // console.log(newResults)


            if (storedTable && socket && socket.readyState === WebSocket.OPEN) {
                socket.send(JSON.stringify({
                    type: "reset_prizes",
                    response: newResults.prizes_amount,
                }))

                socket.send(JSON.stringify({
                    type: "open_modal_jackpot",
                    room: storedTable,
                    isOpenModal: true,
                    result_spin: tableObject.displaySpinResults
                }))


                socket.send(JSON.stringify({
                    type: "update_resultSpin",
                    room: storedTable,
                    response: newResults?.sortColorResults
                }))
            }

            if (response) {
                setTableObject(prevValue => (
                    {
                        ...prevValue,
                        result_spin: "",
                        code: "",
                        isEmpty: false,
                        result_ID: 0,
                        openModalTripleColor: false,
                        isOpenModalJackpotHit: true,
                    }
                ));
            }


            return response;
        } catch (error) {
            console.log("error updating results.", error)
        }
    }

    const handleCodeOnchange = (e) => setTableObject(prevValue => ({ ...prevValue, code: e.target.value }))


    const handleGetResultSpin = (value, background, border, width) => {
        setTableObject(prevValue => (
            {
                ...prevValue,
                result_spin: value,
                displaySpinResults: value,
                isEmpty: tableObject.isEmpty === true && false,
                background: background,
                width: width,
                border_color: border,
            }
        ));
    }

    return (
        <div className='font-rubik'>
            <div className='text-center '>
                <p className='triplejp-title  text-[#FFF9C7] font-black text-[72px]'>TRIPLE COLOR HIT!</p>
            </div>
            <div className='w-[1200px] border-[15px] border-[#0A1A10] ring-amber-300 ring-[4px] flex flex-col bg-gradient-to-r from-[#0A1A10] via-[#2C553A] to-[#0A1A10] p-8 rounded-2xl space-y-8 shadow-inner shadow-black '>
                <div>
                    <div className='text-center p-4 space-y-[80px]'>
                        <div className='space-x-5'>
                            <button onClick={() => handleGetResultSpin("x3", "bg-[#D92426]", "border-[#D92426]", "w-[150px]", "text-[42px]")} className={`ring-[5px] ${tableObject.isEmpty ? "ring-red-600" : "ring-black"} text-[42px] text-drop-shadow font-black text-white border-[5px] bg-[#D92426] shadow-inner shadow-black w-[150px] rounded-xl border-[#D92426]`}>
                                x3
                            </button>
                            <button onClick={() => handleGetResultSpin("x10", "bg-[#1795D2]", "border-[#1795D2]", "w-[150px]", "text-[42px]")} className={`ring-[5px] ${tableObject.isEmpty ? "ring-red-600" : "ring-black"}   text-[42px] text-drop-shadow font-black text-white border-[5px] bg-[#1795D2] shadow-inner shadow-black w-[150px] rounded-xl border-[#1795D2]`}>
                                x10
                            </button>
                            <button onClick={() => handleGetResultSpin("x20", "bg-[#FCCC0A]", "border-[#FCCC0A]", "w-[150px]", "text-[42px]")} className={`ring-[5px] ${tableObject.isEmpty ? "ring-red-600" : "ring-black"}   text-[42px] text-drop-shadow font-black text-white border-[5px] bg-[#FCCC0A] shadow-inner shadow-black w-[150px] rounded-xl border-[#FCCC0A]`}>
                                x20
                            </button>
                            <button onClick={() => handleGetResultSpin("x60", "bg-[#62B346]", "border-[#62B346]", "w-[150px]", "text-[42px]")} className={`ring-[5px] ${tableObject.isEmpty ? "ring-red-600" : "ring-black"}   text-[42px] text-drop-shadow font-black text-white border-[5px] bg-[#62B346] shadow-inner shadow-black w-[150px] rounded-xl border-[#62B346]`}>
                                x60
                            </button>
                            <button onClick={() => handleGetResultSpin("x100", "bg-[#EF5F93]", "border-[#EF5F93]", "w-[150px]", "text-[42px]")} className={`ring-[5px] ${tableObject.isEmpty ? "ring-red-600" : "ring-black"}   text-[42px] text-drop-shadow font-black text-white border-[5px] bg-[#EF5F93] shadow-inner shadow-black w-[150px] rounded-xl border-[#EF5F93]`}>
                                x100
                            </button>
                        </div>
                        <div className='flex space-x-4'>
                            <button onClick={() => handleGetResultSpin("Minor Jackpot", "bg-gradient-to-r from-green-700 via-green-400 to-green-700", "border-green-500")} className={`${tableObject.isEmpty ? "ring-red-600" : "ring-black"} ring-[5px] ring-black text-[32px] w-[700px] font-black text-green-200 text-drop-shadow border-[5px] bg-gradient-to-r from-green-700 via-green-400 to-green-700 shadow-inner shadow-black p-4 rounded-xl border-green-500`}>
                                MINOR JACKPOT
                            </button>
                            <button onClick={() => handleGetResultSpin("Major Jackpot", "bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700", "border-blue-500")} className={`${tableObject.isEmpty ? "ring-red-600" : "ring-black"} ring-[5px] ring-black text-[32px] w-[700px] font-black text-white border-[5px] text-drop-shadow bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 shadow-inner shadow-black p-4 rounded-xl border-blue-500`}>
                                MAJOR JACKPOT
                            </button>

                            <button onClick={() => handleGetResultSpin("Grand Jackpot", "bg-gradient-to-r from-[#FF4B1F] via-[#FFFF7D] to-[#FF4B1F]", "border-amber-300")} className={`${tableObject.isEmpty ? "ring-red-600" : "ring-black"} ring-[5px] ring-black  text-[32px] font-black text-[#FFFF7D] w-[700px] triple-drop-shadow border-[5px] bg-gradient-to-r from-[#FF4B1F] via-[#FFFF7D] to-[#FF4B1F] text-drop-shadow shadow-inner shadow-black p-4 rounded-xl border-amber-300`}>
                                GRAND JACKPOT
                            </button>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center items-center'>
                    <div className='w-[400px]'>
                        <button className={`${tableObject.result_spin === "" ? " hidden" : ""} ${tableObject.background} ${tableObject.width} ${tableObject.border_color} text-[32px] px-8 shadow-black text-drop-shadow font-black text-white ring-[5px] ring-black shadow-inner rounded-xl border-[5px]`}>
                            {tableObject.result_spin}
                        </button>
                    </div>
                    <div className='flex justify-center'>
                        <input onChange={handleCodeOnchange} value={tableObject.code} placeholder='ENTER YOUR CODE HERE' className={`${tableObject.isCodeEmpty ? "ring-red-500" : " ring-black"} text-center text-xl text-slate-400 font-black w-[70%] outline-none mx-4 rounded-xl shadow-inner shadow-black border-white border-[5px] ring-4 ring-black`} type="text" />
                        <button onClick={handleUpdateResults} className='text-3xl text-white primary-drop-shadow bg-red-500 font-black  px-4 py-2 shadow-inner shadow-black rounded-xl border-[5px] border-red-500 ring-[4px] ring-black'>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripleHitJackpot