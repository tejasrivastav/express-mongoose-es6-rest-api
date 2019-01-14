const Trip = require('./trip.model');

/**
 * Load Trip and append to req.
 */
function load(req, res, next, id) {
  Trip.get(id)
    .then((trip) => {
      req.trip = trip; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get Trip
 * @returns {Trip}
 */
function get(req, res) {
  return res.json(req.trip);
}

/**
 * Create new Trip
 * @property {string} req.body.Tripname - The Tripname of Trip.
 * @property {string} req.body.mobileNumber - The mobileNumber of Trip.
 * @returns {Trip}
 */
function create(req, res, next) {
  const trip = new Trip({
    tripname: req.body.tripname,
    mobileNumber: req.body.mobileNumber
  });

  trip.save()
    .then(savedTrip => res.json(savedTrip))
    .catch(e => next(e));
}

/**
 * Update existing Trip
 * @property {string} req.body.Tripname - The Tripname of Trip.
 * @property {string} req.body.mobileNumber - The mobileNumber of Trip.
 * @returns {Trip}
 */
function update(req, res, next) {
  const trip = req.trip;
  trip.tripname = req.body.tripname;
  trip.mobileNumber = req.body.mobileNumber;

  trip.save()
    .then(savedTrip => res.json(savedTrip))
    .catch(e => next(e));
}

/**
 * Get Trip list.
 * @property {number} req.query.skip - Number of Trips to be skipped.
 * @property {number} req.query.limit - Limit number of Trips to be returned.
 * @returns {Trip[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Trip.list({ limit, skip })
    .then(trips => res.json(trips))
    .catch(e => next(e));
}

/**
 * Delete Trip.
 * @returns {Trip}
 */
function remove(req, res, next) {
  const trip = req.trip;
  Trip.remove()
    .then(deletedTrip => res.json(deletedTrip))
    .catch(e => next(e));
}

module.exports = { load, get, create, update, list, remove };
