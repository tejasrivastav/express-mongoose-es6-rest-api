"use strict";
// const Joi = require('joi');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // require and configure dotenv, will load vars in .env in PROCESS.ENV
// require('dotenv').config();
// // define validation for all the env vars
// const envVarsSchema = Joi.object({
//   NODE_ENV: Joi.string()
//     .allow(['development', 'production', 'test', 'provision'])
//     .default('development'),
//   PORT: Joi.number()
//     .default(4040),
//   MONGOOSE_DEBUG: Joi.boolean()
//     .when('NODE_ENV', {
//       is: Joi.string().equal('development'),
//       then: Joi.boolean().default(true),
//       otherwise: Joi.boolean().default(false)
//     }),
//   JWT_SECRET: Joi.string().required()
//     .description('JWT Secret required to sign'),
//   MONGO_HOST: Joi.string().required()
//     .description('Mongo DB host url'),
//   MONGO_PORT: Joi.number()
//     .default(27017)
// }).unknown()
//   .required();
// const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
// if (error) {
//   throw new Error(`Config validation error: ${error.message}`);
// }
// const config = {
//   env: envVars.NODE_ENV,
//   port: envVars.PORT,
//   mongooseDebug: envVars.MONGOOSE_DEBUG,
//   jwtSecret: envVars.JWT_SECRET,
//   mongo: {
//     host: envVars.MONGO_HOST,
//     port: envVars.MONGO_PORT
//   }
// };
// module.exports = config;
const joi_1 = __importDefault(require("joi"));
// require and configure dotenv, will load vars in .env in PROCESS.ENV
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// define validation for all the env vars
const envVarsSchema = joi_1.default.object({
    NODE_ENV: joi_1.default.string()
        .allow(['development', 'production', 'test', 'provision'])
        .default('development'),
    PORT: joi_1.default.number()
        .default(4040),
    MONGOOSE_DEBUG: joi_1.default.boolean()
        .when('NODE_ENV', {
        is: joi_1.default.string().equal('development'),
        then: joi_1.default.boolean().default(true),
        otherwise: joi_1.default.boolean().default(false)
    }),
    JWT_SECRET: joi_1.default.string().required()
        .description('JWT Secret required to sign'),
    MONGO_HOST: joi_1.default.string().required()
        .description('Mongo DB host url'),
    MONGO_PORT: joi_1.default.number()
        .default(27017),
    LOG_FILE: joi_1.default.string().default('logfile')
}).unknown()
    .required();
const { error, value: envVars } = joi_1.default.validate(process.env, envVarsSchema);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}
const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    mongooseDebug: envVars.MONGOOSE_DEBUG,
    jwtSecret: envVars.JWT_SECRET,
    mongo: {
        host: envVars.MONGO_HOST,
        port: envVars.MONGO_PORT
    },
    LOG_FILE: envVars.LOG_FILE
};
exports.default = config;
