import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { hashPassword } from '../../common/utils/bcrypt';
import * as UsersService from '../users/users.service';
import { Error as UserError } from '../users/constants/error';

export const signUp = async (req: Request, res: Response) => {
  const hashedPassword = await hashPassword(req.body.password);
  console.log('hashedPassword', hashedPassword);
  const newUser = await UsersService.create({ ...req.body, password: hashedPassword });

  if ('error' in newUser && newUser.error == UserError.CONFLICT) {
    // TODO: Manage Conflict error as Created and send feedback to the already registered user via email.
    return res.status(StatusCodes.CREATED).send();
  }

  return res.status(StatusCodes.CREATED).json(newUser);
};

export const signIn = async (req: Request, res: Response) => {
  const user = await UsersService.findByEmail(req.body.email);

  if (!user) {
    return res.status(StatusCodes.UNAUTHORIZED).send();
  }

  return res.status(StatusCodes.OK).json(user);
};
