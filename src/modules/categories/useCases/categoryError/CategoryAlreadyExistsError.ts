import { AppError } from "../../../../shared/errors/AppError";

export class CategoryAlreadyExistsError extends AppError {
  constructor() {
    super('Category already exists', 409);
  }
}
