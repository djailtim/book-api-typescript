import { AppError } from "../../../../shared/errors/AppError";

export class BookDoesNotBelongUserError extends AppError {
  constructor() {
    super('Book does not belong to the user', 400);
  }
}
