"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bluebird_1 = __importDefault(require("bluebird"));
const mongoose_1 = __importDefault(require("mongoose"));
const http_status_1 = __importDefault(require("http-status"));
const APIError_1 = __importDefault(require("../helpers/APIError"));
const pointSchema = new mongoose_1.default.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        required: true
    }
});
/**
 * trip Schema
 */
const TripSchema = new mongoose_1.default.Schema({
    origin: {
        type: pointSchema
    },
    destination: {
        type: pointSchema
    },
    distance: {
        type: Number
    },
    estBudget: {
        type: Number
    },
    likes: {},
    rating: {},
    topPosts: {},
    createdBy: {},
    updatedBy: {}
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */
/**
 * Methods
 */
TripSchema.method({});
/**
 * Statics
 */
TripSchema.statics = {
    /**
     * Get trip
     * @param {ObjectId} id - The objectId of trip.
     * @returns {Promise<trip, APIError>}
     */
    get(id) {
        return this.findById(id)
            .exec()
            .then((trip) => {
            if (trip) {
                return trip;
            }
            const err = new APIError_1.default('No such trip exists!', http_status_1.default.NOT_FOUND);
            return bluebird_1.default.reject(err);
        });
    },
    /**
     * List trips in descending order of 'createdAt' timestamp.
     * @param {number} skip - Number of trips to be skipped.
     * @param {number} limit - Limit number of trips to be returned.
     * @returns {Promise<trip[]>}
     */
    list({ skip = 0, limit = 50 } = {}) {
        return this.find()
            .sort({ createdAt: -1 })
            .skip(+skip)
            .limit(+limit)
            .exec();
    }
};
/**
 * @typedef trip
 */
const ITrip = mongoose_1.default.model('trip', TripSchema);
exports.default = ITrip;
