import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as UsersService from '../users/users.service';
import { Error } from '../users/constants/error';

export const signUp = async (req: Request, res: Response) => {
  const newUser = await UsersService.create(req.body);

  if ('error' in newUser && newUser.error == Error.CONFLICT) {
    return res.status(StatusCodes.CONFLICT).json({ error: Error.CONFLICT });
  }

  return res.status(StatusCodes.CREATED).json(newUser);
};

export const signIn = async (req: Request, res: Response) => {
  const user = await UsersService.findByEmail(req.body.email);

  if (!user) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: Error.NOT_FOUND });
  }

  return res.status(StatusCodes.OK).json(user);
};
