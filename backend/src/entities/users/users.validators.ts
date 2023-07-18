import { body, param } from 'express-validator';

export const createUser = [
  body('email').trim().isEmail(),
  body('firstName').notEmpty().isString(),
  body('lastName').notEmpty().isString(),
];

export const findOne = [param('userId').notEmpty().isUUID()];
