const databaseQuery = require("../db/databaseQuery");

exports.getResults = async (req, res) => {
  try {
    const queryRounds = `SELECT round_num FROM cg_db.tb_results`;
    const queryResultColors = `SELECT result_firstColor, result_secondColor, result_thirdColor from cg_db.tb_results order by result_ID desc `;
    const querySortResultColors = `SELECT result_ID,  result_firstColor, result_secondColor, result_thirdColor from cg_db.tb_results result_ID order by result_ID desc LIMIT 18`;

    const roundResults = await databaseQuery(queryRounds);
    const colorResults = await databaseQuery(queryResultColors);
    const sortColorResults = await databaseQuery(querySortResultColors);

    const totalColorHits = colorResults.length * 3; // times 3 for the total of 3 colors per round

    const colorLength = (color) => {
      let first_result = colorResults.filter(
        (c) => c.result_firstColor === color
      ).length;
      let second_result = colorResults.filter(
        (c) => c.result_secondColor === color
      ).length;
      let third_result = colorResults.filter(
        (c) => c.result_thirdColor === color
      ).length;

      return first_result + second_result + third_result;
    };

    const countRed = colorLength("Red");
    const countBlue = colorLength("Blue");
    const countGreen = colorLength("Green");
    const countYellow = colorLength("Yellow");
    const countWhite = colorLength("White");
    const countPink = colorLength("Pink");

    let colorPercentage = {
      red: ((countRed / totalColorHits) * 100).toFixed(1) + "%",
      blue: ((countBlue / totalColorHits) * 100).toFixed(1) + "%",
      green: ((countGreen / totalColorHits) * 100).toFixed(1) + "%",
      yellow: ((countYellow / totalColorHits) * 100).toFixed(1) + "%",
      white: ((countWhite / totalColorHits) * 100).toFixed(1) + "%",
      pink: ((countPink / totalColorHits) * 100).toFixed(1) + "%",
    };

    return res.status(200).send({
      color_results: colorResults,
      sortColorResults: sortColorResults,
      colorPercentage: colorPercentage,
      currentRound: roundResults[roundResults.length - 1],
    });
  } catch (error) {
   return res.status(500).send({ message: "Internal Server Error!" });
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
