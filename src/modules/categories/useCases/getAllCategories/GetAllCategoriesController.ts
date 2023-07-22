import { Request, Response } from "express";
import { GetAllCategoriesUseCase } from "./GetAllCategoriesUseCase";
import { container } from "tsyringe";

export class GetAllCategoriesController {
    async execute(request: Request, response: Response) {
        const getAllCategories = container.resolve(GetAllCategoriesUseCase);

        const categories = await getAllCategories.execute();
        return response.json(categories);
    }
}
