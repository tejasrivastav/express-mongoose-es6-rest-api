import Promise  from 'bluebird';
import mongoose, { Document, Model }  from 'mongoose';
import httpStatus  from 'http-status';
import APIError  from '../helpers/APIError';

export interface IUserDocument extends Document {
  username: string,
  mobileNumber: string,
  createdAt: Date;
}

interface SkipLimit {
  skip: number;
  limit: number;
}

export interface IUserModel extends Model<IUserDocument> {
  get(id: string): Promise<IUserDocument>;
  list(args: SkipLimit): Promise<IUserDocument[]>
}

/**
 * User Schema
 */
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    match: [/^[1-9][0-9]{9}$/, 'The value of path {PATH} ({VALUE}) is not a valid mobile number.']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
UserSchema.method({
});

/**
 * Statics
 */
UserSchema.statics = {
  /**
   * Get user
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  get(id: string) {
    return this.findById(id)
      .exec()
      .then((user: IUserDocument) => {
        if (user) {
          return user;
        }
        const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List users in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   * @returns {Promise<User[]>}
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
 * @typedef User
 */
export const User: IUserModel = mongoose.model<IUserDocument, IUserModel>('User', UserSchema);
export default User;
