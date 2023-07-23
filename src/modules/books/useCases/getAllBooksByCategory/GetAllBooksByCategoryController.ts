import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllBooksByCategoryUseCase } from "./GetAllBooksByCategoryUseCase";

export class GetAllBooksByCategoryController {
  async execute(request: Request, response: Response) {
    const { id: user_id } = request.user;
    const { category } = request.query;

    const getBooks = container.resolve(GetAllBooksByCategoryUseCase);
    const books = await getBooks.execute(user_id, category as string);

    return response.json(books);
  }
}
