import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as UsersService from './users.service';
import { Error } from './constants/error';

export const createOne = async (req: Request, res: Response) => {
  const newUser = await UsersService.create(req.body);

  if ('error' in newUser && newUser.error == Error.CONFLICT) {
    return res.status(StatusCodes.CONFLICT).json({ error: Error.CONFLICT });
  }

  return res.status(StatusCodes.CREATED).json(newUser);
};

export const findAll = async (req: Request, res: Response) => {
  const users = await UsersService.findAll();

  return res.status(StatusCodes.OK).json(users);
};

export const findOne = async (req: Request, res: Response) => {
  const user = await UsersService.findOne(req.params.userId);

  if (!user) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: Error.NOT_FOUND });
  }

  return res.status(StatusCodes.OK).json(user);
};
