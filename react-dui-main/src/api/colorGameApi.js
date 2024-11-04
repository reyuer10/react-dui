import axios from "axios";

const localhost = "http://localhost";
const port = "3000";

const getColorGameTable = async () => {
  try {
    const response = await axios.get(
      `${localhost}:${port}/api/color-game/get/table-info`
    );

    return response.data;
  } catch (error) {
    console.log("error fetching data from color game table", error);
  }
};

export { getColorGameTable };
