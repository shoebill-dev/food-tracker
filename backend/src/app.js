const logger = require("./utils/winston");
const express = require("express");
const v1Router = require("./api/v1/routes/routers");

const app = express();
const port = 3000;

app.use("/", v1Router);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(port, () => {
  logger.info(`App listening on port ${port}`);
});
