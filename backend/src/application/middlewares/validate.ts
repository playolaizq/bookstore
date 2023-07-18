import { NextFunction, Request, Response } from 'express';
import { validationResult, ValidationChain } from 'express-validator';
import { StatusCodes } from 'http-status-codes';

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));
    const result = validationResult(req);

    if (result.isEmpty()) {
      return next();
    }

    return res.status(StatusCodes.BAD_REQUEST).json({ errors: result.array() });
  };
};
