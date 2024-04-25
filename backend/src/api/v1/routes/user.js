const logger = require("../../../utils/winston");
const express = require("express");
const router = express.Router();
const pool = require("../../../db/db.js");

console.log(pool);

router.get("/", async (req, res) => {
  let connection;
  let query = "SELECT * FROM user";
  try {
    connection = await pool.getConnection();
    const result = await connection.query(query);
    logger.info(result);
    res.status(200).send(result);
  } catch (err) {
    logger.error(err);
    res.status(500).send("Internal server error");
  } finally {
    if (connection) connection.release();
  }
  logger.info("Got an GET request on api/v1/user/");
});

module.exports = router;
