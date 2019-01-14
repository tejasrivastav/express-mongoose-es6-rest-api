"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const util_1 = __importDefault(require("util"));
// config should be imported before importing any other file
const config_1 = __importDefault(require("../config/config"));
const express_1 = __importDefault(require("../config/express"));
const debug = require('debug')('express-mongoose-es6-rest-api:index');
// make bluebird default Promise
const bluebird_1 = __importDefault(require("bluebird")); // eslint-disable-line no-global-assign
// plugin bluebird promise in mongoose
mongoose_1.default.Promise = bluebird_1.default;
// connect to mongo db
const mongoUri = config_1.default.mongo.host || "";
mongoose_1.default.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
mongoose_1.default.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
});
// print mongoose logs in dev env
if (config_1.default.mongooseDebug) {
    mongoose_1.default.set('debug', (collectionName, method, query, doc) => {
        debug(`${collectionName}.${method}`, util_1.default.inspect(query, false, 20), doc);
    });
}
// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
    // listen on port config.port
    express_1.default.listen(config_1.default.port, () => {
        console.info(`server started on port ${config_1.default.port} (${config_1.default.env})`); // eslint-disable-line no-console
    });
}
exports.default = express_1.default;
