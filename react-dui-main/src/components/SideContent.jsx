import React from "react";
import ColorsResults from "./ColorsResults";

function SideContent() {
  return (
    <div className="my-3 flex flex-col justify-between h-[calc(100vh-50px)] ">
      <div className="bg-zinc-700 h-full overflow-hidden m-4 p-3 rounded-xl ring-8 ring-black">
        <ColorsResults />
      </div>
    </div>
  );
}

export default SideContent;
