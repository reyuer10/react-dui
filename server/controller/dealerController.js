const databaseQuery = require("../db/databaseQuery");
// const {
//   color,
//   arrColor,
//   arrColorLength,
//   getColorLength,
// } = require("../custom/color");

exports.getResults = async (req, res) => {
  const querySortResultColors = `SELECT result_ID, round_num,  result_firstColor, result_secondColor, result_thirdColor from cg_db.tb_results result_ID order by result_ID desc LIMIT 18`;
  const queryFindingLatestSerialNumber = `SELECT result_ID, serial_num FROM cg_db.tb_results order by result_ID desc limit 1`;
  const queryCheckCurrentRound = `SELECT result_ID FROM cg_db.tb_results order by result_ID desc LIMIT 1`;
  const queryCurrentRound = `SELECT round_num FROM cg_db.tb_results order by round_num desc LIMIT 1;`;
  const queryGetAmountPrizes = `SELECT * FROM cg_db.tb_prizes`;
  const queryGetColorResults = `SELECT result_firstColor, result_secondColor, result_thirdColor from cg_db.tb_results WHERE table_name = ? order by result_ID desc`;
  const queryResultColors = `SELECT 
    ROUND((SUM((result_firstcolor = 'Red') + (result_secondcolor = 'Red') + (result_thirdcolor = 'Red')) / (COUNT(*) * 3)) * 100 ,1) AS red_percentage,
    ROUND((SUM((result_firstcolor = 'Blue') + (result_secondcolor = 'Blue') + (result_thirdcolor = 'Blue')) / (COUNT(*) * 3)) * 100,1) AS blue_percentage,
    ROUND((SUM((result_firstcolor = 'Green') + (result_secondcolor = 'Green') + (result_thirdcolor = 'Green')) / (COUNT(*) * 3)) * 100, 1) AS green_percentage,
    ROUND((SUM((result_firstcolor = 'White') + (result_secondcolor = 'White') + (result_thirdcolor = 'White')) / (COUNT(*) * 3)) * 100,1 )AS white_percentage,
    ROUND((SUM((result_firstcolor = 'Pink') + (result_secondcolor = 'Pink') + (result_thirdcolor = 'Pink')) / (COUNT(*) * 3)) * 100, 1) AS pink_percentage,
    ROUND((SUM((result_firstcolor = 'Yellow') + (result_secondcolor = 'Yellow') + (result_thirdcolor = 'Yellow')) / (COUNT(*) * 3)) * 100, 1) AS yellow_percentage
    FROM (
    SELECT result_firstcolor, result_secondcolor, result_thirdcolor
    FROM cg_db.tb_results
    where table_name = ?
    ORDER BY result_ID DESC
    ) AS latest_results;`;

  const {
    body: { table_name },
  } = req;

  try {
    const sortColorResults = await databaseQuery(querySortResultColors);
    const latestSerialNumResults = await databaseQuery(
      queryFindingLatestSerialNumber
    );

    const prizesAmount = await databaseQuery(queryGetAmountPrizes);
    const checkCurrentRound = await databaseQuery(queryCheckCurrentRound);
    const colorResults = await databaseQuery(queryGetColorResults, [
      table_name,
    ]);
    let colorPercentage = await databaseQuery(queryResultColors, [table_name]);

    // latest round
    const latestRound = await databaseQuery(queryCurrentRound);
    let round = latestRound[0];

    return res.status(200).send({
      color_results: colorResults,
      prizes_amount: prizesAmount,
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
    "INSERT INTO cg_db.tb_results (`table_name`, `serial_num`, `round_num`, `result_firstColor`, `result_secondColor`, `result_thirdColor`, `betAmount_yellow`, `betAmount_white`, `betAmount_pink`, `betAmount_blue`, `betAmount_red`, `betAmount_green`, `amount_totalBet`,`minor_increment`,`major_increment`, `grand_increment`,  `current_minor`, `current_major`, `current_grand`, `result_label`, `start_time`, `end_time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())";

  const getJackpotPrizes = `SELECT * FROM cg_db.tb_prizes`;

  const queryUpdateJackpotPrizes = `UPDATE cg_db.tb_prizes SET minor_prizes = ?, major_prizes = ?, grand_prizes = ? WHERE prizes_id = 1`;
  const queryUpdateTableInfo = `UPDATE cg_db.tb_colortable SET current_serialNum = ?, current_round = ? WHERE table_name = ? `;
  const queryIsEqual = `SELECT CASE WHEN result_firstColor = result_secondColor AND result_secondColor = result_thirdColor THEN true ELSE false END AS equal FROM cg_db.tb_results order by result_ID desc LIMIT 1;`;
  const queryGetLatestID = `SELECT result_ID FROM cg_db.tb_results WHERE table_name = ?  ORDER BY result_ID desc LIMIT 1`;

  const {
    body: {
      serial_num,
      table_name,
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
    },
  } = req;

  try {
    const tripleColor = await databaseQuery(queryIsEqual);
    const getResultID = await databaseQuery(queryGetLatestID, [table_name]);
    const isTripleColorHit = tripleColor[0];
    console.log(isTripleColorHit);

    const hitJackpotLabel =
      isTripleColorHit.equal === 0 ? "Triple Color Hit" : "Normal Result";

    const getLatestID = (value) => {
      let a = value[0];
      let b = a.result_ID + 1;
      return b;
    };
    const latestID = getLatestID(getResultID);

    const currentJackpotPrizes = await databaseQuery(getJackpotPrizes);

    let currJP = currentJackpotPrizes[0];

    const compMinor = amount_totalBet * 0.005;
    const compMajor = amount_totalBet * 0.003;
    const compGrand = amount_totalBet * 0.001;

    const minorIncrement = amount_totalBet * 0.005 * 100;
    const majorIncrement = amount_totalBet * 0.003 * 100;
    const grandIncrement = amount_totalBet * 0.001 * 100;

    const increment_currentMinor = minorIncrement + currJP.minor_prizes;
    const increment_currentMajor = majorIncrement + currJP.major_prizes;
    const increment_currentGrand = grandIncrement + currJP.grand_prizes;

    const results = await databaseQuery(sql, [
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
      compMinor,
      compMajor,
      compGrand,
      increment_currentMinor,
      increment_currentMajor,
      increment_currentGrand,
      hitJackpotLabel,
    ]);

    const incrementJackpotPrizes = await databaseQuery(
      queryUpdateJackpotPrizes,
      [increment_currentMinor, increment_currentMajor, increment_currentGrand]
    );

    const updateTableInfo = await databaseQuery(queryUpdateTableInfo, [
      serial_num,
      round_num,
      table_name,
    ]);

    return res.status(200).send({
      message: "Successfully added.",
      data: results,
      update_data: updateTableInfo,
      update_jackpotPrizes: incrementJackpotPrizes,
      result_ID: latestID,
    });
  } catch (error) {
    if (error) {
      return res.status(500).send({ message: "Internal server error." });
    }
  }
};

exports.updateResults = async (req, res) => {
  const sqlUpdateResults = `UPDATE cg_db.tb_results SET result_spin = ? WHERE result_ID = ?`;
  const sqlResetMinorPrizes = `UPDATE cg_db.tb_prizes SET minor_prizes = 10000000 WHERE prizes_id = 1`;
  const sqlResetMajorPrizes = `UPDATE cg_db.tb_prizes SET major_prizes = 50000000 WHERE prizes_id = 1`;
  const sqlResetGrandPrizes = `UPDATE cg_db.tb_prizes SET grand_prizes = 100000000 WHERE prizes_id = 1`;

  const {
    body: { result_spin, result_ID },
  } = req;

  try {
    if (result_spin === "Minor Jackpot") {
      await databaseQuery(sqlResetMinorPrizes);
    } else if (result_spin === "Major Jackpot") {
      await databaseQuery(sqlResetMajorPrizes);
    } else if (result_spin === "Grand Jackpot") {
      await databaseQuery(sqlResetGrandPrizes);
    }
    await databaseQuery(sqlUpdateResults, [result_spin, result_ID]);

    return res.status(200).send({ message: "results successfully updated! " });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error." });
  }
};
