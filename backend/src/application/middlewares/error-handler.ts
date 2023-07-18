import { Express } from 'express';
import { StatusCodes } from 'http-status-codes';

export const ErrorHandler = (app: Express) => {
  app.use((req, res, next) => {
    try {
      return next();
    } catch (err) {
      return next(err);
    }
  });

  app.use((req, res) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  });
};
