import { Router } from "express";

import { CreateBookController } from "../modules/books/useCases/createBook/CreateBookController";
import { ensureAuthenticated } from "../shared/infra/http/middlwares/ensureAuthenticated";
import { GetBookController } from "../modules/books/useCases/getBook/GetBookController";
import { GetAllBookController } from "../modules/books/useCases/getAllBooks/GetAllBooksController";
import { UpdateBookController } from "../modules/books/useCases/updateBook/UpdateBookController";
import { DeleteBookController } from "../modules/books/useCases/deleteBook/DeleteBookController";
import { GetAllBooksByCategoryController } from "../modules/books/useCases/getAllBooksByCategory/GetAllBooksByCategoryController";

const booksRouter = Router();
const createBookController = new CreateBookController;
const getAllBooksController = new GetAllBookController;
const getAllBooksByCategoryController = new GetAllBooksByCategoryController;
const getBookController = new GetBookController;
const updateBookController = new UpdateBookController;
const deleteBookController = new DeleteBookController;

booksRouter.use(ensureAuthenticated);

booksRouter.post('/', createBookController.execute);
booksRouter.get('/', getAllBooksController.execute);
booksRouter.get('/find', getAllBooksByCategoryController.execute);
booksRouter.get('/:id', getBookController.execute);
booksRouter.put('/:id', updateBookController.execute);
booksRouter.delete('/:id', deleteBookController.execute);

export { booksRouter };
