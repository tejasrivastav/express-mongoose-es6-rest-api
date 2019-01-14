"use strict";
// const winston = require('winston');
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const logger = new (winston.Logger)({
//   transports: [
//     new (winston.transports.Console)({
//       json: true,
//       colorize: true
//     })
//   ]
// });
// module.exports = logger;
const winston = __importStar(require("winston"));
const config_1 = __importDefault(require("./config"));
const logger = winston.createLogger({
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    level: "debug",
    transports: [
        new winston.transports.File({
            filename: config_1.default.LOG_FILE,
            maxsize: 4096,
        }),
    ],
});
if (process.env.NODE_ENV !== "production") {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}
exports.default = logger;
