import { Router } from 'express';
import * as AuthController from './auth.controller';

const router = Router();

router.post('/auth/sign-up', AuthController.signUp);
router.post('/auth/sign-in', AuthController.signIn);

export default router;
