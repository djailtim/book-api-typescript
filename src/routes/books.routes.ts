import { Router } from "express";

import { CreateBookController } from "../modules/books/useCases/createBook/CreateBookController";

const booksRouter = Router();
const createBookController = new CreateBookController;

booksRouter.post('/', createBookController.execute);

export { booksRouter };