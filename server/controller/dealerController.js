const databaseQuery = require("../db/databaseQuery");

exports.getResults = async (req, res) => {
  const queryResultColors = `SELECT result_firstColor, result_secondColor, result_thirdColor from cg_db.tb_results order by result_ID desc `;
  const querySortResultColors = `SELECT result_ID,  result_firstColor, result_secondColor, result_thirdColor from cg_db.tb_results result_ID order by result_ID desc LIMIT 18`;
  const queryFindingLatestSerialNumber = `SELECT result_ID, serial_num FROM cg_db.tb_results order by result_ID desc limit 1`;
  const queryPrizesAmount = `SELECT table_id, table_name, FORMAT(minor_jp / 100, 2) as minor_jp, FORMAT(major_jp / 100, 2) as major_jp, FORMAT(grand_jp / 100, 2) as grand_jp FROM cg_db.tb_colortable`;
  const queryDefaultPrizes = `SELECT table_id, FORMAT(minor_jp / 100, 2) as minor_jp, FORMAT(major_jp / 100, 2) as major_jp, FORMAT(grand_jp / 100, 2) as grand_jp FROM cg_db.tb_colortable;`;
  const queryCheckCurrentRound = `SELECT result_ID FROM cg_db.tb_results order by result_ID desc LIMIT 1`;
  const queryGetCurrentPrizes =
    "SELECT result_ID, FORMAT(current_minor / 100, 2) as current_minor, FORMAT(current_major / 100, 2) as current_major, FORMAT(current_grand / 100, 2) as current_grand FROM cg_db.tb_results order by result_ID desc LIMIT 1";

  const queryCurrentRound = `SELECT round_num, result_ID FROM cg_db.tb_results order by result_ID desc LIMIT 1;`;

  try {
    const colorResults = await databaseQuery(queryResultColors);
    const sortColorResults = await databaseQuery(querySortResultColors);
    const latestSerialNumResults = await databaseQuery(
      queryFindingLatestSerialNumber
    );
    const prizesAmount = await databaseQuery(queryPrizesAmount);
    const defaultPrizes = await databaseQuery(queryDefaultPrizes);
    const checkCurrentRound = await databaseQuery(queryCheckCurrentRound);
    const latestCurrentPrizes = await databaseQuery(queryGetCurrentPrizes);
    const latestRound = await databaseQuery(queryCurrentRound);

    const default_prizes = defaultPrizes[0];

    const default_minor = default_prizes.minor_jp;
    const default_major = default_prizes.major_jp;
    const default_grand = default_prizes.grand_jp;
    console.log(default_minor, default_major, default_grand);
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
      prizes_amount:
        checkCurrentRound.length === 0 ? defaultPrizes : latestCurrentPrizes,
      sortColorResults: sortColorResults,
      colorPercentage: colorPercentage,
      currentRound: checkCurrentRound.length === 0 ? 0 : latestRound,
      latestSerialNum: latestSerialNumResults,
    });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error!" });
  }
};

exports.postResults = async (req, res) => {
  const sql =
    "INSERT INTO cg_db.tb_results (`serial_num`, `round_num`, `result_firstColor`, `result_secondColor`, `result_thirdColor`, `betAmount_yellow`, `betAmount_white`, `betAmount_pink`, `betAmount_blue`, `betAmount_red`, `betAmount_green`, `amount_totalBet`, `current_minor`, `current_major`, `current_grand`, `start_time`, `end_time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())";
  // const queryGetCurrentPrizes =
  //   "SELECT result_ID, FORMAT(current_minor / 100, 2) as current_minor, FORMAT(current_major / 100, 2) as current_major, FORMAT(current_grand / 100, 2) as current_grand FROM cg_db.tb_results order by result_ID desc LIMIT 1";

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
    // const current_prizes = await databaseQuery(queryGetCurrentPrizes);

    // const prizes = current_prizes[0];
    // const currPrizes_minor = prizes.current_minor;
    // const currPrizes_major = prizes.current_major;
    // const currPrizes_grand = prizes.current_grand;

    // let minorIncrement = amount_totalBet * 0.005 + currPrizes_minor;
    // let majorIncrement = amount_totalBet * 0.003 + currPrizes_major;
    // let grandIncrement = amount_totalBet * 0.001 + currPrizes_grand;

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
