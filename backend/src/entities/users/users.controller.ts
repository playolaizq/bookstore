import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as UsersService from './users.service';
import { Error } from './constants/error';

export const findOne = async (req: Request, res: Response) => {
  const user = await UsersService.findOne(req.params.userId);

  if (!user) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: Error.NOT_FOUND });
  }

  return res.status(StatusCodes.OK).json(user);
};
