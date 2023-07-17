import express from 'express';
import { Routes } from './application/routes';
import { ErrorHandler } from './application/middlewares/error';

const PORT = process.env.PORT || 3333;
const app = express();

app.use(express.json());

ErrorHandler(app);
Routes(app);

app.listen(PORT, () => {
  console.log(`Server ready at: http://localhost:${PORT}`);
});
