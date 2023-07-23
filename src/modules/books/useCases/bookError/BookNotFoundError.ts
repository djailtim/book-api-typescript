import { AppError } from "../../../../shared/errors/AppError";

export class BookNotFoundError extends AppError {
  constructor() {
    super('Book not found', 404);
  }
}
