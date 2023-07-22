import { AppError } from "../../../../shared/errors/AppError";

export class GetCategoryError extends AppError {
  constructor() {
    super('Category not found', 404);
  }
}
