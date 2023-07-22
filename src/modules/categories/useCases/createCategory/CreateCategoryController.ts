import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategoryController {
    async execute (request: Request, response: Response) {
        const { name, description } = request.body;

        const createCategory = container.resolve(CreateCategoryUseCase);
        await createCategory.execute({ name, description });

        return response.status(201).send();
    }
}