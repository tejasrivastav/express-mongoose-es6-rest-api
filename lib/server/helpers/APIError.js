"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
/**
 * @extends Error
 */
class ExtendableError extends Error {
    constructor(message, status, isPublic) {
        super(message);
        this.status = status;
        this.isPublic = isPublic;
        this.name = this.constructor.name;
        this.message = message;
        this.status = status;
        this.isPublic = isPublic;
        console.log(this.status, this.isPublic);
        Error.captureStackTrace(this, this.constructor);
    }
}
/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
    /**
     * Creates an API error.
     * @param {string} message - Error message.
     * @param {number} status - HTTP status code of error.
     * @param {boolean} isPublic - Whether the message should be visible to user or not.
     */
    constructor(message, status = http_status_1.default.INTERNAL_SERVER_ERROR, isPublic = false) {
        super(message, status, isPublic);
    }
}
exports.default = APIError;
