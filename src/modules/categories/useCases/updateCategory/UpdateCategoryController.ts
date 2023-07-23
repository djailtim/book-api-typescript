import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

export class UpdateCategoryController {
  async execute(request: Request, response: Response) {
    const { id } = request.params;
    const { name, description } = request.body;

    const updateCategory = container.resolve(UpdateCategoryUseCase);
    updateCategory.execute(id, { name, description });

    return response.send();
  }
}
