// const winston = require('winston');

// const logger = new (winston.Logger)({
//   transports: [
//     new (winston.transports.Console)({
//       json: true,
//       colorize: true
//     })
//   ]
// });

// module.exports = logger;

import * as winston from 'winston';
import config from './config';

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  level: 'debug',
  transports: [
    new winston.transports.File({
      filename: config.LOG_FILE,
      maxsize: 4096
    })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}

export default logger;
