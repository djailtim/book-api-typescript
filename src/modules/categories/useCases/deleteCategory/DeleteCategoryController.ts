import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

export class DeleteCategoryController {
  async execute(request: Request, response: Response) {
    const { id } = request.params;

    const deleteCategory = container.resolve(DeleteCategoryUseCase);
    await deleteCategory.execute(id);
    return response.status(204).send();
  }
}
