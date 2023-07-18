import { Express } from 'express';
import AuthRoutes from '../../entities/auth/auth.routes';
import UsersRoutes from '../../entities/users/users.routes';
import EntriesRoutes from '../../entities/books/books.routes';

export const Routes = (app: Express) => {
  app.use('/v1', AuthRoutes);
  app.use('/v1', UsersRoutes);
  app.use('/v1', EntriesRoutes);
};
