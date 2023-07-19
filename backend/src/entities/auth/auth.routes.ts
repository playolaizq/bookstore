import { Router } from 'express';
import * as AuthController from './auth.controller';
import * as AuthValidators from './auth.validators';

const router = Router();

router.post('/auth/sign-up', AuthValidators.signUp, AuthController.signUp);
router.post('/auth/sign-in', AuthValidators.signIn, AuthController.signIn);

export default router;
