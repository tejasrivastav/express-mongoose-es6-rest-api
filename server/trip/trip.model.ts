import Promise from 'bluebird';
import mongoose, { Model } from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import { ObjectId } from 'bson';

export interface SkipLimit {
  skip: Number;
  limit: Number;
}
export interface ITrip extends Model<any> {
  get(id: ObjectId): any;
  list(SkipLimit?: SkipLimit): any;
}

const pointSchema = new mongoose.Schema({
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
const TripSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

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
  get(id: ObjectId) {
    return this.findById(id)
      .exec()
      .then((trip: any) => {
        if (trip) {
          return trip;
        }
        const err = new APIError('No such trip exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
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
const ITrip: ITrip = mongoose.model<any, ITrip>('trip', TripSchema);
export default ITrip;
