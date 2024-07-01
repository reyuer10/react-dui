// bg-[#d92426] = red
// bg-[#62b346] = green
// bg-[#ef5f93] = pink
// bg-[#1795d2] = blue
// bg-white = white
// bg-[#fccc0a] = yellow

export const colorResultsData = [
  {
    colorId: 1,
    colorResults: [
      {
        firstColor: "bg-gradient-to-t from-zinc-400 from-gray-200 to-white",
        secondColor: "bg-gradient-to-t from-red-600 via-red-500 to-red-300", // red
        thirdColor:
          "bg-gradient-to-t from-green-600 via-green-500 to-green-200 border-lime-600", // green
      },
    ],
  },
  {
    colorId: 2,
    colorResults: [
      {
        firstColor: "bg-gradient-to-t from-pink-600 via-pink-500 to-pink-300",
        secondColor: "bg-gradient-to-t from-yellow-600 via-yellow-500 to-white",
        thirdColor: "bg-gradient-to-t from-zinc-400 from-gray-200 to-white",
      },
    ],
  },
  {
    colorId: 3,
    colorResults: [
      {
        firstColor: "bg-gradient-to-t from-blue-600 via-blue-500 to-blue-300",
        secondColor: "bg-gradient-to-t from-pink-600 via-pink-500 to-pink-300",
        thirdColor: "bg-gradient-to-t from-yellow-600 via-yellow-500 to-white",
      },
    ],
  },
  {
    colorId: 4,
    colorResults: [
      {
        firstColor: "bg-gradient-to-t from-pink-600 via-pink-500 to-pink-300",
        secondColor: "bg-gradient-to-t from-pink-600 via-pink-500 to-pink-300",
        thirdColor: "bg-gradient-to-t from-pink-600 via-pink-500 to-pink-300",
      },
    ],
    timesThree: true,
  },
  // {
  //   colorId: 5,
  //   colorResults: [
  //     {
  //       firstColor: "bg-gradient-to-t from-blue-700 via-blue-400 to-white",
  //       secondColor: "bg-gradient-to-t from-green-700 via-green-400 to-white",
  //       thirdColor: "bg-gradient-to-t from-zinc-400 from-gray-300 to-white",
  //     },
  //   ],
  // },
  // {
  //   colorId: 6,
  //   colorResults: [
  //     {
  //       firstColor: "bg-gradient-to-t from-pink-700 via-pink-400 to-white",
  //       secondColor: "bg-gradient-to-t from-red-700 via-red-400 to-white",
  //       thirdColor: "bg-gradient-to-t from-zinc-400 from-gray-300 to-white",
  //     },
  //   ],
  // },
  // {
  //   colorId: 7,
  //   colorResults: [
  //     {
  //       firstColor: "bg-gradient-to-t from-yellow-700 via-yellow-400 to-white",
  //       secondColor: "bg-gradient-to-t from-blue-700 via-blue-400 to-white",
  //       thirdColor: "bg-gradient-to-t from-pink-700 via-pink-400 to-white",
  //     },
  //   ],
  // },
  // {
  //   colorId: 8,
  //   colorResults: [
  //     {
  //       firstColor: "bg-gradient-to-t from-green-700 via-green-400 to-white",
  //       secondColor: "bg-gradient-to-t from-yellow-700 via-yellow-400 to-white",
  //       thirdColor: "bg-gradient-to-t from-pink-700 via-pink-400 to-white",
  //     },
  //   ],
  // },
  // {
  //   colorId: 9,
  //   colorResults: [
  //     {
  //       firstColor: "bg-gradient-to-t from-red-700 via-red-400 to-white",
  //       secondColor: "bg-gradient-to-t from-blue-700 via-blue-400 to-white",
  //       thirdColor: "bg-gradient-to-t from-zinc-400 from-gray-300 to-white",
  //     },
  //   ],
  // },
  // {
  //   colorId: 10,
  //   colorResults: [
  //     {
  //       firstColor: "bg-gradient-to-t from-yellow-700 via-yellow-400 to-white",
  //       secondColor: "bg-gradient-to-t from-green-700 via-green-400 to-white",
  //       thirdColor: "bg-gradient-to-t from-red-700 via-red-400 to-white",
  //     },
  //   ],
  // },
  // {
  //   colorId: 11,
  //   colorResults: [
  //     {
  //       firstColor: "bg-gradient-to-t from-pink-700 via-pink-400 to-white",
  //       secondColor: "bg-gradient-to-t from-blue-700 via-blue-400 to-white",
  //       thirdColor: "bg-gradient-to-t from-yellow-700 via-yellow-400 to-white",
  //     },
  //   ],
  // },
  // {
  //   colorId: 12,
  //   colorResults: [
  //     {
  //       firstColor: "bg-gradient-to-t from-green-700 via-green-400 to-white",
  //       secondColor: "bg-gradient-to-t from-pink-700 via-pink-400 to-white",
  //       thirdColor: "bg-gradient-to-t from-zinc-400 from-gray-300 to-white",
  //     },
  //   ],
  // },
  // {
  //   colorId: 13,
  //   colorResults: [
  //     {
  //       firstColor: "bg-gradient-to-t from-blue-700 via-blue-400 to-white",
  //       secondColor: "bg-gradient-to-t from-yellow-700 via-yellow-400 to-white",
  //       thirdColor: "bg-gradient-to-t from-red-700 via-red-400 to-white",
  //     },
  //   ],
  // },
  // {
  //   colorId: 14,
  //   colorResults: [
  //     {
  //       firstColor: "bg-gradient-to-t from-pink-700 via-pink-400 to-white",
  //       secondColor: "bg-gradient-to-t from-green-700 via-green-400 to-white",
  //       thirdColor: "bg-gradient-to-t from-zinc-400 from-gray-300 to-white",
  //     },
  //   ],
  // },
  // {
  //   colorId: 15,
  //   colorResults: [
  //     {
  //       firstColor: "bg-gradient-to-t from-red-700 via-red-400 to-white",
  //       secondColor: "bg-gradient-to-t from-blue-700 via-blue-400 to-white",
  //       thirdColor: "bg-gradient-to-t from-pink-700 via-pink-400 to-white",
  //     },
  //   ],
  // },
  // {
  //   colorId: 16,
  //   colorResults: [
  //     {
  //       firstColor: "bg-gradient-to-t from-yellow-700 via-yellow-400 to-white",
  //       secondColor: "bg-gradient-to-t from-pink-700 via-pink-400 to-white",
  //       thirdColor: "bg-gradient-to-t from-green-700 via-green-400 to-white",
  //     },
  //   ],
  // },
  // {
  //   colorId: 17,
  //   colorResults: [
  //     {
  //       firstColor: "bg-gradient-to-t from-blue-700 via-blue-400 to-white",
  //       secondColor: "bg-gradient-to-t from-red-700 via-red-400 to-white",
  //       thirdColor: "bg-gradient-to-t from-zinc-400 from-gray-300 to-white",
  //     },
  //   ],
  // },
  // {
  //   colorId: 18,
  //   colorResults: [
  //     {
  //       firstColor: "bg-gradient-to-t from-green-700 via-green-400 to-white",
  //       secondColor: "bg-gradient-to-t from-yellow-700 via-yellow-400 to-white",
  //       thirdColor: "bg-gradient-to-t from-pink-700 via-pink-400 to-white",
  //     },
  //   ],
  // },
  // {
  //   colorId: 19,
  //   colorResults: [
  //     {
  //       firstColor: "bg-gradient-to-t from-red-700 via-red-400 to-white",
  //       secondColor: "bg-gradient-to-t from-blue-700 via-blue-400 to-white",
  //       thirdColor: "bg-gradient-to-t from-zinc-400 from-gray-300 to-white",
  //     },
  //   ],
  // },
  // {
  //   colorId: 20,
  //   colorResults: [
  //     {
  //       firstColor: "bg-gradient-to-t from-yellow-700 via-yellow-400 to-white",
  //       secondColor: "bg-gradient-to-t from-zinc-400 from-gray-300 to-white",
  //       thirdColor: "bg-gradient-to-t from-zinc-400 from-gray-300 to-white",
  //     },
  //   ],
  // },
];
