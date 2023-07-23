import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetBookUseCase } from "./GetBookUseCase";

export class GetBookController {
  async execute(request: Request, response: Response) {
    const { id: user_id } = request.user;
    const { id: book_id } = request.params;

    const getBook = container.resolve(GetBookUseCase);
    const book = await getBook.execute(book_id, user_id);
    return response.json(book);
  }
}
