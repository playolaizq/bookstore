import { Router } from 'express';
import { userData } from '../../application/middlewares/user-data';
import * as BooksController from './books.controller';

const router = Router();

router.post('/books', userData, BooksController.createOne);
router.get('/books', userData, BooksController.findAll);
router.get('/books/:bookId', userData, BooksController.findOne);
router.patch('/books/:bookId', userData, BooksController.updateOne);
router.delete('/books/:bookId', userData, BooksController.deleteOne);

export default router;
