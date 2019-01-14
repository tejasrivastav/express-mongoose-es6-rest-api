"use strict";
// const express = require('express');
// const logger = require('morgan');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const compress = require('compression');
// const methodOverride = require('method-override');
// const cors = require('cors');
// const httpStatus = require('http-status');
// const expressWinston = require('express-winston');
// const expressValidation = require('express-validation');
// const helmet = require('helmet');
// const graphqlHTTP = require('express-graphql');
// const { buildSchema } = require('graphql');
// const schema = require('../server/schema/schema');
// const winstonInstance = require('./winston');
// const routes = require('../index.route');
// const config = require('./config');
// const APIError = require('../server/helpers/APIError');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// if (config.env === 'development') {
//   app.use(logger('dev'));
// }
// // parse body params and attache them to req.body
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(compress());
// app.use(methodOverride());
// // secure apps by setting various HTTP headers
// app.use(helmet());
// // enable CORS - Cross Origin Resource Sharing
// app.use(cors());
// app.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true
// }));
// // enable detailed API logging in dev env
// if (config.env === 'development') {
//   expressWinston.requestWhitelist.push('body');
//   expressWinston.responseWhitelist.push('body');
//   app.use(expressWinston.logger({
//     winstonInstance,
//     meta: true, // optional: log meta data about request (defaults to true)
//     msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
//     colorStatus: true // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
//   }));
// }
// // mount all routes on /api path
// app.use('/api', routes);
// // if error is not an instanceOf APIError, convert it.
// app.use((err, req, res, next) => {
//   if (err instanceof expressValidation.ValidationError) {
//     // validation error contains errors which is an array of error each containing message[]
//     const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
//     const error = new APIError(unifiedErrorMessage, err.status, true);
//     return next(error);
//   } else if (!(err instanceof APIError)) {
//     const apiError = new APIError(err.message, err.status, err.isPublic);
//     return next(apiError);
//   }
//   return next(err);
// });
// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new APIError('API not found', httpStatus.NOT_FOUND);
//   return next(err);
// });
// // log error in winston transports except when executing test suite
// if (config.env !== 'test') {
//   app.use(expressWinston.errorLogger({
//     winstonInstance
//   }));
// }
// // error handler, send stacktrace only during development
// app.use((err, req, res, next) => // eslint-disable-line no-unused-vars
//   res.status(err.status).json({
//     message: err.isPublic ? err.message : httpStatus[err.status],
//     stack: config.env === 'development' ? err.stack : {}
//   })
// );
// module.exports = app;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const method_override_1 = __importDefault(require("method-override"));
const cors_1 = __importDefault(require("cors"));
const http_status_1 = __importDefault(require("http-status"));
const express_winston_1 = __importDefault(require("express-winston"));
// import expressValidator = require('express-validation');
const helmet_1 = __importDefault(require("helmet"));
const express_graphql_1 = __importDefault(require("express-graphql"));
const schema_1 = __importDefault(require("../schema/schema"));
const winston_1 = __importDefault(require("./winston"));
const index_route_1 = __importDefault(require("../index.route"));
const config_1 = __importDefault(require("./config"));
const APIError_1 = __importDefault(require("../helpers/APIError"));
const app = express_1.default();
if (config_1.default.env === 'development') {
    app.use(morgan_1.default('dev'));
}
// parse body params and attache them to req.body
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_parser_1.default());
app.use(compression_1.default());
app.use(method_override_1.default());
// secure apps by setting various HTTP headers
app.use(helmet_1.default());
// enable CORS - Cross Origin Resource Sharing
app.use(cors_1.default());
app.use('/graphql', express_graphql_1.default({
    schema: schema_1.default,
    graphiql: true
}));
// enable detailed API logging in dev env
if (config_1.default.env === 'development') {
    express_winston_1.default.requestWhitelist.push('body');
    express_winston_1.default.responseWhitelist.push('body');
    app.use(express_winston_1.default.logger({
        winstonInstance: winston_1.default,
        meta: true,
        msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
        colorize: true,
    }));
}
// mount all routes on /api path
app.use('/api', index_route_1.default);
// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
    if (err) {
        // // validation error contains errors which is an array of error each containing message[]
        const unifiedErrorMessage = err.errors.map((error) => error.messages.join('. ')).join(' and ');
        const error = new APIError_1.default(unifiedErrorMessage, err.status, true);
        return next(error);
    }
    else if (!(err instanceof APIError_1.default)) {
        const apiError = new APIError_1.default(err.message, err.status, err.isPublic);
        return next(apiError);
    }
    return next(err);
});
// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new APIError_1.default('API not found', http_status_1.default.NOT_FOUND);
    return next(err);
});
// log error in winston transports except when executing test suite
if (config_1.default.env !== 'test') {
    app.use(express_winston_1.default.errorLogger({
        winstonInstance: winston_1.default
    }));
}
// error handler, send stacktrace only during development
app.use((err, req, res, next) => {
    const status = http_status_1.default;
    return res.status(err.status).json({
        message: err.isPublic ? err.message : status[err.status],
        stack: config_1.default.env === 'development' ? err.stack : {}
    });
});
exports.default = app;
