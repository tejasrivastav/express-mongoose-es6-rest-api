"use strict";
// const express = require('express');
// const userRoutes = require('./server/user/user.route');
// const authRoutes = require('./server/auth/auth.route');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const router = express.Router(); // eslint-disable-line new-cap
// // TODO: use glob to match *.route files
// /** GET /health-check - Check service health */
// router.get('/health-check', (req, res) =>
//   res.send('OK')
// );
// // mount user routes at /users
// router.use('/users', userRoutes);
// // mount auth routes at /auth
// router.use('/auth', authRoutes);
// module.exports = router;
const express_1 = __importDefault(require("express"));
// import userRoutes from './server/user/user.route';
// import authRoutes from './server/auth/auth.route';
const router = express_1.default.Router(); // eslint-disable-line new-cap
// TODO: use glob to match *.route files
/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));
// mount user routes at /users
// router.use('/users', userRoutes);
// mount auth routes at /auth
// router.use('/auth', authRoutes);
exports.default = router;
