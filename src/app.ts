import 'reflect-metadata';
import 'express-async-errors';

import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import './database'; // Usar para banco de dados sqlite3
// import createConnection from "./database" // Usar para banco de dados postgres
import './shared/container';
import { router } from './routes';
import { AppError } from './shared/errors/AppError';

// createConnection(); // Usar para banco de dados postgres
const app = express();

/** Cors cors()*/
app.use(cors());

app.use(express.json());

app.use('/api/v1', router);

app.use(
  (err: Error, request: express.Request, response: express.Response, _next: express.NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message} `,
    });
  }
);

export { app };
