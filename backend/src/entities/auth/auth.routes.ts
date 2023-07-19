import { Router } from 'express';
import { validate } from '../../application/middlewares/validate';
import * as AuthController from './auth.controller';
import * as AuthValidators from './auth.validators';

const router = Router();

router.post('/auth/sign-up', validate(AuthValidators.signUp), AuthController.signUp);
router.post('/auth/sign-in', validate(AuthValidators.signIn), AuthController.signIn);

export default router;
