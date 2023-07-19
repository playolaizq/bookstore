import { param } from 'express-validator';

export const findOne = [param('userId').notEmpty().isUUID()];
