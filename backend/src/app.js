const logger = require("./utils/winston");
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(port, () => {
  logger.info(`App listening on port ${port}`);
});
