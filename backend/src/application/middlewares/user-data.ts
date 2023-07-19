import { NextFunction, Request, Response } from 'express';

export type ExtendedRequest = Request & {
  userId?: string;
};

export const userData = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
  if (req.headers['x-authenticated-userid']) {
    req.userId = req.headers['x-authenticated-userid'] as string;
  }
  next();
};
