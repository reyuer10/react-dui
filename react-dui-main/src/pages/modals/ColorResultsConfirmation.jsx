function ColorResultsConfirmation({
  handleCancelSubmitColorResults,
  handleSubmitColorResults,
  colorBet,
}) {
  return (
    <div className="fixed inset-0 flex justify-center items-center ">
      <div className="flex flex-col bg-zinc-700 text-center p-4 rounded-xl space-y-6 shadow-md shadow-black">
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
        <div className="">
          <p className="text-white">
            Are you sure you want to proceed with this results?
          </p>
        </div>
        <div className="space-x-4 text-right">
          <button
            onClick={handleCancelSubmitColorResults}
            className="bg-slate-500 text-white rounded-lg px-4 py-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmitColorResults}
            className="bg-blue-500 text-white rounded-lg px-4 py-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorResultsConfirmation;
