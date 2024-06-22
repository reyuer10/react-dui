import React from "react";

function Buttons() {
  return (
    <div>
      <div>
        <div className="">
          <button className="w-full from-red-300 via-red-400 to-orange-400 bg-gradient-to-bl border-[7px] shadow-black shadow-inner border-red-500  font-bold text-[32px] rounded-lg py-2 text-zinc-800">
            OPEN ROUND
          </button>
        </div>
        <div>
          <div>
            <button>Confirm</button>
          </div>
          <div>
            <button>Manager's Login</button>
          </div>
          <div>
            <div>Shuffle</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
