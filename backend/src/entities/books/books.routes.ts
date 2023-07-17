import { Router } from 'express';
import * as BooksController from './books.controller';

const router = Router();

router.post('/books', BooksController.createOne);
router.get('/books', BooksController.findAll);
router.get('/books/:bookId', BooksController.findOne);
router.patch('/books/:bookId', BooksController.updateOne);
router.delete('/books/:bookId', BooksController.deleteOne);

export default router;
