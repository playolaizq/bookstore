import { Router } from 'express';
import * as UsersController from './users.controller';

const router = Router();

router.post('/users', UsersController.createOne);
router.get('/users', UsersController.findAll);
router.get('/users/:userId', UsersController.findOne);

export default router;
