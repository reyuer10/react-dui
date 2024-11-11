import React from 'react'

function WrappedLights({ children }) {
    return (
        <div className='relative'>

            {/* For light bulbs */}
            <li className=' absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-1.5sec rounded-full'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-2sec rounded-full right-0'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-1sec rounded-full right-[80px]'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-1.5sec rounded-full right-[160px]'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-2sec rounded-full right-[240px]'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-1sec rounded-full right-[320px]'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-1.5sec rounded-full right-[400px]'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-2sec rounded-full right-[80px] bottom-0'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-1sec rounded-full right-[160px] bottom-0 '></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-1.5sec rounded-full right-[240px] bottom-0'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-2sec rounded-full right-[320px] bottom-0'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-1sec rounded-full right-[400px] bottom-0'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-1.5sec rounded-full left-0 bottom-0'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-2sec rounded-full right-0 bottom-0'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-1sec rounded-full right-[400px] bottom-0'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-1.5sec rounded-full top-[50px] left-0 bottom-0'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-2sec rounded-full top-[100px] left-0 bottom-0'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-1sec rounded-full top-[50px] right-0 bottom-0'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow animate-pulse-alternate-1.5sec rounded-full top-[100px] right-0 bottom-0'></li>

            {/* alternate - no lights */}

            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full left-0 bottom-0 top-[25px] '></li>
            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full left-0 bottom-0 top-[75px] '></li>
            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full left-0 bottom-0 top-[125px] '></li>

            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full right-0 bottom-0 top-[25px] '></li>
            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full right-0 bottom-0 top-[75px] '></li>
            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full right-0 bottom-0 top-[125px] '></li>

            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full bottom-0 left-[40px] '></li>
            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full bottom-0 left-[125px]'></li>
            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full bottom-0 left-[205px]'></li>
            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full bottom-0 left-[285px]'></li>
            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full bottom-0 right-[125px]'></li>
            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full bottom-0 right-[40px]'></li>


            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full top-0 left-[40px] '></li>
            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full top-0 left-[125px]'></li>
            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full top-0 left-[205px]'></li>
            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full top-0 left-[285px]'></li>
            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full top-0 right-[125px]'></li>
            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700  to-orange-900 default-drop-shadow rounded-full top-0 right-[40px]'></li>

            {/* <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700 to-orange-900 default-drop-shadow rounded-full left-0 bottom-0 top-[25px] '></li>
            <li className='absolute w-[15px] h-[15px] bg-gradient-to-r from-orange-400 via-yellow-700 to-orange-900 default-drop-shadow rounded-full left-0 bottom-0 top-[25px] '></li>  */}




            {/* <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow rounded-full top-[50px] right-0 bottom-0'></li>
            <li className='absolute w-[15px] h-[15px] bg-[#ffffff] shadow-2xl shadow-yellow-300 light-drop-shadow rounded-full top-[100px] right-0 bottom-0'></li> */}
            <div className={` text-[46px] bg-gradient-to-r from-[#05120A] via-[#2E593D] to-[#05120A] rounded-b-lg w-[500px] my-6 ring-4 rounded-xl shadow-inner shadow-black ring-yellow-300 border-[14px] border-orange-600 bg-[#910723 `}>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default WrappedLights