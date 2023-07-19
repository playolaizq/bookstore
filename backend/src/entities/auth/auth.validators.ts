import { body } from 'express-validator';

export const signUp = [
  body('email').trim().isEmail(),
  body('password').notEmpty().isString().isLength({ min: 8 }),
  body('firstName').notEmpty().isString(),
  body('lastName').notEmpty().isString(),
];

export const signIn = [
  body('email').trim().isEmail(),
  body('password').notEmpty().isString().isLength({ min: 8 }),
];
