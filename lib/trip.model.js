"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bluebird = _interopRequireDefault(require("bluebird"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _httpStatus = _interopRequireDefault(require("http-status"));

var _APIError = _interopRequireDefault(require("../helpers/APIError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pointSchema = new _mongoose.default.Schema({
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

var TripSchema = new _mongoose.default.Schema({
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
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
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
  get: function get(id) {
    return this.findById(id).exec().then(function (trip) {
      if (trip) {
        return trip;
      }

      var err = new _APIError.default('No such trip exists!', _httpStatus.default.NOT_FOUND);
      return _bluebird.default.reject(err);
    });
  },

  /**
   * List trips in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of trips to be skipped.
   * @param {number} limit - Limit number of trips to be returned.
   * @returns {Promise<trip[]>}
   */
  list: function list() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$skip = _ref.skip,
        skip = _ref$skip === void 0 ? 0 : _ref$skip,
        _ref$limit = _ref.limit,
        limit = _ref$limit === void 0 ? 50 : _ref$limit;

    return this.find().sort({
      createdAt: -1
    }).skip(+skip).limit(+limit).exec();
  }
};
/**
 * @typedef trip
 */

var ITrip = _mongoose.default.model('trip', TripSchema);

var _default = ITrip;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci90cmlwL3RyaXAubW9kZWwudHMiXSwibmFtZXMiOlsicG9pbnRTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsInR5cGUiLCJTdHJpbmciLCJlbnVtIiwicmVxdWlyZWQiLCJkZWZhdWx0IiwiY29vcmRpbmF0ZXMiLCJOdW1iZXIiLCJUcmlwU2NoZW1hIiwib3JpZ2luIiwiZGVzdGluYXRpb24iLCJkaXN0YW5jZSIsImVzdEJ1ZGdldCIsImxpa2VzIiwicmF0aW5nIiwidG9wUG9zdHMiLCJjcmVhdGVkQnkiLCJ1cGRhdGVkQnkiLCJ0aW1lc3RhbXBzIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwibWV0aG9kIiwic3RhdGljcyIsImdldCIsImlkIiwiZmluZEJ5SWQiLCJleGVjIiwidGhlbiIsInRyaXAiLCJlcnIiLCJBUElFcnJvciIsImh0dHBTdGF0dXMiLCJOT1RfRk9VTkQiLCJQcm9taXNlIiwicmVqZWN0IiwibGlzdCIsInNraXAiLCJsaW1pdCIsImZpbmQiLCJzb3J0IiwiSVRyaXAiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBWUEsSUFBTUEsV0FBVyxHQUFHLElBQUlDLGtCQUFTQyxNQUFiLENBQW9CO0FBQ3RDQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkEsSUFBQUEsSUFBSSxFQUFFQyxNQURGO0FBRUpDLElBQUFBLElBQUksRUFBRSxDQUFDLE9BQUQsQ0FGRjtBQUdKQyxJQUFBQSxRQUFRLEVBQUUsSUFITjtBQUlKQyxJQUFBQSxPQUFPLEVBQUU7QUFKTCxHQURnQztBQU90Q0MsRUFBQUEsV0FBVyxFQUFFO0FBQ1hMLElBQUFBLElBQUksRUFBRSxDQUFDTSxNQUFELENBREs7QUFFWEgsSUFBQUEsUUFBUSxFQUFFO0FBRkM7QUFQeUIsQ0FBcEIsQ0FBcEI7QUFhQTs7OztBQUdBLElBQU1JLFVBQVUsR0FBRyxJQUFJVCxrQkFBU0MsTUFBYixDQUFvQjtBQUNyQ1MsRUFBQUEsTUFBTSxFQUFFO0FBQ05SLElBQUFBLElBQUksRUFBRUg7QUFEQSxHQUQ2QjtBQUlyQ1ksRUFBQUEsV0FBVyxFQUFFO0FBQ1hULElBQUFBLElBQUksRUFBRUg7QUFESyxHQUp3QjtBQU9yQ2EsRUFBQUEsUUFBUSxFQUFFO0FBQ1JWLElBQUFBLElBQUksRUFBRU07QUFERSxHQVAyQjtBQVVyQ0ssRUFBQUEsU0FBUyxFQUFFO0FBQ1RYLElBQUFBLElBQUksRUFBRU07QUFERyxHQVYwQjtBQWFyQ00sRUFBQUEsS0FBSyxFQUFFLEVBYjhCO0FBY3JDQyxFQUFBQSxNQUFNLEVBQUUsRUFkNkI7QUFlckNDLEVBQUFBLFFBQVEsRUFBRSxFQWYyQjtBQWdCckNDLEVBQUFBLFNBQVMsRUFBRSxFQWhCMEI7QUFpQnJDQyxFQUFBQSxTQUFTLEVBQUU7QUFqQjBCLENBQXBCLEVBa0JqQjtBQUFFQyxFQUFBQSxVQUFVLEVBQUU7QUFBRUMsSUFBQUEsU0FBUyxFQUFFLFlBQWI7QUFBMkJDLElBQUFBLFNBQVMsRUFBRTtBQUF0QztBQUFkLENBbEJpQixDQUFuQjtBQW9CQTs7Ozs7OztBQU9BOzs7O0FBR0FaLFVBQVUsQ0FBQ2EsTUFBWCxDQUFrQixFQUFsQjtBQUdBOzs7O0FBR0FiLFVBQVUsQ0FBQ2MsT0FBWCxHQUFxQjtBQUNuQjs7Ozs7QUFLQUMsRUFBQUEsR0FObUIsZUFNZkMsRUFOZSxFQU1EO0FBQ2hCLFdBQU8sS0FBS0MsUUFBTCxDQUFjRCxFQUFkLEVBQ0pFLElBREksR0FFSkMsSUFGSSxDQUVDLFVBQUNDLElBQUQsRUFBZTtBQUNuQixVQUFJQSxJQUFKLEVBQVU7QUFDUixlQUFPQSxJQUFQO0FBQ0Q7O0FBQ0QsVUFBTUMsR0FBRyxHQUFHLElBQUlDLGlCQUFKLENBQWEsc0JBQWIsRUFBcUNDLG9CQUFXQyxTQUFoRCxDQUFaO0FBQ0EsYUFBT0Msa0JBQVFDLE1BQVIsQ0FBZUwsR0FBZixDQUFQO0FBQ0QsS0FSSSxDQUFQO0FBU0QsR0FoQmtCOztBQWtCbkI7Ozs7OztBQU1BTSxFQUFBQSxJQXhCbUIsa0JBd0JpQjtBQUFBLG1GQUFKLEVBQUk7QUFBQSx5QkFBN0JDLElBQTZCO0FBQUEsUUFBN0JBLElBQTZCLDBCQUF0QixDQUFzQjtBQUFBLDBCQUFuQkMsS0FBbUI7QUFBQSxRQUFuQkEsS0FBbUIsMkJBQVgsRUFBVzs7QUFDbEMsV0FBTyxLQUFLQyxJQUFMLEdBQ0pDLElBREksQ0FDQztBQUFFcEIsTUFBQUEsU0FBUyxFQUFFLENBQUM7QUFBZCxLQURELEVBRUppQixJQUZJLENBRUMsQ0FBQ0EsSUFGRixFQUdKQyxLQUhJLENBR0UsQ0FBQ0EsS0FISCxFQUlKWCxJQUpJLEVBQVA7QUFLRDtBQTlCa0IsQ0FBckI7QUFpQ0E7Ozs7QUFHQSxJQUFNYyxLQUFZLEdBQUd6QyxrQkFBUzBDLEtBQVQsQ0FBMEIsTUFBMUIsRUFBa0NqQyxVQUFsQyxDQUFyQjs7ZUFDZWdDLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvbWlzZSBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgbW9uZ29vc2UsIHsgTW9kZWwgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi4vaGVscGVycy9BUElFcnJvcic7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ2Jzb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNraXBMaW1pdCB7XG4gIHNraXA6IE51bWJlcjtcbiAgbGltaXQ6IE51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVRyaXAgZXh0ZW5kcyBNb2RlbDxhbnk+IHtcbiAgZ2V0KGlkOiBPYmplY3RJZCk6IGFueTtcbiAgbGlzdChTa2lwTGltaXQ/OiBTa2lwTGltaXQpOiBhbnk7XG59XG5cbmNvbnN0IHBvaW50U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHR5cGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZW51bTogWydQb2ludCddLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICdQb2ludCdcbiAgfSxcbiAgY29vcmRpbmF0ZXM6IHtcbiAgICB0eXBlOiBbTnVtYmVyXSxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9XG59KTtcblxuLyoqXG4gKiB0cmlwIFNjaGVtYVxuICovXG5jb25zdCBUcmlwU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIG9yaWdpbjoge1xuICAgIHR5cGU6IHBvaW50U2NoZW1hXG4gIH0sXG4gIGRlc3RpbmF0aW9uOiB7XG4gICAgdHlwZTogcG9pbnRTY2hlbWFcbiAgfSxcbiAgZGlzdGFuY2U6IHtcbiAgICB0eXBlOiBOdW1iZXJcbiAgfSxcbiAgZXN0QnVkZ2V0OiB7XG4gICAgdHlwZTogTnVtYmVyXG4gIH0sXG4gIGxpa2VzOiB7fSxcbiAgcmF0aW5nOiB7fSxcbiAgdG9wUG9zdHM6IHt9LFxuICBjcmVhdGVkQnk6IHt9LFxuICB1cGRhdGVkQnk6IHt9XG59LHsgdGltZXN0YW1wczogeyBjcmVhdGVkQXQ6ICdjcmVhdGVkX2F0JywgdXBkYXRlZEF0OiAndXBkYXRlZF9hdCcgfX0pO1xuXG4vKipcbiAqIEFkZCB5b3VyXG4gKiAtIHByZS1zYXZlIGhvb2tzXG4gKiAtIHZhbGlkYXRpb25zXG4gKiAtIHZpcnR1YWxzXG4gKi9cblxuLyoqXG4gKiBNZXRob2RzXG4gKi9cblRyaXBTY2hlbWEubWV0aG9kKHtcbn0pO1xuXG4vKipcbiAqIFN0YXRpY3NcbiAqL1xuVHJpcFNjaGVtYS5zdGF0aWNzID0ge1xuICAvKipcbiAgICogR2V0IHRyaXBcbiAgICogQHBhcmFtIHtPYmplY3RJZH0gaWQgLSBUaGUgb2JqZWN0SWQgb2YgdHJpcC5cbiAgICogQHJldHVybnMge1Byb21pc2U8dHJpcCwgQVBJRXJyb3I+fVxuICAgKi9cbiAgZ2V0KGlkOiBPYmplY3RJZCkge1xuICAgIHJldHVybiB0aGlzLmZpbmRCeUlkKGlkKVxuICAgICAgLmV4ZWMoKVxuICAgICAgLnRoZW4oKHRyaXA6IGFueSkgPT4ge1xuICAgICAgICBpZiAodHJpcCkge1xuICAgICAgICAgIHJldHVybiB0cmlwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBBUElFcnJvcignTm8gc3VjaCB0cmlwIGV4aXN0cyEnLCBodHRwU3RhdHVzLk5PVF9GT1VORCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIExpc3QgdHJpcHMgaW4gZGVzY2VuZGluZyBvcmRlciBvZiAnY3JlYXRlZEF0JyB0aW1lc3RhbXAuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBza2lwIC0gTnVtYmVyIG9mIHRyaXBzIHRvIGJlIHNraXBwZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAtIExpbWl0IG51bWJlciBvZiB0cmlwcyB0byBiZSByZXR1cm5lZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8dHJpcFtdPn1cbiAgICovXG4gIGxpc3QoeyBza2lwID0gMCwgbGltaXQgPSA1MCB9ID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5maW5kKClcbiAgICAgIC5zb3J0KHsgY3JlYXRlZEF0OiAtMSB9KVxuICAgICAgLnNraXAoK3NraXApXG4gICAgICAubGltaXQoK2xpbWl0KVxuICAgICAgLmV4ZWMoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAdHlwZWRlZiB0cmlwXG4gKi9cbmNvbnN0IElUcmlwOiBJVHJpcCA9IG1vbmdvb3NlLm1vZGVsPGFueSxJVHJpcD4oJ3RyaXAnLCBUcmlwU2NoZW1hKVxuZXhwb3J0IGRlZmF1bHQgSVRyaXA7XG4iXX0=