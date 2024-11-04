const databaseQuery = require("../db/databaseQuery");

exports.getColorGameTaleData = async (req, res) => {
  const sql = `SELECT * FROM cg_db.tb_colortable;`;

  try {
    const results = await databaseQuery(sql);

    res.status(200).send({ data: results });
  } catch (error) {
    res.status(500).send({ message: "Internal server error." });
  }
};
