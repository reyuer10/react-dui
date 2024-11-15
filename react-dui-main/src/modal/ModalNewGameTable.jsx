
import { getResults, newGameTable } from "../api/dealerApi";

function ModalNewGameTable({ closeModal, socket }) {
    const storedTable = localStorage.getItem("table");
    const storedGameNo = localStorage.getItem("game-no");

    const handleNewTableGame = async () => {
        try {
            if (storedTable && storedGameNo && socket && socket.readyState === WebSocket.OPEN) {
                const table = await newGameTable({ table_name: storedTable });
                localStorage.setItem("game-no", table?.response[0]?.game_count);
                const newResponse = await getResults({ table_name: storedTable, game_num: storedGameNo })
                socket.send(JSON.stringify({
                    type: "fetch_newGame",
                    room: storedTable,
                    response: newResponse,
                }));


                closeModal()
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className='font-rubik bg-zinc-700 space-y-8 p-4 rounded-xl shadow-inner shadow-black border-[5px] w-[600px] border-zinc-700  ring-[5px] ring-black'>
            <div className='flex justify-center'>
                <p className='text-white text-[32px] font-bold text-drop-shadow'>Create new game?</p>
            </div>
            <div className='space-x-6 flex justify-center'>
                <button onClick={closeModal} className='text-[24px] w-[170px] text-white text-drop-shadow font-bold bg-zinc-400 shadow-inner shadow-black border-[5px] border-zinc-400 rounded-xl ring-[5px] ring-black px-4 py-2'>Cancel</button>
                <button onClick={handleNewTableGame} className='text-[24px] text-white w-[170px] text-drop-shadow font-bold bg-red-500 shadow-inner shadow-black border-[5px] border-red-500 rounded-xl ring-[5px] ring-black px-4 py-2'>New Game</button>
            </div>
        </div>
    )
}

export default ModalNewGameTable