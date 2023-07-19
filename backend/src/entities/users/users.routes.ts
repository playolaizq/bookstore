import { Router } from 'express';
import { validate } from '../../application/middlewares/validate';
import * as UsersController from './users.controller';
import * as UsersValidators from './users.validators';

const router = Router();

router.get('/users/:userId', validate(UsersValidators.findOne), UsersController.findOne);

export default router;
