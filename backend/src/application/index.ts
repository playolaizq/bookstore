import express from 'express';
import { Routes } from './routes';
import { ErrorHandler } from './middlewares/error-handler';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());

Routes(app);
ErrorHandler(app);

export const server = app.listen(PORT, () => {
  console.log(`Server ready at: http://localhost:${PORT}`);
});
