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

const updateTableInfo = async ({
  table_name,
  table_min,
  table_max,
  table_id,
}) => {
  try {
    const response = await axios.put(
      `${host}:${port}${main_api}/cg/table/update/info`,
      {
        table_name: table_name,
        table_min: table_min,
        table_max: table_max,
        table_id: table_id,
      }
    );

    return response;
  } catch (error) {
    if (error && error.response.data.message) {
      console.log(error.response.data.message);
    }

    throw error;
  }
};

const createNewTable = async ({ table_name, table_min, table_max }) => {
  try {
    const response = await axios.post(
      `${host}:${port}${main_api}/cg/create/table`,
      {
        table_name: table_name,
        table_min: table_min,
        table_max: table_max,
      }
    );

    return response.data;
  } catch (error) {
    if (error.response?.data?.errors) {
      console.log("error creating table.", error.response?.data?.errors);
    }
    throw error;
  }
};

export { getTableInfo, updateTableInfo, createNewTable };
