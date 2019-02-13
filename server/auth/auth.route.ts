import express from 'express';
import expressJwt from 'express-jwt';
import paramValidation from '../config/param-validation';
import authCtrl from './auth.controller';
import config from '../config/config';

const validate = require('express-validation');
const router = express.Router(); // eslint-disable-line new-cap

/** POST /api/auth/login - Returns token if correct username and password is provided */
router.route('/login')
  .post(validate(paramValidation.login), authCtrl.login);

/** GET /api/auth/random-number - Protected route,
 * needs token returned by the above as header. Authorization: Bearer {token} */
router.route('/random-number')
  .get(expressJwt({ secret: config.jwtSecret }), authCtrl.getRandomNumber);

export default router;
