// import React, { useContext } from "react";
// import WrappedLights from "../assets/cssCustom/WrappedLights";
// import Odometer from "react-odometerjs"
// import { colorGameContext } from "../App";

// function PrizesSection({ j }) {
//   const { newPrizesAmount } = useContext(colorGameContext)


//   return (
//     <div className="flex flex-col justify-center font-rubik  m-4 rounded-xl">
//       <ul className={`text-center`}>
//         <WrappedLights>
//           <p className="jp-title  primary-drop-shadow text-[#FFF9C7] font-black ">GRAND JACKPOT</p>
//           <div className="flex items-center justify-center space-x-2 ">
//             <p className=" font-bold to-amber-200 gradient-text">
//               ₱
//             </p>
//             <Odometer value={j.current_grand} style={{ fontWeight: 700, fontFamily: "Rubik", color: "#FCD34D" }} format="(ddd,ddd,ddd,ddd.dd)" />
//           </div>
//         </WrappedLights>
//         <WrappedLights>
//           <p className="jp-title  primary-drop-shadow text-[#FFF9C7] font-black">MAJOR JACKPOT</p>
//           <div className="flex items-center justify-center space-x-2 ">
//             <p className=" font-bold to-amber-200 gradient-text  ">
//               ₱
//             </p>
//             <Odometer value={j.current_major} style={{ fontWeight: 700, fontFamily: "Rubik", color: "#FCD34D" }} format="(ddd,ddd,ddd,ddd.dd)" />
//           </div>
//         </WrappedLights>

//         <WrappedLights>
//           <p className="jp-title  primary-drop-shadow text-[#FFF9C7] font-black">MINOR JACKPOT</p>
//           <div className="flex items-center justify-center space-x-2 ">
//             <p className=" font-bold to-amber-200 gradient-text  ">
//               ₱
//             </p>
//             <Odometer value={j.current_minor} style={{ fontWeight: 700, fontFamily: "Rubik", color: "#FCD34D" }} format="(ddd,ddd,ddd,ddd.dd)" />
//           </div>
//         </WrappedLights>
//       </ul>
//     </div>
//   );
// }

// export default PrizesSection;
