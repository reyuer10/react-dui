import axios from "axios";

const MAIN_API = "http://localhost:3000";

const getResults = async ({ table_name }) => {
  try {
    const response = await axios.post(`${MAIN_API}/api/cg/dealer/get/results`, {
      table_name: table_name,
    });

    return response.data;
  } catch (error) {
    if (error?.response?.data?.message) {
      return console.log(
        "Error getting data from the server.",
        error.response.data.message
      );
    }

    throw error;
  }
};

const postResults = async ({
  table_name,
  serial_num,
  round_num,
  result_firstColor,
  result_secondColor,
  result_thirdColor,
  betAmount_yellow,
  betAmount_white,
  betAmount_pink,
  betAmount_blue,
  betAmount_red,
  betAmount_green,
  amount_totalBet,
}) => {
  try {
    const response = await axios.post(
      `${MAIN_API}/api/cg/dealer/post/results`,
      {
        table_name: table_name,
        serial_num: serial_num,
        round_num: round_num,
        result_firstColor: result_firstColor,
        result_secondColor: result_secondColor,
        result_thirdColor: result_thirdColor,
        betAmount_yellow: betAmount_yellow,
        betAmount_white: betAmount_white,
        betAmount_pink: betAmount_pink,
        betAmount_blue: betAmount_blue,
        betAmount_red: betAmount_red,
        betAmount_green: betAmount_green,
        amount_totalBet: amount_totalBet,
      }
    );

    return response.data;
  } catch (error) {
    if (error?.response?.data?.message) {
      console.log(error?.response?.data?.message);
    }

    throw error;
  }
};

export { postResults, getResults };
