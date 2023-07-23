import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteBookUseCase } from "./DeleteBookUseCase";

export class DeleteBookController {
  async execute(request: Request, response: Response) {
    const { id: user_id } = request.user;
    const { id: book_id } = request.params;

    const deleteBook = container.resolve(DeleteBookUseCase);
    await deleteBook.execute(book_id, user_id);

    return response.status(204).send();
  }
}
