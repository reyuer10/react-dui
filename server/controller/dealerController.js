const databaseQuery = require("../db/databaseQuery");

exports.getResults = async (req, res) => {
  try {
    const queryRounds = `SELECT round_num FROM cg_db.tb_results`;
    const queryResultColors = `SELECT result_firstColor, result_secondColor, result_thirdColor from cg_db.tb_results order by result_ID desc`;
    const roundResults = await databaseQuery(queryRounds);
    const colorResults = await databaseQuery(queryResultColors);

    return res.status(200).send({
      color_results: colorResults,
      currentRound: roundResults[roundResults.length - 1],
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error!" });
  }
};

exports.postResults = async (req, res) => {
  const sql =
    "INSERT INTO cg_db.tb_results (`serial_num`, `round_num`, `result_firstColor`, `result_secondColor`, `result_thirdColor`, `betAmount_yellow`, `betAmount_white`, `betAmount_pink`, `betAmount_blue`, `betAmount_red`, `betAmount_green`, `amount_totalBet`, `current_minor`, `current_major`, `current_grand`, `start_time`, `end_time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())";

  const {
    body: {
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
      current_minor,
      current_major,
      current_grand,
    },
  } = req;

  try {
    const results = await databaseQuery(sql, [
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
      current_minor,
      current_major,
      current_grand,
    ]);

    return res
      .status(200)
      .send({ message: "Successfully added.", data: results });
  } catch (error) {
    if (error) {
      return res.status(500).send({ message: "Internal server error." });
    }
  }
};
