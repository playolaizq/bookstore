import express from 'express';
import cors from 'cors';
import { Routes } from './routes';
import { ErrorHandler } from './middlewares/error-handler';

const PORT = process.env.PORT || 3333;

const app = express();

const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://playolaizq-bookstore.web.app',
  'https://playolaizq-bookstore.firebaseapp.com',
];
const options: cors.CorsOptions = { origin: ALLOWED_ORIGINS };
app.use(cors(options));

app.use(express.json());

Routes(app);
ErrorHandler(app);

export const server = app.listen(PORT, () => {
  console.log(`Server ready at: http://localhost:${PORT}`);
});
