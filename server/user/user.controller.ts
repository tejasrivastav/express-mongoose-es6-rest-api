import User from './user.model';
import { NextFunction, Request, Response } from 'express';
import { CustomRequest } from '../helpers/Request';
import APIError from '../helpers/APIError';

/**
 * Load user and append to req.
 */
function load(req: Request, res: Response, next: NextFunction, id: string) {
  User.get(id)
    .then((user) => {
      let newReq: CustomRequest = Object.assign({user: user},req);
      req = newReq;// eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get user
 * @returns {User}
 */
function get(req: CustomRequest, res: Response) {
  return res.json(req.user);
}

/**
 * Create new user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
function create(req: Request, res: Response, next: NextFunction) {
  const user = new User({
    username: req.body.username,
    mobileNumber: req.body.mobileNumber
  });

  user.save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
}

/**
 * Update existing user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
function update(req: CustomRequest, res: Response, next: NextFunction) {
  const user = req.user;
  if(user){
    user.username = req.body.username;
    user.mobileNumber = req.body.mobileNumber;

    user.save()
      .then(savedUser => res.json(savedUser))
      .catch(e => next(e));
  } else throw new APIError("User not found");
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req: Request, res: Response, next: NextFunction) {
  const { limit = 50, skip = 0 } = req.query;
  User.list({ limit, skip })
    .then(users => res.json(users))
    .catch(e => next(e));
}

/**
 * Delete user.
 * @returns {User}
 */
function remove(req: CustomRequest, res: Response, next: NextFunction) {
  const user = req.user;
  if(user)
    user.remove()
      .then(deletedUser => res.json(deletedUser))
      .catch(e => next(e));
  else throw new APIError("User not found");
}

export default { load, get, create, update, list, remove };