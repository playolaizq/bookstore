import { Express } from 'express';
import { StatusCodes } from 'http-status-codes';

export const ErrorHandler = (app: Express) => {    
  app.use((req, res, next) => {
    try {
      next();
    } catch (err) {
      next(err);
    }
  });

  app.use((req, res) => {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  });
};
