const databaseQuery = require("../db/databaseQuery");

exports.getTableInfo = async (req, res) => {
  const queryGetTableInfo = `SELECT * FROM cg_db.tb_colortable WHERE table_name = ?`;
  const {
    body: { table_name },
  } = req;

  try {
    const results = await databaseQuery(queryGetTableInfo, [table_name]);

    return res.status(200).send({
      data: results,
    });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error." });
  }
};

exports.updateTableInfo = async (req, res) => {
  const queryUpdateTableInfo = `UPDATE cg_db.tb_colortable SET table_name = ?, table_min = ?, table_max = ? WHERE table_id = ?`;

  const {
    body: { table_name, table_min, table_max, table_id },
  } = req;

  try {
    await databaseQuery(queryUpdateTableInfo, [
      table_name,
      table_min,
      table_max,
      table_id,
    ]);

    return res
      .status(200)
      .send({ message: `successfully updated table name ${table_name}` });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error." });
  }
};

exports.newTableInfo = async (req, res) => {
  const queryNewTable =
    "INSERT INTO cg_db.tb_colortable(`table_name`, `table_min`, `table_max`, `game_count`, `current_round`, `jackpot_hit`, `table_timestamp`) VALUES(?, ?, ?, 1, 0, 0, NOW())";
  const queryCheckTableName = `SELECT table_name FROM cg_db.tb_colortable WHERE table_name = ?`;

  const {
    body: { table_name, table_min, table_max },
  } = req;

  let errors = [];

  // Validation checks before database operation
  if (!table_name) {
    errors.push({
      errorName: "table_name",
      errorMessage: "Table Name is required.",
    });
  }

  if (table_name && table_name.length <= 3) {
    errors.push({
      errorName: "table_name",
      errorMessage: `${table_name} is not a valid table name. Table name should be longer than 3 characters.`,
    });
  }

  if (!table_min || table_min === 0) {
    errors.push({
      errorName: "table_min",
      errorMessage: "Table min is required.",
    });
  }

  if (!table_max || table_max === 0) {
    errors.push({
      errorName: "table_max",
      errorMessage: "Table max is required.",
    });
  }
  try {
    const checkTableName = await databaseQuery(queryCheckTableName, [
      table_name,
    ]);

    if (checkTableName.length > 0) {
      errors.push({
        errorName: "table_name",
        errorMessage: `Table name ${table_name} is already exist.`,
      });
    }

    // If there are validation errors, send them as response
    if (errors.length > 0) {
      return res.status(400).send({ errors });
    }

    // Now perform the database insertion after validation
    const newTable = await databaseQuery(queryNewTable, [
      table_name,
      table_min,
      table_max,
    ]);

    // If the table is successfully created
    if (newTable) {
      return res
        .status(200)
        .send({ message: "Successfully created a new table", data: newTable });
    }

    // If something goes wrong with database operation (fallback)
    return res.status(500).send({ message: "Failed to create new table." });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).send({ message: "Internal server error." });
  }
};

exports.getSpecificTableInfo = async (req, res) => {
  const getTableInfo = `SELECT * FROM cg_db.tb_colortable WHERE table_id = ?`;
  const getTableGame = `SELECT game_num FROM cg_db.tb_results WHERE table_id = ? GROUP BY game_num HAVING COUNT(game_num)`;
  const {
    body: { table_id },
  } = req;
  try {
    const tableInfo = await databaseQuery(getTableInfo, [table_id]);
    const tableGame = await databaseQuery(getTableGame, [table_id]);

    return res.status(200).send({
      tableInfo: tableInfo,
      tableGame: tableGame,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal server error.",
    });
  }
};

exports.getSpecificTableInfoPerRound = async (req, res) => {
  const getTableInfoPerRound = `SELECT serial_num, round_num, result_firstColor, result_secondColor, result_thirdColor, amount_totalBet, FORMAT(minor_increment / 100, 2) as minor_increment, FORMAT(major_increment / 100, 2) as major_increment, FORMAT(grand_increment / 100, 2) as grand_increment, FORMAT(current_minor / 100, 2) as current_minor, FORMAT(current_major / 100, 2) as current_major, FORMAT(current_grand / 100, 2) as current_grand FROM cg_db.tb_results WHERE table_id = ? AND game_num = ?`;

  const {
    body: { table_id, game_num },
  } = req;
  try {
    const tableInfoPerRound = await databaseQuery(getTableInfoPerRound, [
      table_id,
      game_num,
    ]);

    return res.status(200).send({
      infoPerRound: tableInfoPerRound,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal server error.",
    });
  }
};
