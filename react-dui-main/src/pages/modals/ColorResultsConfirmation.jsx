function ColorResultsConfirmation({
  handleCancelSubmitColorResults,
  handleSubmitColorResults,
  colorBet,
}) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-30 font-rubik">
      <div className="flex flex-col bg-zinc-700 text-center p-4 rounded-xl space-y-10 shadow-md shadow-black">
        <div className="flex justify-center border-2 border-black rounded-xl shadow-black shadow-inner p-4">
          {colorBet.map((c, index) => {
            return (
              <ul key={index}>
                <li
                  className={` text-yellow-300 px-2 rounded-lg font-bold text-2xl`}
                >
                  {c.colorBetName}
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          <p className="text-white text-xl primary-drop-shadow">
            Are you sure you want to proceed with this results?
          </p>
        </div>
        <div className="space-x-4 text-center">
          <button
            onClick={handleCancelSubmitColorResults}
            className="text-white primary-drop-shadow text-[28px] w-[180px] bg-slate-500 font-black px-4 py-2 rounded-xl shadow-inner shadow-black border-slate-500 border-[5px] ring-[5px] ring-black"
          >
            CANCEL
          </button>
          <button
            onClick={handleSubmitColorResults}
            className="text-white primary-drop-shadow text-[28px] w-[180px] bg-blue-500 font-black px-4 py-2 rounded-xl shadow-inner shadow-black border-blue-500 border-[5px] ring-[5px] ring-black"
          >
          SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorResultsConfirmation;
