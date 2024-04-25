// maybe make an explicit singleton for clarity?

const winston = require("winston");
const path = require("path");

const logPath = path.join(__dirname, "../../", "logs");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: path.join(logPath, "error.log"),
      level: "error",
    }),
    new winston.transports.File({
      filename: path.join(logPath, "combined.log"),
    }),
  ],
});

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

module.exports = logger;
