const databaseQuery = require("../db/databaseQuery");

exports.getTableInfo = async (req, res) => {
  const queryGetTableInfo = `SELECT * FROM cg_db.tb_colortable WHERE table_name = ?`;
  const {
    body: { table_name },
  } = req;

  try {
    const results = await databaseQuery(queryGetTableInfo, [table_name]);
    console.log(results);

    return res.status(200).send({
      data: results,
    });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error." });
  }
};
