import React from "react";

function SettingsSections() {
  return (
    <div className="grid grid-cols-2 fill-current font-rubik gap-2">
      <div className="flex justify-center">
        <button className="flex font-bold items-center justify-center space-x-2 border-4 border-red-600 shadow-inner shadow-yellow-300 text-lime-700 rounded-md w-full py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M19.5,24h-3.5c-.553,0-1-.448-1-1s.447-1,1-1h3.5c1.379,0,2.5-1.122,2.5-2.5V4.5c0-1.378-1.121-2.5-2.5-2.5h-3.5c-.553,0-1-.448-1-1s.447-1,1-1h3.5c2.481,0,4.5,2.019,4.5,4.5v15c0,2.481-2.019,4.5-4.5,4.5Zm-8.346-2.245c1.135-.467,1.842-1.52,1.846-2.75v-2.054l2,.005c2.191,0,3.974-1.783,3.974-3.974v-1.982c0-2.191-1.782-3.974-3.962-3.974l-2.038-.023v-2.073c-.005-1.227-.714-2.278-1.848-2.744-1.133-.467-2.376-.218-3.223,.629L1.158,9.162c-.007,.007-.015,.014-.021,.021-1.547,1.548-1.547,4.067,.026,5.641l6.745,6.281c.578,.579,1.323,.883,2.093,.883,.385,0,.775-.076,1.153-.232Z" />
          </svg>

          <p>LOGOUT</p>
        </button>
      </div>
      <div className="flex justify-center">
        <button className="flex font-bold items-center justify-center space-x-2 border-4 border-red-600 shadow-inner shadow-yellow-300 text-lime-700 rounded-md w-full py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Isolation_Mode"
            data-name="Isolation Mode"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M12,2.99a9.03,9.03,0,0,1,6.36,2.65L15.986,8.014h5.83a1.146,1.146,0,0,0,1.146-1.146V1.038L20.471,3.529A11.98,11.98,0,0,0,0,12H2.99A9.02,9.02,0,0,1,12,2.99Z" />
            <path d="M21.01,12A8.994,8.994,0,0,1,5.64,18.36l2.374-2.374H1.993a.956.956,0,0,0-.955.955v6.021l2.491-2.491A11.98,11.98,0,0,0,24,12Z" />
          </svg>
          <p>SYNC</p>
        </button>
      </div>
    </div>
  );
}

export default SettingsSections;
