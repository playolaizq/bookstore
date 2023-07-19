import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ExtendedRequest } from '../../application/middlewares/user-data';
import * as BooksService from './books.service';
import { Error } from './constants/error';

export const createOne = async (req: ExtendedRequest, res: Response) => {
  const newBook = await BooksService.create({ ...req.body, createdBy: req.userId });

  return res.status(StatusCodes.CREATED).json(newBook);
};

export const findAll = async (req: ExtendedRequest, res: Response) => {
  const books = await BooksService.findAll({ createdBy: req.userId });

  return res.status(StatusCodes.OK).json(books);
};

export const findOne = async (req: ExtendedRequest, res: Response) => {
  const book = await BooksService.findOne(req.params.bookId);

  if (!book) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: Error.NOT_FOUND });
  }

  return res.status(StatusCodes.OK).json(book);
};

export const updateOne = async (req: ExtendedRequest, res: Response) => {
  const { bookId } = req.params;

  const book = await BooksService.findOne(bookId);
  if (!book) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: Error.NOT_FOUND });
  }

  const updated = await BooksService.updateOne(bookId, req.body);

  return res.status(StatusCodes.OK).json(updated);
};

export const deleteOne = async (req: ExtendedRequest, res: Response) => {
  const { bookId } = req.params;

  const book = await BooksService.findOne(bookId);
  if (!book) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: Error.NOT_FOUND });
  }

  await BooksService.deleteOne(bookId);

  return res.status(StatusCodes.NO_CONTENT).json({ deleted: bookId });
};
