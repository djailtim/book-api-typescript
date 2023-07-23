import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBookUseCase } from "./CreateBookUseCase";

export class CreateBookController {
    async execute(request: Request, response: Response) {
        const { id: user_id } = request.user;
        const { category_id, title, author, status } = request.body;

        const createBook = container.resolve(CreateBookUseCase);

        const book = await createBook.execute({
            user_id,
            category_id,
            title,
            author,
            status
        });

        return response.status(201).json(book);
    }
}
