const databaseQuery = require("../db/databaseQuery");

exports.getResults = async (req, res) => {
  const queryResultColors = `SELECT result_firstColor, result_secondColor, result_thirdColor from cg_db.tb_results order by result_ID desc `;
  const querySortResultColors = `SELECT result_ID, round_num,  result_firstColor, result_secondColor, result_thirdColor from cg_db.tb_results result_ID order by result_ID desc LIMIT 18`;
  const queryFindingLatestSerialNumber = `SELECT result_ID, serial_num FROM cg_db.tb_results order by result_ID desc limit 1`;
  const queryPrizesAmount = `SELECT table_id, table_name, FORMAT(minor_jp / 100, 2) as minor_jp, FORMAT(major_jp / 100, 2) as major_jp, FORMAT(grand_jp / 100, 2) as grand_jp FROM cg_db.tb_colortable`;
  const queryDefaultPrizes = `SELECT table_id, FORMAT(minor_jp / 100, 2) as minor_jp, FORMAT(major_jp / 100, 2) as major_jp, FORMAT(grand_jp / 100, 2) as grand_jp FROM cg_db.tb_colortable;`;
  const queryCheckCurrentRound = `SELECT result_ID FROM cg_db.tb_results order by result_ID desc LIMIT 1`;
  const queryGetCurrentPrizes =
    "SELECT result_ID, current_minor, current_major, current_grand FROM cg_db.tb_results order by result_ID desc LIMIT 1";
  const queryCurrentRound = `SELECT round_num FROM cg_db.tb_results order by round_num desc LIMIT 1;`;

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

    // latest round
    const latestRound = await databaseQuery(queryCurrentRound);
    let round = latestRound[0];

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
      currentRound: checkCurrentRound.length === 0 ? 0 : round.round_num,
      latestSerialNum: latestSerialNumResults,
    });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error!" });
  }
};

exports.postResults = async (req, res) => {
  const sql =
    "INSERT INTO cg_db.tb_results (`serial_num`, `round_num`, `result_firstColor`, `result_secondColor`, `result_thirdColor`, `betAmount_yellow`, `betAmount_white`, `betAmount_pink`, `betAmount_blue`, `betAmount_red`, `betAmount_green`, `amount_totalBet`,`minor_increment`,`major_increment`, `grand_increment`,  `current_minor`, `current_major`, `current_grand`, `start_time`, `end_time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())";
  const queryGetCurrentPrizes =
    "SELECT result_ID, current_minor,  current_major,  current_grand FROM cg_db.tb_results order by result_ID desc LIMIT 1";
  const queryCheckCurrentRound = `SELECT result_ID FROM cg_db.tb_results order by result_ID desc LIMIT 1`;
  const queryDefaultPrizes = `SELECT table_id, minor_jp, major_jp, grand_jp FROM cg_db.tb_colortable;`;

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
      // current_minor,
      // current_major,
      // current_grand,
    },
  } = req;

  try {
    const checkCurrentRound = await databaseQuery(queryCheckCurrentRound);
    const defaultPrizes = await databaseQuery(queryDefaultPrizes);

    // this is for current prizes, it will change the calculation when the results is not empty
    const current_prizes = await databaseQuery(queryGetCurrentPrizes);

    const default_prizes = defaultPrizes[0];

    const default_minor = default_prizes.minor_jp;
    const default_major = default_prizes.major_jp;
    const default_grand = default_prizes.grand_jp;

    let increment_currentMinor;
    let increment_currentMajor;
    let increment_currentGrand;

    const compMinor = amount_totalBet * 0.005;
    const compMajor = amount_totalBet * 0.003;
    const compGrand = amount_totalBet * 0.001;

    const minorIncrement = amount_totalBet * 0.005 * 100;
    const majorIncrement = amount_totalBet * 0.003 * 100;
    const grandIncrement = amount_totalBet * 0.001 * 100;

    const prizes = current_prizes[0];

    const currPrizes_minor = prizes?.current_minor;
    const currPrizes_major = prizes?.current_major;
    const currPrizes_grand = prizes?.current_grand;

    if (checkCurrentRound.length === 0) {
      increment_currentMinor = minorIncrement + default_minor;
      increment_currentMajor = majorIncrement + default_major;
      increment_currentGrand = grandIncrement + default_grand;
    } else {
      increment_currentMinor = minorIncrement + currPrizes_minor;
      increment_currentMajor = majorIncrement + currPrizes_major;
      increment_currentGrand = grandIncrement + currPrizes_grand;
    }

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
      compMinor,
      compMajor,
      compGrand,
      increment_currentMinor,
      increment_currentMajor,
      increment_currentGrand,
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
