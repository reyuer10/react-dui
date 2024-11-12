import axios from "axios";

const host = "http://localhost";
const port = "3000";
const main_api = "/api";

const getTableInfo = async ({ table_name }) => {
  try {
    const response = await axios.post(
      `${host}:${port}${main_api}/cg/table/info`,
      { table_name: table_name }
    );
    return response.data;
  } catch (error) {
    if (error && error.response.data.message) {
      console.log(error.response.data.message);
    }

    throw error;
  }
};

export { getTableInfo };
