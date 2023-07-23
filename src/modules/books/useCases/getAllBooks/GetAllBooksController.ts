import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllBooksUseCase } from "./GetAllBooksUseCase";

export class GetAllBookController {
  async execute(request: Request, response: Response) {
    const { id: user_id } = request.user;
    const getAllBooks = container.resolve(GetAllBooksUseCase);

    const books = await getAllBooks.execute(user_id);
    return response.json(books);
  }
}
