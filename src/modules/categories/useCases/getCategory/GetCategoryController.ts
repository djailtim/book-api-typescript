import { Request, Response } from "express";
import { GetCategoryUseCase } from "./GetCategoryUseCase";
import { container } from "tsyringe";

export class GetCategoryController {
    async execute(request: Request, response: Response) {
        const { id } = request.params;

        const getCategory = container.resolve(GetCategoryUseCase);
        const category = await getCategory.execute(id);
        return response.json(category);
    }
}
